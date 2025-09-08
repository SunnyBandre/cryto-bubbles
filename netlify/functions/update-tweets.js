const AWS = require("aws-sdk");
const axios = require("axios");

const bucketName = process.env.BUCKET_NAME || "fastone-netlify"; // Default bucket name
const fileName = "latest-tweets.json"; // File name in S3
const userIds = ["381696140", "108617488"]; // User IDs

const s3 = new AWS.S3({
  accessKeyId: process.env.XZ_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.XZ_AWS_SECRET_ACCESS_KEY,
  region: process.env.XZ_AWS_REGION,
});

// Function to fetch latest tweets from a user timeline
const fetchTweets = async (userId) => {
  try {
    const response = await axios.get(`https://api.twitter.com/2/users/${userId}/tweets`, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
      params: {
        max_results: 18, // Fetch a maximum of 18 tweets per user
        'tweet.fields': 'created_at' // Request the created_at field
      },
    });

    if (!response.data.data) {
      throw new Error(`No tweets found for user ID: ${userId}`);
    }

    // Include user_id in each tweet object
    return response.data.data.map(tweet => ({
      id: tweet.id,
      text: tweet.text,
      created_at: tweet.created_at, // Save the timestamp of the tweet
      user_id: userId, // Include the user ID
    }));
  } catch (error) {
    console.error(`Error fetching tweets for user ID ${userId}:`, error);
    return []; // Return an empty array in case of error
  }
};

exports.handler = async function (event, context) {
  try {
    // Fetch tweets concurrently for both user IDs
    const tweetsArray = await Promise.all(userIds.map(userId => fetchTweets(userId)));

    // Flatten the array of tweets to combine all results
    const tweets = [].concat(...tweetsArray).filter(tweet => tweet); // Remove any undefined or null tweets

    // Save to S3 if there are tweets to save
    if (tweets.length > 0) {
      const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: JSON.stringify(tweets, null, 2), // Pretty print JSON for better readability
        ContentType: "application/json",
      };

      await s3.putObject(params).promise();
    } else {
      console.warn("No tweets to save.");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Tweets updated successfully!", tweets }),
    };
  } catch (error) {
    console.error("Error fetching or saving tweets:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to update tweets" }),
    };
  }
};
