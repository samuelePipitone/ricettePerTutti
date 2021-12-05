//import
import React from "react";
import { useEffect } from 'react';
import {ScrollView, SafeAreaView, View, TouchableOpacity, Dimensions, Text} from "react-native";
import { Searchbar } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";

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
	const [tempo, setTempo] = React.useState('');

    //useEffect 
    useEffect(() => {
        getRecipes();
    }, [ricerca])

    //fetching data con range of time alla fine
    const getRecipes = async () => {
      try{
        if(ricerca != ''){
        const response = await fetch(`https://api.edamam.com/search?q=${ricerca}&app_id=${APP_ID}&app_key=${APP_KEY}&time=1-${tempo}`);
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
             </View>

            <ScrollView style={styles.container2_paginaCategoria}>

				<TextInput 
				mode='outlined'
				placeholder="inserisci tempo max"
				keyboardType="numeric"
				value={tempo}
				onChangeText={(n) => {
					n.replace(/[^0-9]/g,'');
					setTempo(n)}}
				style={{
					marginLeft: 40,
					marginRight: 295,
					marginTop: 20,
					borderWidth: 2,
					borderColor: 'rgba(0, 56,9,0.85)',
					borderRadius: 7,
					height: 45,
					padding: 10,
					fontSize: 18
				}}
				/>

				<Text style={{
						marginLeft: 40,
						marginTop: 30,
						fontSize: 22,
						color: '#ababab'
					}}>In questa sezione potrai cercare ricette veloci (minuti impostabili nel box 'inserisci tempo'),
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
				time = {data.count}
				navigation={navigation}/>
				))}
            </ScrollView>
        </SafeAreaView>
     
         ) 
}