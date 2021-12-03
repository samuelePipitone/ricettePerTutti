//import
import React from "react";
import {View, Text, Image, TouchableWithoutFeedback, Dimensions} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

//import miei file
import {styles} from "../../Styles.js";
const dimension = Dimensions.get('window');

//funzione componente ricetta
export default function RicettaCategoria(
    {title, calories, image , ingredients, url, numeroId, digest,
     yields, totalTime, healthLabels, cuisineType, mealType, cautions, navigation} ){
    
    return(
    <View style={styles.container_ricettaCategoria}>
        <View style={styles.bloccoSuperiore_ricettaCategoria}>
            <TouchableWithoutFeedback onPress= {() =>
            {navigation.push('ricetta', {
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
                cautions: cautions })} }>
                <Image style={styles.immagineRicetta_ricettaCategoria} source={{uri: image}}/>
            </TouchableWithoutFeedback>
        </View>

        <View style={styles.bloccoInferiore_ricettaCategoria}>
            <View style={styles.containerTesto_ricettaCategoria}>
            <TouchableWithoutFeedback onPress= {() =>
            {navigation.push('ricetta', {
                title: title,
                image: image,
                calories: calories,
                ingredients: ingredients,
                url: url,
                numeroId: numeroId,
                digest: digest,
                yields: yields,
                totalTime: totalTime  })} }>
                    <Text style={styles.titoloRicetta_ricettaCategoria} 
                      numberOfLines={1} 
                      ellipsizeMode={'tail'}>{title}</Text>
            </TouchableWithoutFeedback>
            </View>
            <View style={{alignItems:'center', flexDirection: 'row', marginLeft: '2%', marginBottom: '2%'}}>
                        <MaterialCommunityIcons name="fire" size={dimension.width/18}
						 color={'#910055'} style={{marginTop: 30}}/>
                        <Text style={styles.calorie_ricettaCategoria}>{(calories/yields).toFixed(0)} Kcal</Text>
						<Ionicons name="people" size={dimension.width/18}
						style={{marginTop: 30, marginLeft: 50,marginRight:5}}/>
						<Text style={styles.calorie_ricettaCategoria}>{yields}</Text>
            </View>
        </View>
    </View>
    )
}

