import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './movies/movieSlice';
import SeatReducer from './seats/seatSlices';
import AuthReducer from './auths/authSlice';

export const store = configureStore({
    reducer:{
        movies: MovieReducer,
        seats: SeatReducer,
        auth: AuthReducer
    },
})