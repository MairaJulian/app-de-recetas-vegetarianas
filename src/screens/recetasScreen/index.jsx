import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

import styles from './styles'


const Recetas = ({navigation, route}) => {
  const {item} = route.params
  console.log(item);

  // const [categorias, setCategorias] = useState(null)

  // useEffect(() => {
  //   fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
  //   .then((respuesta) => respuesta.json())
  //   .then((data) => setCategorias(data.meals))
  // }, [])

  // console.log(categorias);
    

    const renderItem = ({item}) => (
        <TouchableOpacity 
          style={styles.boton} 
          onPress={()=>navigation.navigate("Ingredientes y Preparación", {
            item: item
            // name: item.name, 
            // ingredientes: item.ingredientes, 
            // preparacion: item.preparacion, 
            // image: item.image
          })}>
            <Text style={styles.texto}>{item.name}</Text>
            <Image source={item.image} style={styles.foto}/>
        </TouchableOpacity>
    )

  return (
    <View style={styles.categoriasContainer}>
      <FlatList
        data={item.listaDeComidas}
        renderItem={renderItem}
        keyExtractor={item => item.idReceta}
        style={styles.lista}
      />
    </View>
  )
}

export default Recetas