import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './styles'
import RECETAS from '../../constantes/dataBase'

const Categories = ({navigation}) => {

  // const [categorias, setCategorias] = useState(null)

  // useEffect(() => {
  //   fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=58622c27b46f4210898537e656372fc7&diet=vegetarian&instructionsRequired=true&number=10`)
  //   .then((respuesta) => respuesta.json())
  //   .then((data) => setCategorias(data.results))
  // }, [])

  // console.log(categorias);

    const renderItem = ({item}) => (
        // <TouchableOpacity style={styles.boton} onPress={()=>navigation.navigate("Ingredientes y Preparación", {
        //   item: item.id
        //   })}>
        //     <Text style={styles.texto}>{item.title}</Text>
        //     <Image source={item.image} style={styles.foto}/>
        // </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={()=>navigation.navigate("Lista de recetas", {
          item: item
          })}>
            <Text style={styles.texto}>{item.name}</Text>
            <Image source={item.image} style={styles.foto}/>
        </TouchableOpacity>
    )

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.categoriasContainer}>
        <View style={styles.letrasContainer}>
        </View>
        <FlatList
          // data={categorias}
          data={RECETAS}
          renderItem={renderItem}
          keyExtractor={item => item.idCategoria}
          style={styles.lista}
        />
      </View>
    </ScrollView>
  )
}

export default Categories


// const listaCategorias = [
    //     {id: 1, titulo: "Recetas con arroz", imagen: Arroz, recetas: [
    //       {id: 1, titulo: "Arroz con pollo", imagen: ArrozConPollo, ingredientes: [
    //           "3 ARROZ", 
    //           "6 tazas CALDO DE POLLO", 
    //           "2 unidades PIERNAS DE POLLO", 
    //           "2 unidades MUSLOS DE POLLO",
    //           "1/2 taza CHÍCHAROS",
    //           "1/2 taza PIMIENTOS EN TROCITOS",
    //           "1/2 taza GRANITOS DE MAÍZ",
    //           "1/2 taza ACEITUNAS VERDES",
    //           "2 cucharadas",
    //           "ACEITE"]
    //         , preparacion: [
    //           "1- Sazonar las piezas de pollo con el sazonador.",
    //           "2- Cocinar el pollo a la plancha o a la parrilla hasta que esté bien cocido por dentro y dorado por fuera de manera uniforme.",
    //           "3- Colocar el arroz en una olla caliente con 4 cdas. de aceite. Incorporar los chícharos, pimientos y granitos de maíz y saltear por 2 minutos.",
    //           "4- Verter el caldo de pollo y sazonar con el sazonador",
    //           "5- Cocinar a fuego alto por 3 minutos, reducir el fuego a mínimo, tapar la olla y cocinar hasta que el caldo se consuma.",
    //           "6- Dejar reposar por 5 minutos el arroz antes de servirlo. Servir una cama de arroz en un recipiente, decorar con las aceitunas y colocar los trozos de pollo sobre el arroz."
    //         ]},
    //       {id: 2, titulo: "Paella", imagen: Paella, ingredientes: "", preparacion: ""},
    //       {id: 3, titulo: "Risoto", imagen: Risoto, ingredientes: "", preparacion: ""},
    //     ]},
    //     {id: 2, titulo: "Recetas con fideos", imagen: Fideos, recetas: []},
    //     {id: 3, titulo: "Recetas con gluten", imagen: Gluten, recetas: []},
    // ]


//     import Arroz from '../../assets/imagenes/arrozOK.jpg'
// import Fideos from '../../assets/imagenes/fideosOK.jpg'
// import Gluten from '../../assets/imagenes/glutenOK.jpg'
// import ArrozConPollo from '../../assets/imagenes/ArrozConPolloOK.jpg'
// import Paella from '../../assets/imagenes/paellaOK.jpg'
// import Risoto from '../../assets/imagenes/risotoOK.jpg'import RECETAS from './../../constantes/dataBase';
