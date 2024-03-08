import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "../state/trendingMovies/trendingMoviesSlice";
import type { RootState, AppDispatch } from "../state/store";
import { MovieCard } from "../components/MovieCard";
import { useQuery } from "react-query";
import { getTrendingMovies } from "../api/api";

type State = {
  trendingMovies: any;
};
export const TrendingMovies = () => {
  // const trendingMovie: any = useSelector<RootState>(
  //   (state: State) => state.trendingMovies
  // );
  // const dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  //   dispatch(fetchTrendingMovies());
  // }, []);

  const { data, isLoading } = useQuery(["trendingMovies"], getTrendingMovies);
  console.log("data", data?.data);
  return (
    <div className="w-full ">
      <div className="flex justify-center align-middle">TrendingMovies</div>
      {isLoading ? <div>Loading...</div> : null}
      {!isLoading && data === undefined ? <div>Error</div> : null}
      {!isLoading && data !== undefined ? (
        <div className="flex flex-wrap justify-around px-56">
          {data.data.results.map((trendingMovie: any) => (
            <div className="p-7" key={trendingMovie.id}>
              <MovieCard
                title={trendingMovie.title}
                imagePath={trendingMovie.poster_path}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
