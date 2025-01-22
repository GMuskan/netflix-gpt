import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/UserSlice"

export const appStore = configureStore({
    reducer: {
        user: userReducer
    }
})