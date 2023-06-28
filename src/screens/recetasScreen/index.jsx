import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'

import styles from './styles'


const Recetas = ({navigation, route}) => {
  const {item} = route.params
  console.log(item);


    const renderItem = ({item}) => (
        <TouchableOpacity 
          style={styles.boton} 
          onPress={()=>navigation.navigate("Ingredientes y Preparación", {
            name: item.name, 
            ingredientes: item.ingredientes, 
            preparacion: item.preparacion, 
            image: item.image,
            idReceta: item.idReceta
            // item
          })}>
            <Text style={styles.texto}>{item.name}</Text>
            <Image source={item.image} style={styles.foto}/>
        </TouchableOpacity>
    )

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.categoriasContainer}>
        <FlatList
          data={item.listaDeComidas}
          renderItem={renderItem}
          keyExtractor={item => item.idReceta}
          style={styles.lista}
        />
      </View>
    </ScrollView>
  )
}

export default Recetas