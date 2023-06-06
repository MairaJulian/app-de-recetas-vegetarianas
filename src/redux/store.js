import { configureStore } from "@reduxjs/toolkit";
import recetasReducer from './recetasReducer'
import favouriteReducer from "./favouriteReducer";

export const store = configureStore({
    reducer: {
        favoritos: recetasReducer,
        favourite: favouriteReducer
    }
})