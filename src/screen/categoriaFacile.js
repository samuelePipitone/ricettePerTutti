//import
import React from "react";
import { useEffect } from 'react';
import {ScrollView, SafeAreaView, View, TouchableOpacity, Dimensions, Text} from "react-native";
import { Searchbar } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

//miei import
import {styles} from "../../Styles.js";
import RicettaCategoria from "../components/RicettaCategoria";

//CREDENZIALI EDAMAM API search
const APP_ID = '3dca0b91';
const APP_KEY = '72b2bc992bdbafabe3b61df5dcbdc464';

const dimension = Dimensions.get('window');

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
      try{
        if(ricerca != ''){
        const response = await fetch(`https://api.edamam.com/search?q=${ricerca}&app_id=${APP_ID}&app_key=${APP_KEY}&time=1-20`);
        const data2 = await response.json();
        setData(data2.hits);}}catch(err){console.log(err)};
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
			  	<AntDesign name={'arrowleft'} size={dimension.width/10}/>
              </TouchableOpacity>
              <Searchbar
              placeholder="Cerca in facile"
              onChangeText={onChangeSearch}
              value={richiesta}
              onIconPress={getSearch}
              onSubmitEditing={getSearch}
              style={{width: '60%'}}
              />
              <TouchableOpacity onPress={() => navigation.navigate('utente')}>
			  <FontAwesome name="bars" size={dimension.width/11}/>
              </TouchableOpacity>
             </View>
            <ScrollView style={styles.container2_paginaCategoria}>

			<Text style={{
					marginLeft: 40,
					marginTop: 30,
					fontSize: 22,
					color: '#ababab'
				}}>In questa sezione potrai cercare ricette veloci (massimo 20 min.),
				 inoltre per ogni ricetta vedrai i tempi di preparazione.
				</Text>
     
             {data.map(data => (
              <RicettaCategoria 
              key={data.recipe.calories}
              title={data.recipe.label}
              calories={(data.recipe.calories).toFixed(0)}
              image={data.recipe.image}
              ingredients={data.recipe.ingredients}
              url={data.recipe.url}
              numeroId={3}
              digest= {data.recipe.digest}
              yields = {data.recipe.yield}
              totalTime = {data.recipe.totalTime}
              mealType = {data.recipe.mealType}
              navigation={navigation}/>
             ))}
            </ScrollView>
        </SafeAreaView>
     
         ) 
}