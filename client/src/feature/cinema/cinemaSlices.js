import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import movieApi from "../../common/api/movieApi";

export const fetchAsyncCinemaName = createAsyncThunk(
    "cinema/fetchAsyncCinemaName",
    async(term)=>{
        const res = await movieApi.get(`cinema/${term}`);
        return res.data;
    }
)
const initialState = {
    cinema: {},
};

const cinemaSlice = createSlice({
    name: "cinema",
    initialState,
    extraReducers:{
        [fetchAsyncCinemaName.fulfilled]:(state,{payload})=>{
            return {...state,cinema:payload}
        }
    }
})

export const getCinemaName = (state) =>state.cinema.cinema;