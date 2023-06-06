import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
// import WebView from 'react-native-webview'
// import React, { useState } from 'react'
// import { agregarFavorito, eliminarFavorito} from '../../redux/recetasReducer';
import { useDispatch } from 'react-redux';
import { agregar } from '../../redux/favouriteReducer';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

const Ingredientes = ({route}) => {
  console.log("esto es lo que llega dentro de route en preparacion");
  console.log(route);

  // const [esFavorito, setEsFavorito] = useState(false)
  
  // const {name, ingredientes, preparacion, image} = route.params.item
  const {item} = route.params

  const dispatch = useDispatch()

  const handleMeGusta = (idReceta) => {
    dispatch(agregar({idReceta}))  //PORQUE {id: id}??? Y PORQUE ES LO MISMO QUE {id}?????
  }

  // const [receta, setReceta] = useState({})

  // useEffect(() => {
  //   fetch(`https://api.spoonacular.com/recipes/${item}/information?apiKey=58622c27b46f4210898537e656372fc7`)
  //   .then((respuesta) => respuesta.json())
  //   .then((data) => setReceta(data))
  // }, [])

  // console.log(receta);

  const renderIngredients = ({item}) => (
    <View style={styles.listaIngredientes}>
      {/* <Text style={styles.ingredientsText}>* {item.name} {item.amount} {item.unit}</Text> */}
      <Text style={styles.ingredientsText}>* {item.cantidad} {item.ingrediente}</Text>
    </View>
  )

  // const renderSteps = ({item}) => (
  //   <View style={styles.instructionContainer}>
  //     <Text style={styles.instructionText}>{item.number} {item.step}</Text>
  //   </View>
  // )

  const renderInstructions = ({item}) => (
    <View style={styles.listaInstrucciones}>
      <Text style={styles.instructionText}>{item.number}- {item.step} </Text>
      {/* <FlatList 
        data={item.steps}
        renderItem={renderSteps}
        keyExtractor={item => item.number}
      /> */}
    </View>
  )

  return (
    <ScrollView>
      <View style={styles.instrucciones}>
        <TouchableOpacity onPress={()=>handleMeGusta(item.idReceta)}>
          <Ionicons name="heart" size={24} color={"red"}/>
        </TouchableOpacity>
        {/* <Image source={receta.image} style={styles.imagen}/> */}
        <Image source={item.image} style={styles.imagen}/>
        {/* <Text style={styles.tituloReceta}>{receta.title}</Text> */}
        <Text style={styles.tituloReceta}>{item.name}</Text>
        <View style={styles.ingredientesContainer}>
          <Text style={styles.titulo}>INGREDIENTES</Text>
          <FlatList
            // data={receta.extendedIngredients}
            data={item.ingredientes}
            renderItem={renderIngredients}
            // keyExtractor={item => item.id}
            keyExtractor={item => item.idIngrediente}
          />
        </View>
        <View style={styles.preparacionContainer}>
          <Text style={styles.titulo}>PREPARACIÓN</Text>
          <FlatList 
            // data={receta.analyzedInstructions}
            data={item.preparacion}
            renderItem={renderInstructions}
            // keyExtractor={item => item.steps}
            keyExtractor={item => item.number}
          />
          {/* <FlatList 
            data={receta.analyzedInstructions.steps}
            renderItem={renderInstructions}
            keyExtractor={item => item.number}
          /> */}
          {/* <Text style={styles.titulo}>{receta.instructions}</Text> */}
        </View>
            {/* <WebView source={{uri: strYoutube}}/> */}
      </View>
    </ScrollView>
  )
}

export default Ingredientes