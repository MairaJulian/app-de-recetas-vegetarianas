import RECETAS from '../constantes/dataBase'
import { agregarReceta } from '../redux/recetasReducer'

const FetchRecetas = () => {
  return (dispatch) => {
    RECETAS.forEach((receta) => {
        dispatch(agregarReceta(receta))
    })
    }
  }

export default FetchRecetas