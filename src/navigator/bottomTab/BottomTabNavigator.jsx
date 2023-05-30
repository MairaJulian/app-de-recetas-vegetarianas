import ShopNavigator from "../shopNavigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favoritos from "../favoritos";
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
import colors from "../../constantes/colors";

const BottomTabs = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator screenOptions={{
            headerShown: false, 
            tabBarStyle: {
                backgroundColor: colors.primario,
                
              },
            tabBarShowLabel: false, 
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#191919",
            // tabBarInactiveTintColor: "white",
            }}>
            <BottomTabs.Screen 
                name="ShopNavigator" 
                component={ShopNavigator} 
                options={{tabBarIcon: ({color, focused})=><Entypo name="home" size={focused?30:24} color={color} />}}
                />
            <BottomTabs.Screen 
                name="Favoritos" 
                component={Favoritos} 
                options={{tabBarIcon: ({color, focused})=>
                <Ionicons name="heart" size={focused?30:24} color={color}/>
                // <AntDesign name="shoppingcart" size={focused?30:24} color={color}/>
                }}/> 
        </BottomTabs.Navigator>
    )
}

export default BottomTabNavigator