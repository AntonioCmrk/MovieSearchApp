import { useQuery } from "react-query";
import { getTopRatedMovies } from "../api/api";
import { HeadTitle } from "../components/HeadTitle";
import { MovieCard } from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { Movie } from "../types/Types";

export const TopRatedMovies = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const { data: topRatedMoviesData, isLoading: topRatedMoviesLoading } =
    useQuery(["topRatedMovies", currentPage], () =>
      getTopRatedMovies(currentPage)
    );
  useEffect(() => {
    setMaxPage(topRatedMoviesData?.data.total_pages);
  }, [topRatedMoviesData?.data.total_pages]);
  return (
    <div className="w-full">
      <HeadTitle title="Top Rated Movies" />
      {topRatedMoviesLoading ? <div>Loading...</div> : null}
      {!topRatedMoviesLoading && topRatedMoviesData === undefined ? (
        <div>Error</div>
      ) : null}
      {!topRatedMoviesLoading && topRatedMoviesData !== undefined ? (
        <>
          <div className="flex flex-wrap justify-around px-56">
            {topRatedMoviesData?.data.results.map((topRatedMovie: Movie) => (
              <div
                className="p-7 "
                onClick={() => {
                  localStorage.setItem(
                    "storedMovie",
                    JSON.stringify(topRatedMovie)
                  );
                  navigate("/movie-details");
                }}
                key={topRatedMovie.id}
              >
                <MovieCard movie={topRatedMovie} />
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            maxPage={maxPage}
          />
        </>
      ) : null}
    </div>
  );
};
