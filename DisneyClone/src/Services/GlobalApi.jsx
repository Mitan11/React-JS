import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "04571b213e7a00784f87613b6119965b";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

export default { getTrendingVideos };
