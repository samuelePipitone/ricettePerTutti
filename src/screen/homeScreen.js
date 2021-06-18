//IMPORT LIBRERIE
import { StatusBar } from 'expo-status-bar';
import {  Text, Image, SafeAreaView, TouchableOpacity, ScrollView, View } from 'react-native';
import React, { useEffect } from "react";
import { Searchbar } from 'react-native-paper';


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
                <Image source={require('../images/logo.jpg')} style={styles.logo_homeScreen}/>
            <TouchableOpacity onPress= {() => navigation.navigate('utente')} style={styles.containerCliccabile_homeScreen}>
                <Image source={require("../images/settings.png")} style={styles.option_homeScreen}/>
            </TouchableOpacity>
                <Searchbar
                style={styles.barraRicerca_homeScreen}
                />
        </View>
        
    <ScrollView style={styles.containerHome}>

        <View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => navigation.navigate('categoriaFit')} style={{flexDirection: 'row', justifyContent:'center'}}>
                 <Text style={styles.categoriaFit_homeScreen}>categoria fit!</Text>
                 <Text style={styles.categoriaFit2_homeScreen}>{">"}</Text>
            </TouchableOpacity>

            <GruppoRicetteHomeScreen stringa={stringaFit} numeroId={1} navigation={navigation}/>
        </View>

        <View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => navigation.navigate('categoriaTradizionale')} style={{flexDirection: 'row', justifyContent:'center'}}>
                 <Text style={styles.categoria_homeScreen}>categoria generale!</Text>
                 <Text style={styles.categoria2_homeScreen}>{">"}</Text>

              </TouchableOpacity>

              <GruppoRicetteHomeScreen stringa={stringaTradizionale} numeroId={2} navigation={navigation}/>
        </View>
 
        <View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => navigation.navigate('categoriaFacile')} style={{flexDirection: 'row', justifyContent:'center'}}>
                 <Text style={styles.categoria_homeScreen}>categoria facile e veloce!</Text>
                 <Text style={styles.categoria2_homeScreen}>{">"}</Text>

             </TouchableOpacity>
      
             <GruppoRicetteHomeScreen stringa={stringaVeloce} numeroId={3} navigation={navigation}/>
        </View>

        <View style={styles.gruppoRicette_homeScreen}>
            <TouchableOpacity onPress= {() => navigation.navigate('categoriaPersonalizzata')} style={{flexDirection: 'row', justifyContent:'center'}}>
                 <Text style={styles.categoria_homeScreen}>categoria personalizzata!</Text>
                 <Text style={styles.categoria2_homeScreen}>{">"}</Text>

             </TouchableOpacity>
       
             <GruppoRicetteHomeScreen stringa={stringaPersonalizzata} numeroId={4} navigation={navigation}/>
         </View>

    </ScrollView>
    </SafeAreaView>
    )
  }
