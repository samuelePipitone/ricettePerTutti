import React from "react";
import { useEffect, useState } from 'react';
import {ScrollView, SafeAreaView} from "react-native";
import { Searchbar } from 'react-native-paper';

//miei import
import {styles} from "../../Styles.js";
import Ricetta from "../components/Ricetta.js";

//CREDENZIALI EDAMAM API
const APP_ID = '3dca0b91';
const APP_KEY = '72b2bc992bdbafabe3b61df5dcbdc464';


export default function categoria( {navigation} ){

    const [richiesta, setRichiesta] = React.useState('');
    const [data, setData] = React.useState([]);
    const [ricerca, setRicerca] = React.useState("");

    //da capire useEffect
    useEffect(() => {
        getRecipes();
    }, [ricerca])

    //fetching data
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${ricerca}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data2 = await response.json();
        setData(data2.hits);
    }

    //funzione cambio ricerca (props -> query)
    const onChangeSearch = query => setRichiesta(query);

    //funzione placeholder ricerca
    const getSearch = () => {
        setRicerca(richiesta);
    }

    return(
   <SafeAreaView style={styles.container}>
       <ScrollView style={styles.container}>
         <Searchbar
         placeholder="Cerca"
         onChangeText={onChangeSearch}
         value={richiesta}
         onIconPress={getSearch}
         />
        {data.map(data => (
         <Ricetta 
         key={data.recipe.calories}
         title={data.recipe.label}
         calories={data.recipe.calories}
         image={data.recipe.image}/>
        ))}
       </ScrollView>
   </SafeAreaView>

    ) 
}