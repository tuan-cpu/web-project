import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import movieApi from "../../common/api/movieApi";

export const fetchAsyncSeats = createAsyncThunk(
  "seats/fetchAsyncSeats",
  async (schedule) => {
    const res = await movieApi.get(`schedule/${schedule}`);
    const returnData = [];
    let count = 0;
    res.data.seats.map((seat) => {
      if (seat.status) {
        returnData[count] = seat.seatId;
        count++;
      }
    });
    return returnData;
  }
);

export const postAsyncBookedSeats = createAsyncThunk(
  "seats/postAsyncBookedSeats",
  async (data) => {
    const res = await movieApi.post(
      "book",
      {
        schedule: data.schedule,
        seats: data.array,
        paymentMethod: data.paymentMethod,
      },
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState = {
  seats: [],
  selectedSeats: [],
  schedule: {},
  bookingStatus: false,
};

const seatSlices = createSlice({
  name: "seats",
  initialState,
  reducers: {
    addSeats: (state, { payload }) => {
      state.seats = payload;
    },
    removeSchedule: (state)=>{
      state.schedule = {};
    }
  },
  extraReducers: {
    [postAsyncBookedSeats.pending]: (state) => {
      return { ...state, bookingStatus:false };
    },
    [postAsyncBookedSeats.fulfilled]: (state, { payload }) => {
      return { ...state, schedule: payload, bookingStatus:true };
    },
    [fetchAsyncSeats.fulfilled]: (state, { payload }) => {
      return { ...state, selectedSeats: payload };
    },
  },
});

export const { addSeats, removeSchedule } = seatSlices.actions;
export const getAllSeats = (state) => state.seats.selectedSeats;
export const getSchedule = (state) => state.seats.schedule;
export const getStatus = (state) => state.seats.bookingStatus;
export default seatSlices.reducer;
