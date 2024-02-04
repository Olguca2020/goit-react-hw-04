import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const clientId = "vL87H0P4TQegySgYx-Q6wVj7Vaqa-T0bAh0RU3i5WVg";

export const fetchPhotosWithTopic = async (query, page) => {
  const response = await axios.get(
    `search/collections?query=${query}&client_id=${clientId}&orientation=portrait&page=${page}&per_page=12`
  );

  // export const fetchPhotosWithTopic = async (topic) => {
  //   const response = await axios.get("search/collections", {
  //     params: {
  //       query: topic,
  //       client_id: clientId,
  //       orientation: "portrait",
  //     },
  //   });

  console.log(response.data.results);
  return response.data;
};
