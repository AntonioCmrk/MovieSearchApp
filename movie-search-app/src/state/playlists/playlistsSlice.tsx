import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
type playlistsState = {
  playlists: any;
  movies: any;
};

const initialState: playlistsState = {
  playlists: [],
  movies: [],
};

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    addToPlaylist: (state, action) => {
      state.movies = [
        ...state.movies,
        {
          playlistId: action.payload.id,
          id: uuidv4(),
          movie: action.payload.movie,
        },
      ];
    },

    deleteFromPlaylist: (state, action) => {
      state.movies = state.movies.filter(
        (movie: any) => movie.id !== action.payload
      );
    },
    createNewPlaylist: (state, action) => {
      const playlistId = uuidv4();
      state.playlists = [
        ...state.playlists,
        {
          id: playlistId,
          author: localStorage.getItem("username"),
          playlistName: action.payload.playlistName,
        },
      ];
      state.movies = [
        ...state.movies,
        { playlistId: playlistId, id: uuidv4(), movie: action.payload.movie },
      ];
    },
    deletePlaylist: (state, action) => {
      state.playlists = state.playlists.filter(
        (playlist: any) => playlist.id !== action.payload
      );
      state.movies = state.movies.filter(
        (movie: any) => movie.playlistId !== action.payload
      );
    },
  },
});

export default playlistsSlice.reducer;
export const {
  addToPlaylist,
  deleteFromPlaylist,
  createNewPlaylist,
  deletePlaylist,
} = playlistsSlice.actions;
