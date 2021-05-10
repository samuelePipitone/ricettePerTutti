//IMPORT LIBRERIE
import { StatusBar } from 'expo-status-bar';
import {  Text, Image, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React from "react";

//import miei file
import {styles} from "../../Styles.js";
import stringaRicerca from "../components/stringaRicerca";
import GruppoRicetteHomeScreen from "../components/GruppoRicetteHomeScreen";

//stringhe randomiche per query di homeScreen
const stringaFit = stringaRicerca(1);
const stringaTradizionale = stringaRicerca(2);
const stringaVeloce = stringaRicerca(3);
const stringaPersonalizzata = stringaRicerca(4);


export default function HomeScreen( {navigation} ){

 
    <StatusBar style="auto" />

    //return principale
    return (
<SafeAreaView style={styles.container}>

        <Image style={styles.stileLogo} source={require("../images/logo.jpg")}/>
        
        
        <TouchableOpacity onPress= {() => navigation.navigate('utente')}>
            <Image source={require("../images/settings.png")} style={styles.option_homeScreen}/>
        </TouchableOpacity>

  <ScrollView style={styles.container}>

       <TouchableOpacity onPress= {() => navigation.navigate('categoriaFit')}>
           <Text>clicca per vedere categoria Fit!</Text>
       </TouchableOpacity>

            <GruppoRicetteHomeScreen stringa={stringaFit} numeroId={1} navigation={navigation}/>

      <TouchableOpacity onPress= {() => navigation.navigate('categoriaTradizionale')}>
            <Text>clicca per vedere categoria tradizionale!</Text>
      </TouchableOpacity>

      <GruppoRicetteHomeScreen stringa={stringaTradizionale} numeroId={2} navigation={navigation}/>

      <TouchableOpacity onPress= {() => navigation.navigate('categoriaFacile')}>
         <Text>clicca per vedere categoria facile e veloce!</Text>
      </TouchableOpacity>
      
      <GruppoRicetteHomeScreen stringa={stringaVeloce} numeroId={3} navigation={navigation}/>
    
      <TouchableOpacity onPress= {() => navigation.navigate('categoriaPersonalizzata')}>
         <Text>clicca per vedere categoria Personalizzato!</Text>
       </TouchableOpacity>
      
       
       <GruppoRicetteHomeScreen stringa={stringaPersonalizzata} numeroId={4} navigation={navigation}/>

      <TouchableOpacity onPress= {() => navigation.navigate('preferiti')}>
           <Text>clicca per vedere categoria Preferiti!</Text>
      </TouchableOpacity>
         

  </ScrollView>

</SafeAreaView>
    );
  }
