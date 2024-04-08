import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { HeadTitle } from "../components/HeadTitle";
import { Tooltip } from "react-tooltip";
import {
  deleteFromPlaylist,
  deletePlaylist,
} from "../state/playlists/playlistsSlice";
import { useNavigate } from "react-router-dom";

export const Playlists = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogedIn = useSelector<RootState, boolean>(
    (state) => state.loginStatus.isLogedIn
  );
  const username = useSelector<RootState, string | null>(
    (state) => state.loginStatus.username
  );
  const playlists = useSelector<RootState, any>(
    (state) => state.playlists.playlists
  );
  const movies = useSelector<RootState, []>((state) => state.playlists.movies);
  const mapPlaylists = () => {
    return playlists.map((playlist: any) => {
      return (
        <div key={playlist.id}>
          <div key={playlist.id} className=" p-6 text-lg relative">
            {playlist.playlistName}
            {username === playlist.author ? (
              <button
                data-tooltip-id="delete-playlist-tooltip"
                data-tooltip-content={`Delete ${playlist.playlistName}`}
                className="rounded-full px-2 hover:bg-violet-600 bg-violet-400 ml-2 absolute right-2"
                onClick={() => dispatch(deletePlaylist(playlist.id))}
              >
                x
              </button>
            ) : null}
          </div>
          <Tooltip id="delete-playlist-tooltip" />
          {mapMovieLists(playlist.id).map((movie: any) => (
            <>
              <div className="flex">
                <div
                  key={movie.id}
                  className=" p-4 bg-slate-300 hover:bg-slate-400  cursor-pointer rounded-l-2xl my-2 ml-2 flex-[80]"
                  onClick={() => {
                    localStorage.setItem(
                      "storedMovie",
                      JSON.stringify(movie.movie)
                    );
                    navigate("/movie-details");
                  }}
                >
                  {movie.movie.title}
                </div>
                {username === playlist.author ? (
                  <button
                    data-tooltip-id="remove-movie-tooltip"
                    data-tooltip-content={`Remove move from ${playlist.playlistName}`}
                    className="rounded-r-2xl p-4 hover:bg-violet-600 bg-violet-400  my-2 mr-2 flex-[20]"
                    onClick={() => dispatch(deleteFromPlaylist(movie.id))}
                  >
                    remove
                  </button>
                ) : null}
              </div>
              <Tooltip id="delete-movie-tooltip" />
            </>
          ))}
        </div>
      );
    });
  };
  const mapMovieLists = (playlistId: any) => {
    return movies.filter((movie: any) => movie.playlistId === playlistId);
  };
  return (
    <>
      <HeadTitle title="Playlists" />
      <div
        className={`bg-slate-200  rounded-2xl sm:min-w-[600px] ${
          playlists.length !== 0 ? "p-4" : null
        }`}
      >
        {mapPlaylists()}
      </div>
    </>
  );
};