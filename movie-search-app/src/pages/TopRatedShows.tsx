import { useQuery } from "react-query";
import { getTopRatedShows } from "../api/api";
import { HeadTitle } from "../components/HeadTitle";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { ShowCard } from "../components/ShowCard";
import { Show } from "../types/Types";

export const TopRatedShows = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const { data: topRatedShowsData, isLoading: topRatedShowsLoading } = useQuery(
    ["topRatedShows", currentPage],
    () => getTopRatedShows(currentPage)
  );
  useEffect(() => {
    setMaxPage(topRatedShowsData?.data.total_pages);
  }, [topRatedShowsData?.data.total_pages]);
  return (
    <div className="w-full">
      <HeadTitle title="Top Rated Movies" />
      {topRatedShowsLoading ? <div>Loading...</div> : null}
      {!topRatedShowsLoading && topRatedShowsData === undefined ? (
        <div>Error</div>
      ) : null}
      {!topRatedShowsLoading && topRatedShowsData !== undefined ? (
        <>
          <div className="flex flex-wrap justify-around px-56">
            {topRatedShowsData?.data.results.map((topRatedShow: Show) => (
              <div
                className="p-7 "
                onClick={() => {
                  localStorage.setItem(
                    "storedShow",
                    JSON.stringify(topRatedShow)
                  );
                  navigate("/show-details");
                }}
                key={topRatedShow.id}
              >
                <ShowCard show={topRatedShow} />
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
