import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import movieApi from "../../common/api/movieApi";

export const fetchAsyncSeats = createAsyncThunk(
  "seats/fetchAsyncSeats",
  async(schedule)=>{
    const res = await movieApi.get(`schedule/${schedule}`);
    return res.data;
  }
);

export const postAsyncBookedSeats = createAsyncThunk(
  "seats/postAsyncBookedSeats",
  async(schedule,array,paymentMethod)=>{
    const res = await movieApi.post('book',{
      schedule: schedule,
      seats: array,
      paymentMethod: paymentMethod
    });
    console.log(res);
  }
)

const initialState = {
  seats: [],
  selectedSeats: [],
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
    [postAsyncBookedSeats.fulfilled]:()=>{
      console.log("Post successfully");
    },
    [fetchAsyncSeats.fulfilled]:(state,{payload})=>{
      return {...state,seats:payload};
    }
  },
});

export const { addSeats } = seatSlices.actions;
export const getAllSeats = (state) => state.seats.seats;
export default seatSlices.reducer;
