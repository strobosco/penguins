import axios from "axios";

const API_URL = "https://api.giphy.com/v1/gifs/search";
const API_KEY = "WL8y7AaUtu88Nq9yAPU9PnsLQqWMN8DO";

export const fetchPosts = async () => {
  const res = await axios
    .get(API_URL, {
      params: {
        api_key: API_KEY,
        q: "penguins",
        limit: 16,
      },
    })
    .catch((e) => {
      console.log(e);
    });

  const posts = res.data.data;
  const links = new Array();
  posts.map((p) => {
    links.push(p.images.original_mp4.mp4);
  });
  console.log(links);
  /**
   * Links store the top 20 results for 'penguins' using the Giphy API
   */
};
