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
					 Categoria Personalizzata</Text>
                 <Text style={styles.categoria2_homeScreen}>{">>"}</Text>

             </TouchableOpacity>
       
             <GruppoRicetteHomeScreen stringa={stringaPersonalizzata} 
			 numeroId={4} navigation={navigation}/>
        </View>

        <View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => navigation.navigate('categoriaFit')} 
			 style={{flexDirection: 'row', marginLeft: '6%'}}>
                 <Text style={styles.categoriaFit_homeScreen}>Categoria Fit</Text>
                 <Text style={styles.categoriaFit2_homeScreen}>{">>"}</Text>
            </TouchableOpacity>

            <GruppoRicetteHomeScreen stringa={stringaFit} 
			numeroId={1} navigation={navigation}/>
        </View>

		<View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => 
				navigation.navigate('categoriaFacile')} 
				style={{flexDirection: 'row', marginLeft: '6%',}}>
                 <Text style={styles.categoria_homeScreen}>
					 Categoria Facile e Veloce</Text>
                 <Text style={styles.categoria2_homeScreen}>{">>"}</Text>

             </TouchableOpacity>
      
             <GruppoRicetteHomeScreen stringa={stringaVeloce} 
			 numeroId={3} navigation={navigation}/>
        </View>

        <View style={styles.gruppoRicette_homeScreen}>
             <TouchableOpacity onPress= {() => 
				navigation.navigate('categoriaTradizionale')} 
				style={{flexDirection: 'row', marginLeft: '6%'}}>
                 <Text style={styles.categoria_homeScreen}>
					 Categoria Tradizionale</Text>
                 <Text style={styles.categoria2_homeScreen}>{">>"}</Text>

              </TouchableOpacity>

              <GruppoRicetteHomeScreen stringa={stringaTradizionale} 
			  numeroId={2} navigation={navigation}/>
        </View>
 

		<View style={{
			marginTop: 30,
			 borderTopColor: 'black',
			  borderTopWidth: 0.8}}>
			<View style={{flexDirection:'row', marginTop: 15}}>
				<Text style={{
				marginLeft: 20,
				fontWeight: 'bold',
				fontSize: 20
				}}>Contatti !</Text>
				<Text style={{
					fontSize: 18,
					marginLeft: 215
				}}>Samuele Pipitone</Text>
			</View>

			<View style={{flexDirection:'row',
			 justifyContent: 'space-evenly'
			 }}>
				<Image 
				style={{height:60, width:60, marginTop: 20, marginLeft: 10, marginBottom: 30}}
				source={{uri: 'https://www.dongiro.it/wp-content/uploads/2018/07/facebook-logo-png-5a35528eaa4f08.7998622015134439826976.jpg'}}>
				</Image>
				<Image 
				style={{height:45, width:45, marginTop: 27, marginLeft: 10, marginBottom: 30}}
				source={{uri: 'https://key0.cc/images/preview/20_01cfef901110694a52dbd29edc68f9c6.png'}}>
				</Image>
				<Image 
				style={{height:60, width:60, marginTop: 20, marginLeft: 10, marginBottom: 30}}
				source={{uri: 'https://banner2.cleanpng.com/20180628/wpy/kisspng-github-social-media-computer-icons-logo-android-5b34849064c384.6953108415301684644127.jpg'}}>
				</Image>
				<Image 
				style={{height:70, width:70, marginTop: 15, marginLeft: 10, marginBottom: 30}}
				source={{uri: 'https://key0.cc/images/preview/22277_7af3ae21119fdcfe3a175576ba341241.png'}}>
				</Image>
			</View>
		</View>

    </ScrollView>
    </SafeAreaView>
    )
  }
