//IMPORT PER NAVIGATION
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
import {styles} from './Styles';


//CREO STACK NAVIGAZIONE
const Stack = createStackNavigator();


//MAIN 
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name = "Home"
        component={HomeScreen}
        options={{
            title: 'Home',
            headerStyle: styles.headerStyle_app,
            headerTitleStyle: styles.headerTitleStyle_app,
            headerTintColor: 'white'
        }}/>
        <Stack.Screen 
        name = "utente" 
        component={schermataUtente}
        options={{
          title: 'Impostazioni',
          headerStyle: styles.headerStyle_app,
          headerTitleStyle: styles.headerTitleStyle_app,
          headerTintColor: 'white'
      }}/>
        <Stack.Screen 
        name = "categoriaFit" 
        component={categoriaFit}
        options={{
          title: 'Categoria fit',
          headerStyle: styles.headerStyle_app,
          headerTitleStyle: styles.headerTitleStyle_app,
          headerTintColor: 'white'
      }}/>
        <Stack.Screen 
        name = "categoriaTradizionale" 
        component={categoriaTradizionale}
        options={{
          title: 'Categoria tradizionale',
          headerStyle: styles.headerStyle_app,
          headerTitleStyle: styles.headerTitleStyle_app,
          headerTintColor: 'white'
      }}/>
        <Stack.Screen 
        name = "categoriaFacile" 
        component={categoriaFacile}
        options={{
          title: 'Categoria facile',
          headerStyle: styles.headerStyle_app,
          headerTitleStyle: styles.headerTitleStyle_app,
          headerTintColor: 'white'
      }}/>
        <Stack.Screen 
        name = "categoriaPersonalizzata" 
        component={categoriaPersonalizzata}
        options={{
          title: 'Categoria personalizzata',
          headerStyle: styles.headerStyle_app,
          headerTitleStyle: styles.headerTitleStyle_app,
          headerTintColor: 'white'
      }}/>
        <Stack.Screen 
        name = "ricetta" 
        component={paginaRicetta}
        options={{
          title: 'Ricetta',
          headerStyle: styles.headerStyle_app,
          headerTitleStyle: styles.headerTitleStyle_app,
          headerTintColor: 'white'
      }}/>
        
        </Stack.Navigator>
        </NavigationContainer>
    
  );
}

