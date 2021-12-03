//import
import React from "react";
import {View, Text, Image, TouchableWithoutFeedback, Dimensions} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

//import miei file
import {styles} from "../../Styles.js";
const dimension = Dimensions.get('window');

//funzione componente ricetta
export default function RicettaCategoria(
    {title, calories, image , ingredients, url, numeroId, digest,
     yields, totalTime, healthLabels, cuisineType, mealType, cautions, navigation} ){
    
	const macroValue = [];

	 //prendo i primi tre valori di digest(fat,carb,prot)
	 for(var i = 0; i < 3; i++){
        macroValue.push(digest[i].total)
    }

	const fat = macroValue[0]/yields;
    const carb = macroValue[1]/yields;
    const prot = macroValue[2]/yields;
    const protPercentage = ((prot/(fat + carb + prot))*100)

	//FIT
	if(numeroId==1){
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
			<View>
				<View style={{alignSelf:'center', flexDirection: 'row',
				 marginLeft: '2%', marginBottom: '2%', top: 7}}>
				<Text style={(protPercentage > 35) ? styles.proteico : styles.nonProteico}>Proteine: {(protPercentage).toFixed(0)}%</Text>
				</View>
				<View style={{alignItems:'center', flexDirection: 'row', marginLeft: '2%', marginBottom: '2%'}}>
							<MaterialCommunityIcons name="fire" size={dimension.width/18}
							color={'#910055'} style={{marginTop: 8}}/>
							<Text style={styles.calorie_ricettaCategoria}>{(calories/yields).toFixed(0)} Kcal</Text>
							<Ionicons name="people" size={dimension.width/18}
							style={{marginTop: 8, marginLeft: 50,marginRight:5}}/>
							<Text style={styles.calorie_ricettaCategoria}>{yields}</Text>
				</View>
			</View>
        </View>
    </View>
    )
	}

	//GENERALE
	else if(numeroId==2){
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
						<View style={{alignItems:'center', flexDirection: 'row',
						 marginLeft: '2%', marginBottom: '2%', top: 20}}>
									<MaterialCommunityIcons name="fire" size={dimension.width/18}
									color={'#910055'} style={{marginTop: 8}}/>
									<Text style={styles.calorie_ricettaCategoria}>{(calories/yields).toFixed(0)} Kcal</Text>
									<Ionicons name="people" size={dimension.width/18}
									style={{marginTop: 8, marginLeft: 50,marginRight:5}}/>
									<Text style={styles.calorie_ricettaCategoria}>{yields}</Text>
						</View>
				</View>
			</View>
			)
	}

	//FACILE E VELOCE
	else if(numeroId==3){
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
					<View>
						<View style={{ flexDirection: 'row', alignSelf: "center", right: 3}}>
							<Entypo name='stopwatch' size={dimension.width/20}/>
							<Text style={{ marginLeft: dimension.width/60,
								 fontSize: 16, fontWeight:"bold"}}>Tempo: {totalTime} minuti</Text>
						</View>
						<View style={{alignItems:'center', flexDirection: 'row', marginLeft: '2%', marginBottom: '2%'}}>
									<MaterialCommunityIcons name="fire" size={dimension.width/18}
									color={'#910055'} style={{marginTop: 8}}/>
									<Text style={styles.calorie_ricettaCategoria}>{(calories/yields).toFixed(0)} Kcal</Text>
									<Ionicons name="people" size={dimension.width/18}
									style={{marginTop: 8, marginLeft: 50,marginRight:5}}/>
									<Text style={styles.calorie_ricettaCategoria}>{yields}</Text>
						</View>
					</View>
				</View>
			</View>
			)
	} 

	//PERSONALIZZATA
	else if(numeroId==4){
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
					<View>
						<View style={{flexDirection:'row', alignItems:'center'}}>
							<FontAwesome name="gear" size={dimension.width/24} style={{marginLeft: 20, marginRight:5}}/>
							<Text style={{fontSize:16, fontWeight:'bold', color:'#1c1c1c'}}>Impostazioni attive</Text>
						</View>
						<View style={{alignItems:'center', flexDirection: 'row', marginLeft: '2%', marginBottom: '2%'}}>
									<MaterialCommunityIcons name="fire" size={dimension.width/18}
									color={'#910055'} style={{marginTop: 8}}/>
									<Text style={styles.calorie_ricettaCategoria}>{(calories/yields).toFixed(0)} Kcal</Text>
									<Ionicons name="people" size={dimension.width/18}
									style={{marginTop: 8, marginLeft: 50,marginRight:5}}/>
									<Text style={styles.calorie_ricettaCategoria}>{yields}</Text>
						</View>
					</View>
				</View>
			</View>
			)
	}
}

