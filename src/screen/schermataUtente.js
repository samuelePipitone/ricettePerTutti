//import
import React from "react";
import {SafeAreaView, Text, FlatList, TouchableOpacity, View} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

//import miei file
import {styles} from "../../Styles.js";


const data =[
  {
     titolo: "no alcol",
     id: 1,
     isSelect: false,
     stile: styles.item,
   },
 { 
   titolo: "no crostacei",
     id: 2,
     isSelect: false,
     stile: styles.item,
    },
 {
     titolo: "no lattosio",
     id: 3,
     isSelect: false,
     stile: styles.item,
   },
 {
     titolo: "no uova",
     id: 4,
     isSelect: false,
     stile: styles.item,
 },
 {
     titolo: "no pesce",
     id: 5,
     isSelect: false,
     stile: styles.item,
 },
 {
     titolo: "no glutine",
     id: 6,
     isSelect: false,
     stile: styles.item,
 },
 {
     titolo: "kosher",
     id: 7,
     isSelect: false,
     stile: styles.item,
 },
 {
     titolo: "no noccioline",
     id: 8,
     isSelect: false,
     stile: styles.item,
 },
 {
     titolo: "no maiale",
     id: 9,
     isSelect: false,
     stile: styles.item,
 },
 {
     titolo: "vegana",
     id: 10,
     isSelect: false,
     stile: styles.item,
 },
 {
     titolo: "vegetariana",
     id: 11,
     isSelect: false,
     stile: styles.item,
 },
 {
     titolo: "no carne rossa",
     id: 12,
     isSelect: false,
     stile: styles.item,
 }
]

//istanziamento array preferenze
const preferenze = [];

export default function App() {
    //stato che holda data per re-render flatlist
    const [Data, SetData] = React.useState(data);

    //funzione che rimuove array preventivamente
    const removeItem = async (stringa) =>{
      try{
        await AsyncStorage.removeItem(stringa);
      }catch(e){console.log(e)}
    }
  
    //funzione necessaria per render flatlist
    const renderItem = ({ item }) => (
      <TouchableOpacity style={item.isSelect ? styles.itemSelected : styles.item} onPress={() => selectItem(item.id)}>
        <Text style={styles.testoBlocco_schermataUtente}>{item.titolo}</Text>
      </TouchableOpacity>
    );

    //funzione per settare l'array di preferenze
    const setStringValue = async (preferenze) => {
      try{
        const jsonValue = JSON.stringify(preferenze);
        await AsyncStorage.setItem('preferenza', jsonValue)
      }catch(e){console.log(e)}
    }

    //funzione per togliere un elemento dall'array preferenze
    const popItemPreferenze = (id) => {
      for(let i=0; i<preferenze.length; i++){
        if(preferenze[i] === id){
          preferenze.splice(i, 1);
        }
      }
    }
  
    //funzione per colore blocchi e per creare e mandare array, oppure cancellarne un elemento
    const selectItem = (id) => {
      let temp = [...Data];
      for (let i = 0; i < temp.length; i++) {

        if (temp[i].id === id) {
          temp[i].isSelect = temp[i].isSelect ? false : true;

          if(temp[i].isSelect){
            removeItem('preferenza');
            preferenze.push(id);
            setStringValue(preferenze);
          }
          else{
            removeItem('preferenza')
            popItemPreferenze(temp[i].id);
            setStringValue(preferenze);
          }
          break;
        }
      }
      SetData(temp);
    };

    //return della funzione con flatlist + scrollview
    return (
      <SafeAreaView style={styles.containerUtente}>
          <View style={styles.blocchi_schermataUtente}>
            <Text style={styles.testo_schermataUtente}>seleziona cosa eliminare:</Text>
              <FlatList
               numColumns={2}
               data={Data} //la data nello stato
               renderItem={renderItem}
               keyExtractor={(item) => item.id.toString()}
               extraData={data}
            />
          </View>
      </SafeAreaView>
    );
  }