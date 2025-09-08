import axios from 'axios';

export const handleRedirect = async (isLogin) => {
  try {
    // Use ip-api.com to fetch location data
    const response = await axios.get('https://fastoneglobalmarkets.com/api/location/');
    const { countryCode } = response.data;

    // If the user is from Mauritius (country code "MU"), use the .com links
    if (countryCode === "MU") {
      if (isLogin) {
        window.location.href = "https://my.fastoneglobalmarkets.com/login";
      } else {
        window.location.href = "https://my.fastoneglobalmarkets.com/create-account";
      }
    } else {
      // Redirect to the .co links for users outside Mauritius
      if (isLogin) {
        window.location.href = "https://my.fastoneglobalmarkets.co/login";
      } else {
        window.location.href = "https://my.fastoneglobalmarkets.co/en/register";
      }
    }
  } catch (error) {
    console.error("Error fetching location data:", error);
    // Fallback in case of an API error, redirect to the default .com
    if (isLogin) {
      window.location.href = "https://my.fastoneglobalmarkets.com/login";
    } else {
      window.location.href = "https://my.fastoneglobalmarkets.com/en/register";
    }
  }
};
