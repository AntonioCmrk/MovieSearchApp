import { useQuery } from "react-query";
import { getTrendingPersons } from "../api/api";
import { HeadTitle } from "../components/HeadTitle";
import { PersonCard } from "../components/PersonCard";
import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { Person } from "../types/Types";

export const TrendingPersons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const { data: trendingPersonsData, isLoading: trendingPersonsLoading } =
    useQuery(["trendingPersons", currentPage], () =>
      getTrendingPersons(currentPage)
    );
  useEffect(() => {
    setMaxPage(trendingPersonsData?.data.total_pages / 2);
  }, [trendingPersonsData?.data.total_pages]);
  return (
    <div className="w-full">
      <HeadTitle title="Trending Persons" />
      {trendingPersonsLoading ? <div>Loading...</div> : null}
      {!trendingPersonsLoading && trendingPersonsData === undefined ? (
        <div>Error</div>
      ) : null}
      {!trendingPersonsLoading && trendingPersonsData !== undefined ? (
        <>
          <div className="flex flex-wrap justify-around px-56">
            {trendingPersonsData?.data.results.map((trendingPerson: Person) => (
              <div className="p-7 " key={trendingPerson.id}>
                <PersonCard person={trendingPerson} />
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
