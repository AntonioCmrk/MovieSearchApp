import axios from "axios";

const API_KEY = "8347850e3b734cd5e23c0671da06d1b7";
const LANGUAGE = "en-US";
const AUTHORIZATION =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzQ3ODUwZTNiNzM0Y2Q1ZTIzYzA2NzFkYTA2ZDFiNyIsInN1YiI6IjY0ODIwOWMxYmYzMWYyMDBhZWM3MGYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6oYYbb_z2v0UPoM7u3PebvdpHjQ2cVvdbmKeyrJkKI";
const BASE_URL = "https://api.themoviedb.org/3";
const TRENDING_MOVIE = "/trending/movie/day";
const TRENDING_PERSON = "/trending/person/day";
const TOP_RATED = "/movie/top_rated";
const GENRE_LIST = "/genre/movie/list";
const SEARCH_MOVIE = "/search/movie";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  method: "GET",
  url: BASE_URL + TRENDING_MOVIE,
  params: { language: LANGUAGE, api_key: API_KEY },
  headers: {
    accept: "application/json",
    Authorization: AUTHORIZATION,
  },
};

export const getTrendingMovies = async () => {
  return axios.request(options).catch(function (error) {
    console.error(error);
  });
};
