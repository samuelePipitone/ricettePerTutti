//IMPORT LIBRERIE
import { Text, Image, SafeAreaView, TouchableOpacity,
		 ScrollView, View, TouchableWithoutFeedback,
		Modal } from 'react-native';
import React from "react";


//import miei file
import {styles} from "../../Styles.js";
import stringaRicerca from "../components/stringaRicerca";
import GruppoRicetteHomeScreen from "../components/GruppoRicetteHomeScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

//stringhe randomiche per query di homeScreen
const stringaFit = stringaRicerca(1);
const stringaTradizionale = stringaRicerca(2);
const stringaVeloce = stringaRicerca(3);
const stringaPersonalizzata = stringaRicerca(4);

export default function HomeScreen( {navigation} ){

	const [modalVisible, setModalVisible] = React.useState(false);

    return (
    <SafeAreaView style={styles.container}>

        <View style={styles.containerFoto_homeScreen}>
                <Image source={require('../images/logo.jpg')} 
				style={styles.logo_homeScreen}/>
            <TouchableOpacity onPress= {() => 
				navigation.navigate('utente')} 
				style={styles.containerCliccabile_homeScreen}>
				<FontAwesome name="bars" size={45}/>
            </TouchableOpacity>
        </View>
        
    <ScrollView style={styles.containerHome}>

		<View style={styles.gruppoRicette_homeScreen}>

			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<Ionicons name="information-circle-outline"
					 size={21} style={{
						 left: 15,
						 top: 10
					 }}/>
			</TouchableWithoutFeedback>

			<Modal transparent={true} visible={modalVisible}>
					<View style={styles.modal_schermataUtente}>
						<View style={styles.innerModal2_schermataUtente}>
								<TouchableOpacity onPress={() => setModalVisible(false)}>
								<AntDesign name="close" size={30} style={styles.closing}/>
								</TouchableOpacity>
								<Text style={styles.testoModal2_schermataUtente}>In questa categoria potrai cercare ricette con un filtro applicato.</Text>
								
							<Text style={styles.testoModal2_schermataUtente}>Per applicare il filtro clicca in alto a destra sulle tre righe</Text>
						</View>
					</View>
				</Modal>

            <TouchableOpacity onPress= {() => 
				navigation.navigate('categoriaPersonalizzata')} 
				style={{flexDirection: 'row', marginLeft: '6%'}}>
                 <Text style={styles.categoria_homeScreen}>
					 Categoria personalizzata</Text>
                 <Text style={styles.categoria2_homeScreen}>{">>"}</Text>

             </TouchableOpacity>
       
             <GruppoRicetteHomeScreen stringa={stringaPersonalizzata} 
			 numeroId={4} navigation={navigation}/>
        </View>

        <View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => navigation.navigate('categoriaFit')} 
			 style={{flexDirection: 'row', marginLeft: '6%'}}>
                 <Text style={styles.categoriaFit_homeScreen}>Categoria fit</Text>
                 <Text style={styles.categoriaFit2_homeScreen}>{">>"}</Text>
            </TouchableOpacity>

            <GruppoRicetteHomeScreen stringa={stringaFit} 
			numeroId={1} navigation={navigation}/>
        </View>

        <View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => 
				navigation.navigate('categoriaTradizionale')} 
				style={{flexDirection: 'row', marginLeft: '6%'}}>
                 <Text style={styles.categoria_homeScreen}>
					 Categoria tradizionale</Text>
                 <Text style={styles.categoria2_homeScreen}>{">>"}</Text>

              </TouchableOpacity>

              <GruppoRicetteHomeScreen stringa={stringaTradizionale} 
			  numeroId={2} navigation={navigation}/>
        </View>
 
        <View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => 
				navigation.navigate('categoriaFacile')} 
				style={{flexDirection: 'row', marginLeft: '6%',}}>
                 <Text style={styles.categoria_homeScreen}>
					 Categoria facile e veloce</Text>
                 <Text style={styles.categoria2_homeScreen}>{">>"}</Text>

             </TouchableOpacity>
      
             <GruppoRicetteHomeScreen stringa={stringaVeloce} 
			 numeroId={3} navigation={navigation}/>
        </View>

    </ScrollView>
    </SafeAreaView>
    )
  }
