import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { eliminarFavorito } from '../../redux/recetasReducer'

import React from 'react'
import styles from './styles'

const Favoritos = () => {

  const favoritos = useSelector((state) => state.favoritos);
  console.log(favoritos);

  // const recetasFavoritas = useSelector(state => state.recetas.recetasFavoritas)
  const dispatch = useDispatch()

  const handleQuitarDeFavorito = (idReceta) => {
    dispatch(eliminarFavorito(idReceta))
  }

  return (
    <View>
      <Text>Recetas Favoritas:</Text>
      {favoritos.map(receta => (
        <View key={receta.idReceta}>
          <Text>{receta.name}</Text>
          <Button title="Quitar de favoritos" onPress={() => handleQuitarDeFavorito(receta.idReceta)} />
        </View>
      ))}
    </View>

    // <View style={styles.container}>
    //   <Text>Favoritos</Text>
    //   <View>
    //     <Text>{receta.name}</Text>
    //     <Text>{receta.image}</Text>
    //   </View>
    // </View>
  )
}

export default Favoritos