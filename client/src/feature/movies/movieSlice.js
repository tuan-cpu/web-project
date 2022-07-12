import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import movieApi from "../../common/api/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    if(term !== ""){
      const response = await movieApi.get(`nowplaying?title=${term}`);
      return response.data;
    }else{
      const response = await movieApi.get("nowplaying");
      return response.data;
    }
  }
);

export const fetchAsyncUpcomingMovies = createAsyncThunk(
  "movies/fetchAsyncUpcomingMovies",
  async (term) =>{
    if(term !== ""){
      const response = await movieApi.get(`upcoming?title=${term}`);
      return response.data;
    }else{
      const response = await movieApi.get("upcoming");
      return response.data;
    }
  }
)


export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`movie/${id}`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  upcomingMovies: {},
  selectMovieOrShow: {},
  loader: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      return { ...state, loader: true };
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload, loader: false };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncUpcomingMovies.pending]: (state) => {
      return { ...state, loader: true };
    },
    [fetchAsyncUpcomingMovies.fulfilled]: (state, { payload }) => {
      return { ...state, upcomingMovies: payload, loader: false };
    },
    [fetchAsyncUpcomingMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getUpcomingMovies = (state) => state.movies.upcomingMovies;
export const getMoviesLoader = (state) => state.movies.loader;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
