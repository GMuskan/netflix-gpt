import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/UserSlice";
import moviesReducer from "../Slices/MoviesSlice";

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    }
})