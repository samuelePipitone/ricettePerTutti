//IMPORT PER NAVIGATION
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

//IMPORT LIBRERIE
import React from 'react';


//import da miei file
import opzioni from "./src/screen/opzioni";
import HomeScreen from "./src/screen/homeScreen";
import paginaCategoria from "./src/screen/paginaCategoria";

//CREO STACK NAVIGAZIONE
const Stack = createStackNavigator();


//MAIN 
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "opzioni" component={opzioni}/>
        <Stack.Screen name = "categoria" component={paginaCategoria}/>
        </Stack.Navigator>
        </NavigationContainer>


  );
}

