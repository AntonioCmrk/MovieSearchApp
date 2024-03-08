import { configureStore } from "@reduxjs/toolkit";
import trendingMoviesReducer from "./trendingMovies/trendingMoviesSlice";

export const store = configureStore({
  reducer: { trendingMovies: trendingMoviesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
