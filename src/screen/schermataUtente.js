//import
import React from "react";
import {SafeAreaView, View, Text, FlatList} from "react-native"
import { ScrollView } from "react-native-gesture-handler";

//import miei file
import {styles} from "../../Styles.js";

import Preferiti from "../components/Preferiti";

const data =[
    {
        titolo: "no alcol",
        id: 1
    },
    {
        titolo: "no crostacei",
        id: 2
    },
    {
        titolo: "no lattosio",
        id: 3
    },
    {
        titolo: "no uova",
        id: 4
    },
    {
        titolo: "no pesce",
        id: 5
    },
    {
        titolo: "no glutine",
        id: 6
    },
    {
        titolo: "kosher",
        id: 7
    },
    {
        titolo: "no noccioline",
        id: 8
    },
    {
        titolo: "no maiale",
        id: 9
    },
    {
        titolo: "vegana",
        id: 10
    },
    {
        titolo: "vegetariana",
        id: 11
    },
    {
        titolo: "no carne rossa",
        id: 12
    }
]

const Item = ({titolo}) => (
    <View style={styles.item}> 
        <Text style={styles.titoloRicetta_Ricetta}>{titolo}</Text>
    </View>
);

//schermo opzioni
export default function opzioni( {navigation} ){

    const renderItem = ({item}) => (<Item titolo={item.titolo}/>);

    return(
        <SafeAreaView style={styles.containerUtente}>
            <ScrollView>
            <Text>SELEZIONA COSA ELIMINARE:</Text>

            <FlatList
            numColumns={4}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />

            <Text>I tuoi preferiti!:</Text>

            <Preferiti/>

            <Text>v.1.0.0.2</Text>

           </ScrollView>
        </SafeAreaView>
    )
}