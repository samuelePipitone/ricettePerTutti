//import
import React from "react";
import { useEffect, useState } from 'react';
import {ScrollView, SafeAreaView, View, Image, Dimensions, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Searchbar } from 'react-native-paper';

//miei import
import {styles} from "../../Styles.js";
import RicettaCategoria from "../components/RicettaCategoria.js";

//CREDENZIALI EDAMAM API search
const APP_ID = '3dca0b91';
const APP_KEY = '72b2bc992bdbafabe3b61df5dcbdc464';

const dimension = Dimensions.get('window')

//schermo categoria
export default function categoria( {navigation} ){

    //tre stati per richiesta ricette
    const [richiesta, setRichiesta] = React.useState('');
    const [data, setData] = React.useState([]);
    const [ricerca, setRicerca] = React.useState("");

    //useEffect 
    useEffect(() => {
        getRecipes();
    }, [ricerca])

    //fetching data
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${ricerca}&app_id=${APP_ID}&app_key=${APP_KEY}`);
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
                <Ionicons name={'arrow-back'} size={dimension.width/8}/>
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
              numeroId={1}
              digest={data.recipe.digest}
              yields={data.recipe.yield}
              mealType={data.recipe.mealType}
              cautions={data.recipe.cautions}
              navigation={navigation}/>
             ))}
             
            </ScrollView>
        </SafeAreaView>
     
         ) 
}

