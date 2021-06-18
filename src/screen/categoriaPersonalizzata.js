//import
import React from "react";
import { useEffect, useState } from 'react';
import {ScrollView, SafeAreaView, View, Image, Dimensions, TouchableOpacity} from "react-native";

import { Searchbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


//miei import
import {styles} from "../../Styles.js";
import RicettaCategoria from "../components/RicettaCategoria.js";

//CREDENZIALI EDAMAM API search
const APP_ID = '3dca0b91';
const APP_KEY = '72b2bc992bdbafabe3b61df5dcbdc464';

const dimension = Dimensions.get('window');

//schermo categoria
export default function categoria( {navigation} ){

    //stati
    const [richiesta, setRichiesta] = React.useState('');
    const [data, setData] = React.useState([]);
    const [ricerca, setRicerca] = React.useState("");
    const [preferenza, setPreferenza] = React.useState([]);
    const [searchString, setSearchString] = React.useState(`https://api.edamam.com/search?q=${ricerca}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    //a creazione pagina prendo il mio valore
    useEffect(() => {
        getMyValue();
    },[])

    //a cambio preferenza re-rendero per avere le preferenze aggiornate
    useEffect(() => {
        getPreferences(preferenza);
    }, [preferenza])

    //a cambio ricerca re-rendero per mandare la richiesta
    useEffect(() => {
        getRecipes();
    }, [ricerca])

    //funzione che prende le preferenze da schermo utente tramite async-storage
    const getMyValue = async () => {
        try{
             const x = await AsyncStorage.getItem('preferenza') 
             setPreferenza(JSON.parse(x));
        } catch(err){console.log(err)}
    }

    //funzione che associa il numero di preferenze con la corretta stringa di preferenza
    const getPreferences = (preferenza) => {
        let placeholder = searchString;

     for(let i=0; i<preferenza.length; i++){

        if(preferenza[i] === 1){
            placeholder = placeholder.concat(`&health=alcohol-free`)
        }
        if(preferenza[i] === 2){
            placeholder = placeholder.concat(`&health=crustacean-free`)
        }
        if(preferenza[i] === 3){
            placeholder = placeholder.concat(`&health=dairy-free`)
        }
        if(preferenza[i] === 4){
            placeholder = placeholder.concat(`&health=egg-free`)
        }
        if(preferenza[i] === 5){
            placeholder = placeholder.concat(`&health=fish-free`)
        }
        if(preferenza[i] === 6){
            placeholder = placeholder.concat(`&health=gluten-free`)
        }
        if(preferenza[i] === 7){
            placeholder = placeholder.concat(`&health=kosher`)
        }
        if(preferenza[i] === 8){
            placeholder = placeholder.concat(`&health=peanut-free`)
        }
        if(preferenza[i] === 9){
            placeholder = placeholder.concat(`&health=pork-free`)
        }
        if(preferenza[i] === 10){
            placeholder = placeholder.concat(`&health=vegan`)
        }
        if(preferenza[i] === 11){
            placeholder = placeholder.concat(`&health=vegetarian`)
        }
        if(preferenza[i] === 12){
            placeholder = placeholder.concat(`&health=red-meat-free`)
        }
    }
    setSearchString(placeholder);
}

    //fetching data
    const getRecipes = async () => {
        const response = await fetch(searchString);
        const data2 = await response.json();
        setData(data2.hits);
    }

    //funzione ricerca (solo scrittura)
    const onChangeSearch = query => setRichiesta(query);

    //funzione modifica stato di ricerca
    const getSearch = () => {
        setRicerca(richiesta);
    }

    //barra ricerca e mapping data
    return(
        <SafeAreaView style={styles.container_paginaCategoria}>
            <View style={styles.barraSuperiore_paginaCategoria}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../images/back.png')}
                style={{height:'80%', width: dimension.width/8, resizeMode: 'contain'}}/>
              </TouchableOpacity>
              <Searchbar
              placeholder="Cerca in fit"
              onChangeText={onChangeSearch}
              value={richiesta}
              onIconPress={getSearch}
              onSubmitEditing={getSearch}
              style={{width: '60%'}}
              />
              <TouchableOpacity onPress={() => navigation.navigate('utente')}>
                <Image source={require('../images/settings.png')} 
                style={{height: '70%', width: dimension.width/10, resizeMode: 'contain'}}/>
              </TouchableOpacity>
             </View>
            <ScrollView style={styles.container2_paginaCategoria}>

             {data.map(data => (
              <RicettaCategoria 
              key={data.recipe.calories}
              title={data.recipe.label}
              calories={(data.recipe.calories).toFixed(0)}
              image={data.recipe.image}
              ingredients={data.recipe.ingredients}
              url={data.recipe.url}
              numeroId={4}
              digest= {data.recipe.digest}
              yields = {data.recipe.yield}
              navigation={navigation}/>
              
             ))}
             
            </ScrollView>
        </SafeAreaView>
     
         )  
}