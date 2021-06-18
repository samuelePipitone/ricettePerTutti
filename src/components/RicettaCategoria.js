//import
import React from "react";
import {View, Text, Image, TouchableWithoutFeedback, Dimensions} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

//import miei file
import {styles} from "../../Styles.js";
const dimension = Dimensions.get('window');

/*
                    <View style={{alignItems:'center', flexDirection: 'row'}}>
                        <AntDesign name="minus" size={dimension.width/25}/>
                        <Text>{fat.toFixed(1)}g of fat</Text>
                    </View>
                    <View style={{alignItems:'center', flexDirection: 'row'}}>
                        <AntDesign name="minus" size={dimension.width/25}/>
                        <Text>{prot.toFixed(1)}g of protein</Text>
                    </View>
                    <View style={{alignItems:'center', flexDirection: 'row'}}>
                        <AntDesign name="minus" size={dimension.width/25}/>
                        <Text>{carb.toFixed(1)}g of carbs</Text>
                    </View>
*/

//funzione componente ricetta
export default function RicettaCategoria(
    {title, calories, image , ingredients, url, numeroId, digest,
     yields, totalTime, navigation} ){
    
    const macroValue = [];
    for(var i = 0; i < 3; i++){
        macroValue.push(digest[i].total)
    }
    const fat = macroValue[0]/yields;
    const carb = macroValue[1]/yields;
    const prot = macroValue[2]/yields;

    return(
    <View style={styles.container_ricettaCategoria}>
        <View style={styles.bloccoSuperiore_ricettaCategoria}>
            <TouchableWithoutFeedback onPress= {() =>
            {navigation.navigate('ricetta', {
                title: title,
                image: image,
                calories: calories,
                ingredients: ingredients,
                url: url,
                numeroId: numeroId,
                digest: digest,
                yields: yields,
                totalTime: totalTime  })} }>
                <Image style={styles.immagineRicetta_ricettaCategoria} source={{uri: image}}/>
            </TouchableWithoutFeedback>
        </View>

        <View style={styles.bloccoInferiore_ricettaCategoria}>
            <View style={styles.containerTesto_ricettaCategoria}>
            <TouchableWithoutFeedback onPress= {() =>
            {navigation.navigate('ricetta', {
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
            <View style={{alignItems:'center', flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="fire" size={dimension.width/18} color={'#910055'}/>
                        <Text style={styles.calorie_ricettaCategoria}>{(calories/yields).toFixed(0)} Kcal</Text>
            </View>
        </View>
    </View>
    )
}

