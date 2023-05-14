import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

import styles from './styles'
// import ArrozConPollo from '../../assets/imagenes/ArrozConPollo.png'
// import Paella from '../../assets/imagenes/paella.jpg'
// import Risoto from '../../assets/imagenes/risoto.jpg'


const Recetas = ({navigation, route}) => {
  // const {recetas} = route.params.item
  const {item} = route.params
  const {recetas} = item
    // const listaRecetas = [
    //     {id: 1, titulo: "Arroz con pollo", imagen: ArrozConPollo},
    //     {id: 2, titulo: "Paella", imagen: Paella},
    //     {id: 3, titulo: "Risoto", imagen: Risoto},
    // ]

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.boton} onPress={()=>navigation.navigate("Ingredientes y Preparación", {ingredientes: item.ingredientes, preparacion: item.preparacion, imagen: item.imagen})}>
            <Text style={styles.texto}>{item.titulo}</Text>
            <Image source={item.imagen} style={styles.foto}/>
        </TouchableOpacity>
    )

  return (
    <View style={styles.categoriasContainer}>
      {/* <Text>{route.params.item.titulo}</Text>
      <Text>{route.params.item.id}</Text>
      <Text>{route.params.item.imagen}</Text> */}
      <FlatList
        data={recetas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.lista}
      />
    </View>

    // <View style={styles.container}>
    //   <TouchableOpacity style={styles.boton} onPress={()=>navigation.navigate("Ingredientes y Preparación")}>
    //     <Text style={styles.texto}>Arroz con pollo</Text>
    //     <Image source={ArrozConPollo} style={styles.foto}/>
    //   </TouchableOpacity>
    //   {/* <Button title='Navegar a ingredientes' onPress={()=>navigation.navigate("Ingredientes y Preparación")}/> */}
    // </View>
  )
}

export default Recetas