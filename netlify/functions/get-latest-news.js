const AWS = require("aws-sdk");

const bucketName = process.env.BUCKET_NAME || "fastone-netlify";
const fileName = "latest-tweets.json";

const s3 = new AWS.S3({
  accessKeyId: process.env.XZ_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.XZ_AWS_SECRET_ACCESS_KEY,
  region: process.env.XZ_AWS_REGION,
});

exports.handler = async function (event, context) {
  try {
    const params = {
      Bucket: bucketName,
      Key: fileName,
    };

    const data = await s3.getObject(params).promise();
    const tweets = JSON.parse(data.Body.toString("utf-8"));

    return {
      statusCode: 200,
      body: JSON.stringify(tweets),
    };
  } catch (error) {
    console.error("Error fetching tweets from S3:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch tweets" }),
    };
  }
};
