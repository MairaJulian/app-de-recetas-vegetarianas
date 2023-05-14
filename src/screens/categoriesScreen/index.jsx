import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import Arroz from '../../assets/imagenes/arroz.jpg'
import Fideos from '../../assets/imagenes/fideos.jpg'
import Gluten from '../../assets/imagenes/gluten.jpg'
import ArrozConPollo from '../../assets/imagenes/ArrozConPollo.png'
import Paella from '../../assets/imagenes/paella.jpg'
import Risoto from '../../assets/imagenes/risoto.jpg'

import styles from './styles'

const Categories = ({navigation}) => {

    const listaCategorias = [
        {id: 1, titulo: "Recetas con arroz", imagen: Arroz, recetas: [
          {id: 1, titulo: "Arroz con pollo", imagen: ArrozConPollo, ingredientes: [
              "3 ARROZ", 
              "6 tazas CALDO DE POLLO", 
              "2 unidades PIERNAS DE POLLO", 
              "2 unidades MUSLOS DE POLLO",
              "1/2 taza CHÍCHAROS",
              "1/2 taza PIMIENTOS EN TROCITOS",
              "1/2 taza GRANITOS DE MAÍZ",
              "1/2 taza ACEITUNAS VERDES",
              "2 cucharadas",
              "ACEITE"]
            , preparacion: [
              "1- Sazonar las piezas de pollo con el sazonador.",
              "2- Cocinar el pollo a la plancha o a la parrilla hasta que esté bien cocido por dentro y dorado por fuera de manera uniforme.",
              "3- Colocar el arroz en una olla caliente con 4 cdas. de aceite. Incorporar los chícharos, pimientos y granitos de maíz y saltear por 2 minutos.",
              "4- Verter el caldo de pollo y sazonar con el sazonador",
              "5- Cocinar a fuego alto por 3 minutos, reducir el fuego a mínimo, tapar la olla y cocinar hasta que el caldo se consuma.",
              "6- Dejar reposar por 5 minutos el arroz antes de servirlo. Servir una cama de arroz en un recipiente, decorar con las aceitunas y colocar los trozos de pollo sobre el arroz."
            ]},
          {id: 2, titulo: "Paella", imagen: Paella, ingredientes: "", preparacion: ""},
          {id: 3, titulo: "Risoto", imagen: Risoto, ingredientes: "", preparacion: ""},
        ]},
        {id: 2, titulo: "Recetas con fideos", imagen: Fideos, recetas: []},
        {id: 3, titulo: "Recetas con gluten", imagen: Gluten, recetas: []},
    ]

    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.boton} onPress={()=>navigation.navigate("Lista de recetas", {
          item: item
          })}>
            <Text style={styles.texto}>{item.titulo}</Text>
            <Image source={item.imagen} style={styles.foto}/>
        </TouchableOpacity>
    )

  return (
    <View style={styles.categoriasContainer}>
      <FlatList
        data={listaCategorias}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.lista}
      />
    </View>

    // <View style={styles.categoriasContainer}>
    //   <TouchableOpacity style={styles.boton} onPress={()=>navigation.navigate("Lista de recetas")}>
    //     <Text style={styles.texto}>Recetas con arroz</Text>
    //     <Image source={Arroz} style={styles.foto}/>
    //   </TouchableOpacity>
    //   {/* <Button title='Navegar a lista de recetas' onPress={()=>navigation.navigate("Lista de recetas")}/> */}
    // </View>
  )
}

export default Categories