import React from "react";
import {View, Text, Image} from "react-native"


import {styles} from "../../Styles.js";

export default function Ricetta({title, calories, image}){
    
    return(
        
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{calories}</Text>
        <Image style={styles.stileimmagine} source={{uri: image}}/>
    </View>

    )
}