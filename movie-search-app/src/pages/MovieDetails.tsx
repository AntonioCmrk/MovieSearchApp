import { IMG_BASE_URL, getMovieTrailer } from "../api/api";
import { HeadTitle } from "../components/HeadTitle";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import ResponsiveEmbed from "react-responsive-embed";
import { useNavigate } from "react-router-dom";
import { DataTrailerType, GenreType } from "../types/Types";

export const MovieDetails = () => {
  const navigate = useNavigate();
  const [trailerLink, setTrailerLink] = useState("");
  const [genres] = useState(() => {
    const genres = localStorage.getItem("genres");
    const initialValue = genres ? JSON.parse(genres) : null;
    return initialValue || "";
  });
  const [storedMovie] = useState(() => {
    const saved = localStorage.getItem("storedMovie");
    const initialValue = saved ? JSON.parse(saved) : null;
    return initialValue || "";
  });
  storedMovie ? null : navigate("/");

  const filteredGenres = genres.filter((genre: GenreType) =>
    storedMovie.genre_ids.includes(genre.id)
  );
  const filteredGenresNames: string[] = filteredGenres.map(
    (item: GenreType) => item.name
  );
  const { data, isLoading } = useQuery(["trailerData", storedMovie.id], () =>
    getMovieTrailer(storedMovie.id)
  );

  const imgUrl = `${IMG_BASE_URL}${storedMovie.poster_path}`;

  let trailerObject = data?.data.results.find((element: DataTrailerType) => {
    return element.type === "Trailer";
  });

  useEffect(() => {
    trailerObject !== undefined
      ? setTrailerLink(`https://www.youtube.com/embed/${trailerObject.key}`)
      : null;
  }, [trailerObject]);

  return (
    <div className=" mx-20 mb-20">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <HeadTitle title={storedMovie.title} />
          <div className="flex justify-center align-middle gap-3 mb-20">
            <img
              src={
                imgUrl === "https://image.tmdb.org/t/p/w500null"
                  ? "/image-not-available.png"
                  : imgUrl
              }
              className="w-72 rounded-lg"
              alt="alt"
            />
            <div className="flex flex-col justify-center bg-violet-100 rounded-lg [&>div]:bg-violet-200 [&>div]:p-7 gap-14 p-10 text-center [&>div]:rounded-lg max-w-7xl">
              <div>Overview: {storedMovie.overview}</div>
              <div>Rating: {storedMovie.vote_average}</div>

              <span className="flex justify-center [&>div]:bg-violet-200 [&>div]:rounded-lg [&>div]:p-7 [&>div]:mx-10">
                {filteredGenresNames.map((element: string) => (
                  <div key={element}>{element}</div>
                ))}
              </span>
            </div>
          </div>
          <h1 className="text-xl text-violet-600 font-black ">Trailer</h1>
          {trailerLink === "" ? (
            "Trailer unavailable"
          ) : (
            <ResponsiveEmbed
              src={trailerLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></ResponsiveEmbed>
          )}
        </>
      )}
    </div>
  );
};
