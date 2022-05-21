import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";

export const fetchAsyncSelectedSeats =
  createAsyncThunk();
  // "movies/fetchAsyncMovies",
  // async (term) => {
  //   const response = await movieApi.get(
  //     `?apiKey=${APIKey}&s=${term}&type=movie`
  //   );
  //   return response.data;
  // }

export const fetchAsyncLoveSeats = createAsyncThunk();

const initialState = {
  seats: [],
  selectedSeats: [],
  soldSeats: [],
  loveSeats: [],
};

const seatSlices = createSlice({
  name: "seats",
  initialState,
  reducers: {
    addSeats: (state, { payload }) => {
      state.seats = payload;
    },
  },
  extraReducers: {
    [fetchAsyncSelectedSeats.fulfilled]: (state, { payload }) => {
      return { ...state, selectedSeats: payload };
    },
    [fetchAsyncLoveSeats.fulfilled]: (state, { payload }) => {
      return { ...state, loveSeats: payload };
    },
  },
});

export const { addSeats } = seatSlices.actions;
export const getAllSelectedSeats = (state) => state.seats.selectedSeats;
export const getAllLoveSeats = (state) => state.seats.loveSeats;
export default seatSlices.reducer;
