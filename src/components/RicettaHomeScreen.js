//import
import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native"

//import miei file
import {styles} from "../../Styles.js";


//funzione componente ricetta
export default function RicettaHomeScreen({title, calories, image , ingredients, url, numeroId, 
                                          digest, yields, totalTime, navigation} ){
    return(
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress= {() => navigation.navigate('ricetta', {
             title: title,
             image: image,
             calories: calories,
             ingredients: ingredients,
             url: url,
             numeroId: numeroId,
             digest: digest,
             yields: yields,
             totalTime: totalTime  })}>
            <Image style={styles.immagineRicetta_Ricetta} source={{uri: image}}/>
        </TouchableWithoutFeedback>

        <Text style={styles.titoloRicetta_Ricetta}>{title}</Text>
        <Text style={styles.titoloRicetta_Ricetta}>{calories} Kcal</Text>
        
    </View>
    )
}