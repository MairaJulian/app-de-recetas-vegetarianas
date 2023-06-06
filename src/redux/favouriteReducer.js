import { createSlice } from "@reduxjs/toolkit"
import RECETAS from "../constantes/dataBase"

const initialState = {
    value: {
        favourite: [],
    }
}

const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {  //acciones posibles dentro de favourite
        agregar: (state, action) => {
            const recetaRepetida = state.value.favourite.find(receta => receta.idReceta === action.payload.idReceta)
            //no estoy segura de que sea idReceta, probar con id solo
            if (recetaRepetida) {
                console.log("Esta receta ya está en favoritos");
            }else {
                const receta = RECETAS.find(receta => receta.listaDeComidas.idReceta === action.payload.idReceta) //no estoy segura de que sea idReceta
                state.value.favourite.push({receta})
            }
        },
        quitar: () => {}
    }
})

export const {agregar, quitar} = favouriteSlice.actions
export default favouriteSlice.reducer