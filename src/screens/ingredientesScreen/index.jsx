import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

import styles from './styles'

const Ingredientes = ({route}) => {
  console.log(route);

  const {ingredientes, preparacion, imagen} = route.params
  // const {ingredientes} = recetas

  const renderItemIngredientes = ({item}) => (
    <View>
        <Text>* {item}</Text>
    </View>
)

  const renderItemPreparacion = ({item}) => (
    <View style={styles.item}>
        <Text>{item}</Text>
    </View>
)

  return (
    <View style={styles.instrucciones}>
      <Image source={imagen} style={styles.imagen}/>
      <Text style={styles.titulo}>INGREDIENTES</Text>
      <FlatList
        data={ingredientes}
        renderItem={renderItemIngredientes}
        keyExtractor={item => item}
        style={styles.lista}
      />
      <Text style={styles.titulo}>PREPARACIÓN</Text>
      <FlatList
        data={preparacion}
        renderItem={renderItemPreparacion}
        keyExtractor={item => item}
        style={styles.lista}
      />
    </View>
  )
}

export default Ingredientes