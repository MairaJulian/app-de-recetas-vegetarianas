import { createSlice } from "@reduxjs/toolkit";

export const favoritosSlice = createSlice({
    name: "favoritos",
    initialState: [],
    reducers: {
        agregarFavorito: (state, action) => {
            const nuevaReceta = action.payload
            if(!state.find((receta)=>receta.idReceta === nuevaReceta.idReceta)) {
                state.push(nuevaReceta)
            }
        },
        eliminarFavorito: (state, action) => {
            const recetaId = action.payload;
            return state.filter((receta)=> receta.idReceta !== recetaId)
        },
    }
})

export const {agregarFavorito, eliminarFavorito} = favoritosSlice.actions
export default favoritosSlice.reducer