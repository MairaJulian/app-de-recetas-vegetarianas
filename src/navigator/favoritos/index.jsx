import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import styles from './styles'
import { quitar } from '../../redux/favouriteReducer'


const Favoritos = () => {
  
  const favoritos = useSelector((state) => state.favourite.value);
  console.log("interior de favoritos");
  console.log(favoritos);
  // const recetasFavoritas = useSelector(state => state.recetas.recetasFavoritas)
  const dispatch = useDispatch()

  const handleQuitarDeFavorito = (idReceta) => {
    dispatch(quitar(idReceta))
  }

  return (
    <View>
      <Text>Recetas Favoritas:</Text>
      {favoritos.value.favourite.map(receta => (
        <View key={receta.receta.idCategoria}>
          <Text>{receta.receta.name}</Text>
          <Button title="Quitar de favoritos" onPress={() => handleQuitarDeFavorito(receta.receta.idCategoria)} />
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