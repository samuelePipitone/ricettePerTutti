//import
import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native"
import FontAwsome from "react-native-vector-icons/FontAwesome";

//import miei file
import {styles} from "../../Styles.js";

//funzione componente ricetta
export default function RicettaHomeScreen(
    {title, calories, image , ingredients, url, numeroId, 
    digest, yields, totalTime, navigation} ){
                                       
    return(
    <View style={styles.itemRicettaHomeScreen}>
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
            <Image style={styles.immagineRicettaHomeScreen} source={{uri: image}}/>
        </TouchableWithoutFeedback>

        <View style={{left: "90%"}}>
            <TouchableWithoutFeedback onPress={() => console.log("ciao")}>
               <FontAwsome name="heart-o" color={"red"} size={20}/>
            </TouchableWithoutFeedback>
        </View>

        <Text style={styles.titoloRicettaHomeScreen}>{title}</Text>
        <Text style={styles.titoloRicetta_Ricetta}>{calories} Kcal</Text>
        
    </View>
    )
}


