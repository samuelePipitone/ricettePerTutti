//import
import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

//import miei file
import {styles} from "../../Styles.js";

/*
        <View style={{left: "90%"}}>
            <TouchableWithoutFeedback onPress={() => console.log("ciao")}>
               <FontAwsome name="heart-o" color={"red"} size={20}/>
            </TouchableWithoutFeedback>
        </View>
*/

//funzione componente ricetta
export default function RicettaHomeScreen(
    {title, calories, image , ingredients, url, numeroId, 
    digest, yields, totalTime, navigation} ){
                                       
    return(
    <View style={styles.container_ricettaHomeScreen}>
        <TouchableWithoutFeedback style={styles.bloccoSuperiore_ricettaHomeScreen} onPress= {() => navigation.navigate('ricetta', {
             title: title,
             image: image,
             calories: calories,
             ingredients: ingredients,
             url: url,
             numeroId: numeroId,
             digest: digest,
             yields: yields,
             totalTime: totalTime  })}>
            <Image style={styles.immagineRicetta_ricettaHomeScreen} source={{uri: image}}/>
        </TouchableWithoutFeedback>  

    <View style={styles.bloccoInferiore_RicettaHomeScreen}>

        <View style={styles.title_ricettaHomeScreen}>
             <Text style={styles.titoloRicetta_homeScreen} numberOfLines={1} ellipsizeMode={'clip'}>{title}</Text>
        </View>

        <View style={styles.decorazioni_ricettaHomeScreen}>
            <View style={styles.elements_ricettaHomeScreen}>
                <MaterialCommunityIcons name="fire" size={12}/>
                <Text style={styles.testoDecorazione_ricettaHomeScreen}>{calories} Kcal</Text>
            </View>
            <View style={styles.elements_ricettaHomeScreen}>
                <Ionicons name="people" size={12}/>
                <Text style={styles.testoDecorazione_ricettaHomeScreen}>Per {yields} persone</Text>
            </View>
        </View>
        <View style={styles.elements2_ricettaHomeScreen}>
                <Ionicons name="stopwatch" size={12}/>
                <Text style={styles.testoDecorazione_ricettaHomeScreen}>preparazione: {totalTime} minuti</Text>
            </View>
    </View>

    </View>
    )
}


