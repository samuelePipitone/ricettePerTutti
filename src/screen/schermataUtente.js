//import
import React from "react";
import {SafeAreaView, Text, FlatList, TouchableOpacity,
		 View, Dimensions, TouchableWithoutFeedback, Modal,
		 Image} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

//import miei file
import {styles} from "../../Styles.js";
const dimension = Dimensions.get('window');


const data =[
  {
     titolo: "no alcol",
     id: 1,
     isSelect: false,
     stile: styles.item,
	 immagine: "https://cdn-icons.flaticon.com/png/512/384/premium/384182.png?token=exp=1634547797~hmac=7379d180896a318786f2c7bac4a9ca13"
   },
 {
     titolo: "no lattosio",
     id: 3,
     isSelect: false,
     stile: styles.item,
	 immagine: "https://cdn-icons-png.flaticon.com/512/1970/1970955.png"
   },
 {
     titolo: "no uova",
     id: 4,
     isSelect: false,
     stile: styles.item,
	 immagine: "https://cdn-icons.flaticon.com/png/512/4299/premium/4299893.png?token=exp=1634547888~hmac=fdc6c4b1b06739a244e37ce86aed9f14"
 },
 {
     titolo: "no pesce",
     id: 5,
     isSelect: false,
     stile: styles.item,
	 immagine: "https://cdn-icons-png.flaticon.com/512/1970/1970935.png"
 },
 {
     titolo: "no glutine",
     id: 6,
     isSelect: false,
     stile: styles.item,
	 immagine: "https://cdn-icons.flaticon.com/png/512/4299/premium/4299923.png?token=exp=1634547015~hmac=17d6875f704cc27bbf0660ab6f71aef3"
 },
 {
     titolo: "kosher",
     id: 7,
     isSelect: false,
     stile: styles.item,
	 immagine: "https://cdn-icons.flaticon.com/png/512/3437/premium/3437266.png?token=exp=1634547405~hmac=fa3cc3fc3f2f3c0b394afc2fc1eb0309"
 },
 {
     titolo: "no noccioline",
     id: 8,
     isSelect: false,
     stile: styles.item,
	 immagine: "https://cdn-icons.flaticon.com/png/512/4299/premium/4299982.png?token=exp=1634547062~hmac=3675f0d3e636c72391c6534a4b1e8875"
 },
 {
     titolo: "no maiale",
     id: 9,
     isSelect: false,
     stile: styles.item,
	 immagine: "https://cdn-icons-png.flaticon.com/512/2597/2597744.png"
 },
 {
     titolo: "vegana",
     id: 10,
     isSelect: false,
     stile: styles.item,
	 immagine: "https://cdn-icons-png.flaticon.com/512/3638/3638017.png"
 },
 {
     titolo: "vegetariana",
     id: 11,
     isSelect: false,
     stile: styles.item,
	 immagine: "https://cdn-icons-png.flaticon.com/512/3638/3638167.png"
 },
 {
     titolo: "no carne rossa",
     id: 12,
     isSelect: false,
     stile: styles.item,
	 immagine: "https://cdn-icons-png.flaticon.com/512/1970/1970924.png"
 }
]

//istanziamento array preferenze
const preferenze = [];

export default function App() {

    //stato che holda data per re-render flatlist
    const [Data, SetData] = React.useState(data);

	const [modalVisible, setModalVisible] = React.useState(false);

    //funzione che rimuove array preventivamente
    const removeItem = async (stringa) =>{
      try{
        await AsyncStorage.removeItem(stringa);
      }catch(e){console.log(e)}
    }
  
    //funzione necessaria per render flatlist
    const renderItem = ({ item }) => (
      <TouchableOpacity style={item.isSelect ? styles.itemSelected : styles.item} onPress={() => selectItem(item.id)}>
        <Text style={item.isSelect ? 
          styles.selectedTestoBlocco_schermataUtente :
          styles.testoBlocco_schermataUtente 
          }>{item.titolo}</Text>
		  <Image source={{uri: item.immagine}} style={styles.logoBlock_schermataUtente}/>
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

    //return della funzione con flatlist 
    return (
      <SafeAreaView style={styles.containerUtente}>
		
          <View style={styles.blocchi_schermataUtente}>

			<View style={styles.barraSup_schermataUtente}>
				<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
					<Ionicons name="information-circle-outline"
					 size={23} style={styles.icona_schermataUtente}/>
				</TouchableWithoutFeedback>
				<Modal transparent={true} visible={modalVisible}>
					<View style={styles.modal_schermataUtente}>
						<View style={styles.innerModal_schermataUtente}>
								<TouchableOpacity onPress={() => setModalVisible(false)}>
								<AntDesign name="close" size={30} style={styles.closing}/>
								</TouchableOpacity>
								<Text style={styles.testoModal_schermataUtente}>Cliccando su una o più dei seguenti bottoni applicherai la corrispondente modifica.</Text>
								
							<Text style={styles.testoModal_schermataUtente}>Le modifiche apportate verranno visualizzate nella <Text style={{fontWeight: 'bold'}}>categoria personalizzata</Text>.</Text>
						</View>
					</View>
				</Modal>
            	<Text style={styles.testo_schermataUtente}>
					Seleziona le tue preferenze:</Text>
			</View>
			<View style={{backgroundColor: '#dedede',
						  marginLeft: 20,
						  marginRight: 20,
						  borderRadius: 18,
						  borderWidth: 0.7,
						  borderColor: "#8c8c8c"}}>
              <FlatList
               data={Data} //la data nello stato
               renderItem={renderItem}
               keyExtractor={(item) => item.id.toString()}
               extraData={data}
			   numColumns={3}
            />
			</View>
          </View>
      </SafeAreaView>
    );
  }