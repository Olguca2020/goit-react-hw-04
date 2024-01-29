import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const clientId = "vL87H0P4TQegySgYx-Q6wVj7Vaqa-T0bAh0RU3i5WVg";
export const fetchPhotosWithTopic = async (topic) => {
  const response = await axios.get(
    `search/collections?query=${topic}&client_id=${clientId}`
  );
  console.log(response.data.results);
  return response.data.results;
};
