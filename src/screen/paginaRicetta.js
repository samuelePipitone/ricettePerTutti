//import
import React from "react";
import {ScrollView, Text, Linking, Image, View, Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";

//import miei file
import {styles} from "../../Styles";
import Consigli from "../components/Consigli";

export default function paginaRicetta( {route, navigation} ){
    //prendo valori tramite route (funzione di navigation)
    const { title, image, calories, ingredients, url, numeroId, digest,
            yields, totalTime, healthLabels, cuisineType, cautions } = route.params;
    const macroValue = [];
    

    //prendo i primi tre valori di digest(fat,carb,prot)
    for(var i = 0; i < 3; i++){
        macroValue.push(digest[i].total)
    }

    //istanzio i valori e calcolo le percentuali 
    const fat = macroValue[0]/yields;
    const carb = macroValue[1]/yields;
    const prot = macroValue[2]/yields;
    const fatPercentage = ((fat/(fat + carb + prot))*100)
    const carbPercentage = ((carb/(fat + carb + prot))*100)
    const protPercentage = ((prot/(fat + carb + prot))*100)
    const kcalPerPersona = (calories/yields)
    const plurale = (yields) => {if(yields==1) return "persona"; else return "persone"}
    const dimension = Dimensions.get('window');
    let prova = '';
    const lunghezza = ingredients.length;
    let counter = 0;
    let prova2 = '';

    if(healthLabels > 0 ){
    prova = healthLabels[0];};

    //gestione link esterno per ricetta
    const handleClick = () => {
        Linking.openURL(url)
    }

    //CATEGORIA FIT------------------------------------------------------------------------------------
    if(numeroId==1)
    return(
    <SafeAreaView>
        <View style={{flexDirection:'row', backgroundColor: 'white', borderBottomWidth: 1,
      borderBottomColor: '#9e9e9e',  }}>
          <TouchableOpacity style={{
            marginTop: '6%',
            marginBottom: '2%', 
            widht: dimension.width,
            marginLeft: '2%',
            top: '2%'      
            }} onPress={() => navigation.goBack()}>
                <AntDesign name={'arrowleft'} size={dimension.width/10}/>
        </TouchableOpacity>
		<Image source={require("../images/logo.jpg")} style={{
			width: 70,
			height: 70,
			marginTop: 25,
			marginLeft: 150
		}}/>
        </View>

    <ScrollView style={styles.container_paginaRicetta}>

        <View style={styles.bloccoSuperiore_paginaRicetta}>
            <Image style={styles.immagineRicetta_paginaRicetta} source={{uri: image}}/> 
        </View>
                
        <View style={styles.bloccoInferiore_paginaRicetta}>

            <View style={styles.containerTitolo_paginaRicetta}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{
                    color: '#9e9e9e',
                    fontSize: dimension.width/25,
                    marginLeft: '2%'
                    }}>Categoria Fit</Text>
                </View>
                <Text style={styles.titoloRicetta_paginaRicetta}>{title}</Text>
            </View>

            <View style={styles.tabellaNutrizionale_paginaRicetta}>

                <Text style={{
                    marginTop: dimension.height/150,
                    marginBottom: dimension.height/30,
                    marginLeft: dimension.width/18,
                    fontWeight: '600',
                    fontSize: dimension.width/18,
                    color: '#003809'
                 }}>Informazioni:</Text>

                <View style={{ flexDirection: 'row', marginLeft: dimension.width/20,}}>
                   <MaterialCommunityIcons name="fire" size={dimension.width/20} color={'#910055'}/>
                    <Text style={styles.calories_paginaRicetta}>{Math.round(kcalPerPersona)} Kcal per persona</Text> 
                </View>

                <View style={{ flexDirection: 'row', marginLeft: dimension.width/20,}}>
                    <Ionicons name="people" size={dimension.width/20}/>
                    <Text style={{ marginLeft: dimension.width/60, 
					fontSize: 17}}>Ricetta per {yields} {plurale(yields)}</Text>
                </View>

                <View style={{
                    marginVertical: dimension.height/35, 
                    marginLeft:dimension.width/20, 
                    flexDirection:'row'}}>
                    <View style={{}}>
                        <Text style={{fontWeight:'700', fontSize: 17}}>Grassi: </Text>
                        <Text style={{fontWeight:'700', fontSize: 17}}>Carboidrati: </Text>
                        <Text style={{fontWeight:'700', fontSize: 17}}>Proteine: </Text>                       
                    </View>
                    <View style={{marginLeft:'10%'}}>
                        <Text style={{fontSize: 17}}>{(fat).toFixed(1)} g</Text>
                        <Text style={{fontSize: 17}}>{(carb).toFixed(1)} g</Text>
                        <Text style={{fontSize: 17}}>{(prot.toFixed(1))} g</Text>
                    </View>
                    <View style={{alignItems: 'flex-end',marginLeft:'20%'}}>
                        <Text style={(fatPercentage > 35) ? styles.grasso : styles.magro}> {(fatPercentage).toFixed(0)}%</Text>
                        <Text style={(carbPercentage > 65) ? styles.carboidratiAlti : styles.carboidratiBassi}>{(carbPercentage).toFixed(0)}%</Text>
                        <Text style={(protPercentage > 35) ? styles.proteico : styles.nonProteico}> {(protPercentage).toFixed(0)}%</Text>
                    </View>
                </View>
                <View style={{
                    marginBottom: dimension.height/35, 
                    marginLeft:dimension.width/20}}>
                    {(typeof(cautions)) != 'undefined' && cautions.length > 0 && (
                    cautions.map((caution, index) => (
                        <View key={index} style={{flexDirection:'row',}}>
                            <Foundation name={'alert'} key={index+20} size={dimension.width/20} color={'#e38512'}/>
                            <Text key={index} style={{marginLeft: dimension.width/60,
								marginTop: 1, fontSize: 17}}>{caution}</Text>
                        </View>
                    ))
                    )}
                </View>
            </View>    

            <Consigli id={1} fat={fatPercentage} prot={protPercentage} carb={carbPercentage}/>

            <View style={styles.ingredienti_paginaRicetta}>
                <Text style={styles.titoloIngredienti_paginaRicetta}>Ingredienti:</Text>

                    {ingredients.map((ingredients, index) =>{
                        counter++;   
                        return(
                    <View key={index} 
                    style={(counter == lunghezza) ? styles.ingredienti2_paginaRicetta :
                        styles.ingredienti1_paginaRicetta}>

                        <Text key={index+30}
                              style={styles.lineaIngredienti_paginaRicetta} 
                              numberOfLines={1}
                              ellipsizeMode={"tail"}
                              >{ingredients.text}</Text>
                        <Text key={index+60} style={{
                            marginLeft: dimension.width/20,
                            marginBottom: dimension.height/40,
                            color: '#787878'}}>
                                {Math.round(ingredients.weight)} g</Text>
                    </View>
                    )
                                    
                     })}
            </View>

            <View style={styles.linkRicetta_paginaRicetta}>
                    <TouchableOpacity onPress = {() => {handleClick()}}>
                        <View style={{  
                            marginBottom: dimension.height/8,
							flexDirection: "row"}}>
                            <Text style={styles.testoBottone_paginaRicetta}>vai alla ricetta!</Text>
							<Text style={{
								     color: '#820050',
									 fontWeight: 'bold',
									 letterSpacing: 1,
									 fontSize: 30,
									 marginLeft: 15,
									 marginTop: 1
							}}>{">>"}</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    </SafeAreaView>
    )

    //CATEGORIA GENERALE----------------------------------------------------------------------------------
    else if(numeroId==2)
    return(
        <SafeAreaView style={{flex:1}}>

<View style={{flexDirection:'row', backgroundColor: 'white', borderBottomWidth: 1,
      borderBottomColor: '#9e9e9e',  }}>
          <TouchableOpacity style={{
            marginTop: '6%',
            marginBottom: '2%', 
            widht: dimension.width,
            marginLeft: '2%',
            top: '2%'      
            }} onPress={() => navigation.goBack()}>
                <AntDesign name={'arrowleft'} size={dimension.width/10}/>
        </TouchableOpacity>
		<Image source={require("../images/logo.jpg")} style={{
			width: 70,
			height: 70,
			marginTop: 25,
			marginLeft: 150
		}}/>
        </View>

        <ScrollView style={styles.container_paginaRicetta}>
    
            <View style={styles.bloccoSuperiore_paginaRicetta}>
                <Image style={styles.immagineRicetta_paginaRicetta} source={{uri: image}}/>
            </View>
    
            <View style={styles.bloccoInferiore_paginaRicetta}>
    
            <View style={styles.containerTitolo_paginaRicetta}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{
                    color: '#9e9e9e',
                    fontSize: dimension.width/25,
                    marginLeft: '2%'
                    }}>Categoria Tradizionale</Text>
                
                <Text style={{
                    color: '#9e9e9e',
                    fontSize: dimension.width/25,
                    marginLeft: '30%'
                    }}>{prova2}</Text>
                </View>
                <Text style={styles.titoloRicetta_paginaRicetta}>{title}</Text>
            </View>
    
                <View style={styles.tabellaNutrizionale_paginaRicetta}>

                <Text style={{
                    marginTop: dimension.height/150,
                    marginBottom: dimension.height/30,
                    marginLeft: dimension.width/18,
                    fontWeight: '600',
                    fontSize: dimension.width/20,
                    color: '#003809',
                 }}>Informazioni:</Text>

                    <View style={{ 
                        flexDirection: 'row', 
                        marginBottom: dimension.height/130,
                        marginLeft: dimension.width/30
                        }}>
                        <MaterialCommunityIcons name="fire" size={dimension.width/20} color={'#910055'}/>
                        <Text style={styles.calories_paginaRicetta}>{Math.round(kcalPerPersona)} Kcal per persona</Text> 
                    </View>
                    <View style={{ 
                        flexDirection: 'row', 
                        marginLeft: dimension.width/30, 
                        marginBottom: dimension.height/130, }}>
                        <Ionicons name="people" size={dimension.width/20}/>
                        <Text style={{ marginLeft: dimension.width/60, marginBottom: dimension.height/110, fontSize: 17}}>Ricetta per {yields} {plurale(yields)}</Text>
                    </View>
                    { (typeof(cuisineType) != 'undefined') &&  cuisineType.length > 0 &&
                    <View>
                        {cuisineType.map((type, index) => (
                            <View key={index} style={{ 
                                flexDirection: 'row', 
                                marginLeft: dimension.width/30, 
                                marginBottom: dimension.height/130, }}>
                                <Fontisto key={index+20} name={'world-o'} size={dimension.width/20} key={index+10}/>
                                <Text style={{ marginLeft: dimension.width/60, marginBottom: dimension.height/110, fontSize: 17}}
                                      key={index+40}>{type}</Text>
                            </View>
                        ))}
                    </View>
                    }
                </View>  
    
                <View style={styles.ingredienti_paginaRicetta}>
                <Text style={styles.titoloIngredienti_paginaRicetta}>Ingredienti:</Text>

                    {ingredients.map((ingredients, index) =>{
                        counter++;   
                        return(
                    <View key={index} 
                    style={(counter == lunghezza) ? styles.ingredienti2_paginaRicetta :
                        styles.ingredienti1_paginaRicetta}>

                        <Text key={index+30}
                              style={styles.lineaIngredienti_paginaRicetta} 
                              numberOfLines={1}
                              ellipsizeMode={"tail"}
                              >{ingredients.text}</Text>
                        <Text key={index+60} style={{
                            marginLeft: dimension.width/20,
                            marginBottom: dimension.height/40,
                            color: '#787878'}}>
                                {Math.round(ingredients.weight)} g</Text>
                    </View>
                    )
                                    
                     })}
            </View>
    
			<View style={styles.linkRicetta_paginaRicetta}>
                    <TouchableOpacity onPress = {() => {handleClick()}}>
                        <View style={{  
                            marginBottom: dimension.height/20,
							flexDirection: "row"}}>
                            <Text style={styles.testoBottone_paginaRicetta}>vai alla ricetta!</Text>
							<Text style={{
								     color: '#820050',
									 fontWeight: 'bold',
									 letterSpacing: 1,
									 fontSize: 30,
									 marginLeft: 10,
									 marginTop: 1
							}}>{">>"}</Text>
                        </View>
                    </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
        </SafeAreaView>
        )

    //CATEGORIA FACILE E VELOCE-------------------------------------------------------------------------
    else if(numeroId==3)
    return(
        <SafeAreaView style={{flex:1}}>

<View style={{flexDirection:'row', backgroundColor: 'white', borderBottomWidth: 1,
      borderBottomColor: '#9e9e9e',  }}>
          <TouchableOpacity style={{
            marginTop: '6%',
            marginBottom: '2%', 
            widht: dimension.width,
            marginLeft: '2%',
            top: '2%'      
            }} onPress={() => navigation.goBack()}>
                <AntDesign name={'arrowleft'} size={dimension.width/10}/>
        </TouchableOpacity>
		<Image source={require("../images/logo.jpg")} style={{
			width: 70,
			height: 70,
			marginTop: 25,
			marginLeft: 150
		}}/>
        </View>

        <ScrollView style={styles.container_paginaRicetta}>

            <View style={styles.bloccoSuperiore_paginaRicetta}>
                <Image style={styles.immagineRicetta_paginaRicetta} source={{uri: image}}/>
            </View>
    
            <View style={styles.bloccoInferiore_paginaRicetta}>
    
            <View style={styles.containerTitolo_paginaRicetta}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{
                    color: '#9e9e9e',
                    fontSize: dimension.width/25,
                    marginLeft: '2%'
                    }}>Categoria Veloce</Text>
                </View>
                <Text style={styles.titoloRicetta_paginaRicetta}>{title}</Text>
            </View>
    
                <View style={styles.tabellaNutrizionale_paginaRicetta}>

                <Text style={{
                    marginTop: dimension.height/150,
                    marginBottom: dimension.height/30,
                    marginLeft: dimension.width/20,
                    fontWeight: '600',
                    fontSize: dimension.width/20,
                    color: '#003809'
                 }}>Informazioni:</Text>    

                   <View style={{ flexDirection: 'row', marginLeft: dimension.width/35, marginVertical: dimension.height/110}}>
                        <MaterialCommunityIcons name="fire" size={dimension.width/20} color={'#910055'}/>
                        <Text style={styles.calories_paginaRicetta}>{Math.round(kcalPerPersona)} Kcal per persona</Text> 
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: dimension.width/35, marginBottom: dimension.height/110}}>
                        <Ionicons name="people" size={dimension.width/20}/>
                        <Text style={{ marginLeft: dimension.width/60, fontSize: 17}}>Ricetta per {yields} {plurale(yields)}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: dimension.width/35, marginBottom: dimension.height/50}}>
                        <Entypo name='stopwatch' size={dimension.width/20}/>
                        <Text style={{ marginLeft: dimension.width/60, fontSize: 17}}>Tempo preparazione: {totalTime} minuti</Text>
                    </View>
                </View>    

                <View style={styles.ingredienti_paginaRicetta}>
                <Text style={styles.titoloIngredienti_paginaRicetta}>Ingredienti:</Text>

                    {ingredients.map((ingredients, index) =>{
                        counter++;   
                        return(
                    <View key={index} 
                    style={(counter == lunghezza) ? styles.ingredienti2_paginaRicetta :
                        styles.ingredienti1_paginaRicetta}>

                        <Text key={index+30}
                              style={styles.lineaIngredienti_paginaRicetta} 
                              numberOfLines={1}
                              ellipsizeMode={"tail"}
                              >{ingredients.text}</Text>
                        <Text key={index+60} style={{
                            marginLeft: dimension.width/20,
                            marginBottom: dimension.height/40,
                            color: '#787878'}}>
                                {Math.round(ingredients.weight)} g</Text>
                    </View>
                    )
                                    
                     })}
            </View>
    
			<View style={styles.linkRicetta_paginaRicetta}>
                    <TouchableOpacity onPress = {() => {handleClick()}}>
                        <View style={{  
                            marginBottom: dimension.height/20,
							flexDirection: "row"}}>
                            <Text style={styles.testoBottone_paginaRicetta}>vai alla ricetta!</Text>
							<Text style={{
								     color: '#820050',
									 fontWeight: 'bold',
									 letterSpacing: 1,
									 fontSize: 30,
									 marginLeft: 10,
									 marginTop: 1
							}}>{">>"}</Text>
                        </View>
                    </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
        </SafeAreaView>
        )

    //CATEGORIA PERSONALIZZATA-------------------------------------------------------------------------
     else if(numeroId==4)
     return(
        <SafeAreaView style={{flex:1}}>

<View style={{flexDirection:'row', backgroundColor: 'white', borderBottomWidth: 1,
      borderBottomColor: '#9e9e9e',  }}>
          <TouchableOpacity style={{
            marginTop: '6%',
            marginBottom: '2%', 
            widht: dimension.width,
            marginLeft: '2%',
            top: '2%'      
            }} onPress={() => navigation.goBack()}>
                <AntDesign name={'arrowleft'} size={dimension.width/10}/>
        </TouchableOpacity>
		<Image source={require("../images/logo.jpg")} style={{
			width: 70,
			height: 70,
			marginTop: 25,
			marginLeft: 150
		}}/>
        </View>

        <ScrollView style={styles.container_paginaRicetta}>
    
            <View style={styles.bloccoSuperiore_paginaRicetta}>
                <Image style={styles.immagineRicetta_paginaRicetta} source={{uri: image}}/>
            </View>
    
            <View style={styles.bloccoInferiore_paginaRicetta}>
    
            <View style={styles.containerTitolo_paginaRicetta}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{
                    color: '#9e9e9e',
                    fontSize: dimension.width/25,
                    marginLeft: '2%'
                    }}>Categoria Personalizzata</Text>
                </View>
                <Text style={styles.titoloRicetta_paginaRicetta}>{title}</Text>
            </View>
    
                <View style={styles.tabellaNutrizionale_paginaRicetta}>
                    
                    <Text style={{
                    marginTop: dimension.height/150,
                    marginBottom: dimension.height/30,
                    marginLeft: dimension.width/20,
                    fontWeight: '600',
                    fontSize: dimension.width/20,
                    color: '#003809'
                 }}>Informazioni:</Text>

                    <View style={{ 
                        flexDirection: 'row',
                        marginLeft: dimension.width/35, 
                        marginVertical: dimension.height/110}}>
                        <MaterialCommunityIcons name="fire" size={dimension.width/20} color={'#910055'}/>
                        <Text style={styles.calories_paginaRicetta}>{Math.round(kcalPerPersona)} Kcal per persona</Text> 
                    </View>
                    <View style={{ 
                        flexDirection: 'row', 
                        marginLeft: dimension.width/35, 
                        marginBottom: dimension.height/50}}>
                        <Ionicons name="people" size={dimension.width/20}/>
                        <Text style={{ marginLeft: dimension.width/80, fontSize: 17}}>Ricetta per {yields} {plurale(yields)}</Text>
                    </View>
                </View>   

                <View style={styles.tabellaNutrizionale_paginaRicetta}>
                    <Text style={{ 
                        color:'#003809', 
                        fontSize: dimension.width/20,
                        fontWeight: '700',
                        marginBottom: dimension.height/20,
                        marginTop: dimension.height/40,
                        marginLeft: dimension.width/14 }}>Informazioni salutistiche:</Text>
            
                    {typeof(healthLabels) != 'undefined' &&
                    healthLabels.map((label, index) => 
                    (
                    <View key={index} style={{flexDirection: 'row', marginLeft: dimension.width/18}}>
                        <Entypo key={index+30} name={'check'} color={'green'} size={dimension.width/20}/>
                        <Text key={index+60} style={{
                        marginBottom: dimension.height/110,
                        marginLeft: dimension.width/90, fontSize: 17}}>{label}
                        </Text>
                    </View>))}
                </View>
    
                <View style={styles.ingredienti_paginaRicetta}>
                <Text style={styles.titoloIngredienti_paginaRicetta}>Ingredienti:</Text>

                    {ingredients.map((ingredients, index) =>{
                        counter++;   
                        return(
                    <View key={index} 
                    style={(counter == lunghezza) ? styles.ingredienti2_paginaRicetta :
                        styles.ingredienti1_paginaRicetta}>

                        <Text key={index+30}
                              style={styles.lineaIngredienti_paginaRicetta} 
                              numberOfLines={1}
                              ellipsizeMode={"tail"}
                              >{ingredients.text}</Text>
                        <Text key={index+60} style={{
                            marginLeft: dimension.width/20,
                            marginBottom: dimension.height/40,
                            color: '#787878'}}>
                                {Math.round(ingredients.weight)} g</Text>
                    </View>
                    )
                                    
                     })}
            </View>
    
			<View style={styles.linkRicetta_paginaRicetta}>
                    <TouchableOpacity onPress = {() => {handleClick()}}>
                        <View style={{  
                            marginBottom: dimension.height/20,
							flexDirection: "row"}}>
                            <Text style={styles.testoBottone_paginaRicetta}>vai alla ricetta!</Text>
							<Text style={{
								     color: '#820050',
									 fontWeight: 'bold',
									 letterSpacing: 1,
									 fontSize: 30,
									 marginLeft: 10,
									 marginTop: 1
							}}>{">>"}</Text>
                        </View>
                    </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
        </SafeAreaView>
        )
    //else di backup------------------------------------------------------------------------------------
    else return (
        <Text style={{fontWeight: 'bold', fontSize: dimension.height/10}}>Spiacenti! Pagina non trovata...</Text>
    )
       
}