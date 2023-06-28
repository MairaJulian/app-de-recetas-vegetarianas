import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons'; 

const Ingredientes = ({route}) => {
  console.log("esto es lo que llega dentro de route en preparacion");
  console.log(route);
  
  const {params} = route

  const handleLike = () => {

  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.instrucciones}>
        {/* <MaterialIcons name="favorite" size={24} color="red" onPress={handleLike}/>
        <MaterialIcons name="favorite-border" size={24} color="red" /> */}
        <Image source={params.image} style={styles.imagen}/>
        <Text style={styles.tituloReceta}>{params.name}</Text>
        <View style={styles.ingredientesContainer}>
          <Text style={styles.titulo}>INGREDIENTES</Text>
            {
              params.ingredientes.map((i)=>(
                <View style={styles.listaIngredientes} key={i.idIngrediente}>
                  <Text style={styles.ingredientsText}>* {i.cantidad} {i.ingrediente}</Text>
                </View>
              ))
            }
        </View>
        <View style={styles.preparacionContainer}>
          <Text style={styles.titulo}>PREPARACIÓN</Text>
            {
              params.preparacion.map((i)=>(
                <View style={styles.listaInstrucciones} key={i.number}>
                  <Text style={styles.instructionText}>{i.number}- {i.step} </Text>
                </View>
              ))
            }
        </View>
      </View>
    </ScrollView>
  )
}

export default Ingredientes