
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ShopNavigator from './src/navigator/shopNavigator';

export default function App() {

  const [isPortarit, setIsPortarit] = useState(true)

  const statePortrait = () => setIsPortarit(onPortrait)

  const onPortrait = () => {
    const dim = Dimensions.get("screen")
    return dim.height > dim.width
  }

  console.log(isPortarit);

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait)
    return () => {
      Dimensions.removeEventListener("change", statePortrait)
    }
  }, [])
  
  const [loaded] = useFonts({
    Bold: require('./src/assets/fonts/OpenSans-Bold.ttf'),
    Regular: require('./src/assets/fonts/OpenSans-Regular.ttf')
  })

  if (!loaded) return null

  return (
    <ShopNavigator />
    // <View style={styles.container}>
    //   {
    //     isPortarit ?
    //     <Text style={styles.texto}>Open up App.js to start working on your app!</Text>
    //     :
    //     <Text style={styles.texto2}>Open up App.js to start working on your app!</Text>
    //   }
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily: "Bold",
  },
  texto2: {
    fontFamily: "Regular",
  }
});
