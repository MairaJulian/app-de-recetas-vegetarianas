
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Categories from '../../screens/categoriesScreen'
import Recetas from '../../screens/recetasScreen'
import Ingredientes from '../../screens/ingredientesScreen'
import colors from '../../constantes/colors'

const ShopNavigator = () => {

    const Stack = createNativeStackNavigator()

  return (
        <Stack.Navigator 
          initialRouteName='Home'
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primario
            }
          }}
        >
            <Stack.Screen 
              name='Home' 
              component={Categories}
              options={{title: "Menu"}}
            />
            <Stack.Screen 
              name='Lista de recetas' 
              component={Recetas}
              options={({route})=>(
                {
                  title: route.params.item.titulo
                }
              )}/>
            <Stack.Screen 
              name='Ingredientes y Preparación' 
              component={Ingredientes}
              options={({route})=>(
                {
                  title: route.params.titulo
                }
              )}/>
        </Stack.Navigator>
  )
}

export default ShopNavigator