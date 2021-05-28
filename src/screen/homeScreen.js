//IMPORT LIBRERIE
import { StatusBar } from 'expo-status-bar';
import {  Text, Image, SafeAreaView, TouchableOpacity, ScrollView, View } from 'react-native';
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

    <StatusBar style="auto"/>

    return (
    <SafeAreaView style={styles.container}>

        <View style={styles.containerFoto_homeScreen}>
                <Image style={styles.stileLogo_homeScreen} source={require("../images/logo.jpg")}/>
        
                <TouchableOpacity onPress= {() => navigation.navigate('utente')} style={{left:'88%'}}>
                    <Image source={require("../images/settings.png")} style={styles.option_homeScreen}/>
                </TouchableOpacity>
        </View>

    <ScrollView style={styles.containerHome}>

        <View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => navigation.navigate('categoriaFit')}>
                 <Text style={styles.categoriaFit_homeScreen}>categoria Fit! {"->"}</Text>
            </TouchableOpacity>

            <GruppoRicetteHomeScreen stringa={stringaFit} numeroId={1} navigation={navigation}/>
        </View>

        <View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => navigation.navigate('categoriaTradizionale')}>
                 <Text style={styles.categoria_homeScreen}>categoria tradizionale! {"->"}</Text>
              </TouchableOpacity>

              <GruppoRicetteHomeScreen stringa={stringaTradizionale} numeroId={2} navigation={navigation}/>
        </View>
 
        <View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => navigation.navigate('categoriaFacile')}>
                 <Text style={styles.categoria_homeScreen}>categoria facile e veloce! {"->"}</Text>
             </TouchableOpacity>
      
             <GruppoRicetteHomeScreen stringa={stringaVeloce} numeroId={3} navigation={navigation}/>
        </View>

        <View style={styles.gruppoRicette_homeScreen}>
            <TouchableOpacity onPress= {() => navigation.navigate('categoriaPersonalizzata')}>
                 <Text style={styles.categoria_homeScreen}>categoria Personalizzata! {"->"}</Text>
             </TouchableOpacity>
       
             <GruppoRicetteHomeScreen stringa={stringaPersonalizzata} numeroId={4} navigation={navigation}/>
         </View>

    </ScrollView>
    </SafeAreaView>
    )
  }
