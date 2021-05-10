//IMPORT PER NAVIGATION
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

//IMPORT LIBRERIE
import React from 'react';


//import da miei file
import HomeScreen from "./src/screen/homeScreen";
import paginaRicetta from "./src/screen/paginaRicetta";
import categoriaTradizionale from "./src/screen/categoriaTradizionale";
import categoriaFacile from "./src/screen/categoriaFacile";
import categoriaPersonalizzata from "./src/screen/categoriaPersonalizzata";
import categoriaFit from "./src/screen/categoriaFit";
import schermataUtente from "./src/screen/schermataUtente";


//CREO STACK NAVIGAZIONE
const Stack = createStackNavigator();


//MAIN 
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "utente" component={schermataUtente}/>
        <Stack.Screen name = "categoriaFit" component={categoriaFit}/>
        <Stack.Screen name = "categoriaTradizionale" component={categoriaTradizionale}/>
        <Stack.Screen name = "categoriaFacile" component={categoriaFacile}/>
        <Stack.Screen name = "categoriaPersonalizzata" component={categoriaPersonalizzata}/>
        <Stack.Screen name = "ricetta" component={paginaRicetta}/>
        
        </Stack.Navigator>
        </NavigationContainer>


  );
}

