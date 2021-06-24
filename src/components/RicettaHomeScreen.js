//import
import React from "react";
import {View, Text, Image, TouchableWithoutFeedback, Dimensions} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

//import miei file
import {styles} from "../../Styles.js";

const dimension = Dimensions.get('window')

//funzione componente ricetta
export default function RicettaHomeScreen(
    {title, calories, image , ingredients, url, numeroId, 
    digest, yields, totalTime, healthLabels, cuisineType,
    mealType, cautions, navigation} ){
                                       
    return(
    <View style={styles.container_ricettaHomeScreen}>
        <TouchableWithoutFeedback style={styles.bloccoSuperiore_ricettaHomeScreen} onPress= {() => navigation.push('ricetta', {
             title: title,
             image: image,
             calories: calories,
             ingredients: ingredients,
             url: url,
             numeroId: numeroId,
             digest: digest,
             yields: yields,
             totalTime: totalTime,
             healthLabels: healthLabels,
             cuisineType: cuisineType,
             mealType: mealType,
             cautions: cautions  })}>
            <Image style={styles.immagineRicetta_ricettaHomeScreen} source={{uri: image}}/>
        </TouchableWithoutFeedback>  

    <View style={styles.bloccoInferiore_RicettaHomeScreen}>

        <View style={styles.title_ricettaHomeScreen}>
            <TouchableWithoutFeedback style={styles.bloccoSuperiore_ricettaHomeScreen} onPress= {() => navigation.push('ricetta', {
             title: title,
             image: image,
             calories: calories,
             ingredients: ingredients,
             url: url,
             numeroId: numeroId,
             digest: digest,
             yields: yields,
             totalTime: totalTime,
             healthLabels: healthLabels,
             cuisineType: cuisineType,
             mealType: mealType,
             cautions: cautions  })}>
            <Text style={styles.titoloRicetta_homeScreen} numberOfLines={1} ellipsizeMode={'tail'}>{title}</Text>
            </TouchableWithoutFeedback>    
        </View>

        <View style={styles.decorazioni_ricettaHomeScreen}>
            <View style={styles.elements_ricettaHomeScreen}>
                <MaterialCommunityIcons name="fire" size={dimension.width/18} color={'#910055'}/>
                <Text style={styles.testoDecorazione_ricettaHomeScreen}>{calories} Kcal</Text>
            </View>
            <View style={styles.elements_ricettaHomeScreen}>
                <Ionicons name="people" size={dimension.width/18}/>
                <Text style={styles.testoDecorazione_ricettaHomeScreen}>Per {yields} persone</Text>
            </View>
        </View>
    </View>

    </View>
    )
}


