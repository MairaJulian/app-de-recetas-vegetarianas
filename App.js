
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigator/bottomTab/BottomTabNavigator';
import { Provider } from 'react-redux';
import {store} from './src/redux/store'

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
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    </Provider>
    
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
