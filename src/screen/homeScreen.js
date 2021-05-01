//IMPORT LIBRERIE
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState } from 'react';
import {  Text, Image, SafeAreaView,
FlatList, TouchableOpacity } from 'react-native';

//import miei file
import {styles} from "../../Styles.js";

//creazione blocchi per flatlist
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

  //schermo home
export default function HomeScreen( {navigation} ){
    <StatusBar style="auto" />

    const [selectedId, setSelectedId] = useState(null);
    const Item = ({item}) => (

      <TouchableOpacity style = {styles.blocco_homeScreen} onPress={() => navigation.navigate('categoria')}>
          <Text style = {styles.testoBlocchi_homeScreen}>{item.title}</Text>
      </TouchableOpacity>  
    );

    //render del singolo item
    const renderItem = ({ item }) => {
      return (
        <Item item={item} />
      );
    };

    //return principale
    return (
      <SafeAreaView style={styles.container}>

        <Image style={styles.stileLogo} source={require("../images/logo.jpg")}/>
        
        <TouchableOpacity onPress= {() => navigation.navigate('opzioni')}>
            <Image source={require("../images/settings.png")} style={styles.option_homeScreen}/>
        </TouchableOpacity>

        <FlatList
        data = {BLOCCHI}
        renderItem = {renderItem}
        keyExtractor={item => item.id}
        extraData = {selectedId}
        />
  
      </SafeAreaView>
    );
  }
