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
import loadingPage from './src/screen/loadingPage';


//CREO STACK NAVIGAZIONE
const Stack = createStackNavigator();


//MAIN 
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

       <Stack.Screen
        name = "loadingPage"
        component={loadingPage}
        options={{ 
            headerShown: false }}
        />
        <Stack.Screen 
        name = "Home"
        component={HomeScreen}
        options={{
            title: 'Home',
            headerShown: false
        }}/>
        <Stack.Screen 
        name = "utente" 
        component={schermataUtente}
        options={{
          title: 'Impostazioni',
          headerStyle: {
            backgroundColor: 'green',
			height: 110
          },
          headerTintColor: 'white',
          headerTitleStyle:{
            marginLeft: '23%',
            fontWeight: '700',
            letterSpacing: 1,
			fontSize: 25
          }
      }}/>
        <Stack.Screen 
        name = "categoriaFit" 
        component={categoriaFit}
        options={{
          title: 'Categoria fit',
          headerShown: false,
      }}/>
        <Stack.Screen 
        name = "categoriaTradizionale" 
        component={categoriaTradizionale}
        options={{
          title: 'Categoria tradizionale',
          headerShown: false,
      }}/>
        <Stack.Screen 
        name = "categoriaFacile" 
        component={categoriaFacile}
        options={{
          title: 'Categoria facile',
          headerShown: false,
      }}/>
        <Stack.Screen 
        name = "categoriaPersonalizzata" 
        component={categoriaPersonalizzata}
        options={{
          title: 'Categoria personalizzata',
          headerShown: false,
      }}/>
        <Stack.Screen 
        name = "ricetta" 
        component={paginaRicetta}
        options={{
          title: 'Ricetta',
          headerShown: false,
      }}/>  
        </Stack.Navigator>
        </NavigationContainer>
    
  );
}

