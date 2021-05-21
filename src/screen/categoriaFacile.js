//import
import React from "react";
import { useEffect } from 'react';
import {ScrollView, SafeAreaView} from "react-native";
import { Searchbar } from 'react-native-paper';

//miei import
import {styles} from "../../Styles.js";
import RicettaCategoria from "../components/RicettaCategoria";

//CREDENZIALI EDAMAM API search
const APP_ID = '3dca0b91';
const APP_KEY = '72b2bc992bdbafabe3b61df5dcbdc464';

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

    //fetching data con range of time alla fine
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${ricerca}&app_id=${APP_ID}&app_key=${APP_KEY}&time=1-20`);
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
   <SafeAreaView style={styles.container}>

         <Searchbar
         placeholder="Cerca"
         onChangeText={onChangeSearch}
         value={richiesta}
         onIconPress={getSearch}
         />

       <ScrollView style={styles.container_paginaCategoria}>

        {data.map(data => (
         <RicettaCategoria 
         key={data.recipe.calories}
         title={data.recipe.label}
         calories={(data.recipe.calories).toFixed(0)}
         image={data.recipe.image}
         ingredients={data.recipe.ingredients}
         url={data.recipe.url}
         numeroId= {3}
         totalTime={data.recipe.totalTime}   
         navigation={navigation}/>
         
        ))}
        
       </ScrollView>
   </SafeAreaView>

    ) 
}