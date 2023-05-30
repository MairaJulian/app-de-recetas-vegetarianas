import { configureStore } from "@reduxjs/toolkit";
import recetasReducer from './recetasReducer'

export const store = configureStore({
    reducer: {
        favoritos: recetasReducer,
    }
})