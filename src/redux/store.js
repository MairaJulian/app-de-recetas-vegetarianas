import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./favouriteReducer";

export const store = configureStore({
    reducer: {
        favourite: favouriteSlice,
    }
})