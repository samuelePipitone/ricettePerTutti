//IMPORT LIBRERIE
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView,
FlatList, TouchableOpacity, Alert} from 'react-native';

//import miei file
import {styles} from "../../Styles.js";


//creazione blocchi
const BLOCCHI = [
    {
      id: "box1",
      title: "Fit"
    },
    {
      id: "box2",
      title: "Tradizionale"
    },
    {
      id: "box 3",
      title: "Facile e veloce"
    },
    {
      id: "box4",
      title: "Intolleranze"
    }
  ];


  //funzione di ritorno
export default function HomeScreen( {navigation} ){
    const [selectedId, setSelectedId] = useState(null);

    const Item = ({item, onPress, backgroundColor, textColor}) => (

      <TouchableOpacity style = {[styles.item, backgroundColor]} onPress={() => navigation.navigate('categoria')}>
          <Text style = {[styles.title, textColor]}>{item.title}</Text>
      </TouchableOpacity>  
    
    );

    //funzione renderItem
    const renderItem = ({ item }) => {
  
      const backgroundColor = item.id === selectedId ? "red" : "black";
      const color = item.id === selectedId ? "black" : "white";
  
      //creazione item
      return (
        <Item
        item={item}
        onPress= {() => setSelectedId(item.id)}
        backgroundColor= {{ backgroundColor }}
        textColor = {{ color }}
        />
      );
    };

    //return principale
    return (
      <SafeAreaView style={styles.container}>

        <Image style={styles.stileLogo} source={require("../images/logo.jpg")}/>

        <TouchableOpacity onPress= {() => navigation.navigate('opzioni')}>
            <Image source={require("../images/settings.png")} style={styles.optionPrincipals}/>
        </TouchableOpacity>

        <StatusBar style="auto" />

        <FlatList
        data = {BLOCCHI}
        renderItem = {renderItem}
        keyExtractor={item => item.id}
        extraData = {selectedId}
        />
  
      </SafeAreaView>
    );
  }
