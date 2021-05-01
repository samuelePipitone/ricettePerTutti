//import
import React from "react";
import {View, Text, Image} from "react-native"

//import miei file
import {styles} from "../../Styles.js";

//funzione componente ricetta
export default function Ricetta({title, calories, image}){
    return(
    <View style={styles.container}>
        <Text style={styles.titoloRicetta_Ricetta}>{title}</Text>
        <Text style={styles.descrizioneRicetta_Ricetta}>{calories}</Text>
        <Image style={styles.immagineRicetta_Ricetta} source={{uri: image}}/>
    </View>
    )
}