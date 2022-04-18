import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 19tjKxymdRx4yQqOIVX0a5TjsY2WPwwdrpySjwWgAKUMugEDqLop2OJagu4m0k6Hn6oTO5-dqcTIdhqnGgWezPGbr1n8WujicsD3R67SfurlfkBRjbBqb0TE2dtPYnYx",
  },
});
