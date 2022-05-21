import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './movies/movieSlice';
import SeatReducer from './seats/seatSlices';

export const store = configureStore({
    reducer:{
        movies: MovieReducer,
        seats: SeatReducer
    },
})