import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type trendingMoviesState = {
  loading: boolean;
  trendingMovies: [];
  error: any;
};

const initialState: trendingMoviesState = {
  loading: false,
  trendingMovies: [],
  error: "",
};

export const fetchTrendingMovies: any = createAsyncThunk(
  "trendingMovies/fetchTrendingMovies",
  () => {
    return axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=8347850e3b734cd5e23c0671da06d1b7"
      )
      .then((response) => response.data);
  }
);

const trendingMoviesSlice = createSlice({
  name: "trendingMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrendingMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTrendingMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.trendingMovies = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTrendingMovies.rejected, (state, action) => {
      state.loading = false;
      state.trendingMovies = [];
      state.error = action.error.message;
    });
  },
});

export default trendingMoviesSlice.reducer;
