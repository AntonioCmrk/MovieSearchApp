import { useQuery } from "react-query";
import { searchMovies } from "../api/api";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { MovieCard } from "../components/MovieCard";
import { PersonCard } from "../components/PersonCard";
import { useNavigate } from "react-router-dom";
import { ShowCard } from "../components/ShowCard";
import { SearchedResult } from "../types/Types";

export const Search = () => {
  const navigate = useNavigate();
  const searchValue = useSelector<RootState, string>(
    (state) => state.search.searchValue
  );
  const { data, isLoading } = useQuery(["searchMovies", searchValue], () =>
    searchMovies(searchValue)
  );
  return (
    <div className="w-full">
      {isLoading ? <div>Loading...</div> : null}
      {!isLoading && data === undefined ? <div>Error</div> : null}
      {!isLoading && data !== undefined ? (
        <div className="flex flex-wrap justify-around px-56">
          {data?.data.results.map((searchedResult: SearchedResult) => (
            <div className="p-7 " key={searchedResult.id}>
              {searchedResult.media_type === "person" ? (
                <PersonCard person={searchedResult} />
              ) : searchedResult.media_type === "tv" ? (
                <div
                  onClick={() => {
                    localStorage.setItem(
                      "storedShow",
                      JSON.stringify(searchedResult)
                    );
                    navigate("/show-details");
                  }}
                >
                  <ShowCard show={searchedResult} />
                </div>
              ) : (
                <div
                  onClick={() => {
                    localStorage.setItem(
                      "storedMovie",
                      JSON.stringify(searchedResult)
                    );
                    navigate("/movie-details");
                  }}
                >
                  <MovieCard movie={searchedResult} />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
