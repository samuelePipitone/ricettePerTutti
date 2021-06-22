//import
import React from "react";
import {ScrollView, Text, Linking, Image, View, Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";

//import miei file
import {styles} from "../../Styles";

export default function paginaRicetta( {route, navigation} ){
    //prendo valori tramite route (funzione di navigation)
    const { title, image, calories, ingredients, url, numeroId, digest,
            yields, totalTime, healthLabels, cuisineType, mealType, cautions } = route.params;
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
    const immediato = (totalTime) => {if(totalTime==0) return "immediato!"; else return <Text>solo {totalTime} minuti!</Text>}
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
    <ScrollView style={styles.container_paginaRicetta}>

        <TouchableOpacity style={{
            marginTop: '5%',
            marginBottom: '2%', 
            height: dimension.height/18,
            widht: dimension.width,
            marginLeft: '2%'
            }} onPress={() => navigation.goBack()}>
                <Ionicons name={'arrow-back'} size={dimension.width/8}/>
        </TouchableOpacity>

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
                    marginLeft: dimension.width/20,
                    fontWeight: '600',
                    fontSize: dimension.width/20,
                    color: '#003809'
                 }}>Informazioni:</Text>

                <View style={{ flexDirection: 'row', marginLeft: dimension.width/20,}}>
                   <MaterialCommunityIcons name="fire" size={dimension.width/20} color={'#910055'}/>
                    <Text style={styles.calories_paginaRicetta}>{Math.round(kcalPerPersona)} Kcal per persona</Text> 
                </View>

                <View style={{ flexDirection: 'row', marginLeft: dimension.width/20,}}>
                    <Ionicons name="people" size={dimension.width/20}/>
                    <Text style={{ marginLeft: dimension.width/80}}>Ricetta per {yields} {plurale(yields)}</Text>
                </View>

                <View style={{
                    marginVertical: dimension.height/35, 
                    marginLeft:dimension.width/20, 
                    flexDirection:'row'}}>
                    <View style={{}}>
                        <Text style={{fontWeight:'700'}}>Grassi: </Text>
                        <Text style={{fontWeight:'700'}}>Carboidrati: </Text>
                        <Text style={{fontWeight:'700'}}>Proteine: </Text>                       
                    </View>
                    <View style={{marginLeft:'10%'}}>
                        <Text>{(fat).toFixed(1)} g</Text>
                        <Text>{(carb).toFixed(1)} g</Text>
                        <Text>{(prot.toFixed(1))} g</Text>
                    </View>
                    <View style={{alignItems: 'flex-end',marginLeft:'20%'}}>
                        <Text style={(fatPercentage > 35) ? styles.grasso : styles.magro}> {(fatPercentage).toFixed(0)}%</Text>
                        <Text style={{}}>{(carbPercentage).toFixed(0)}%</Text>
                        <Text style={(protPercentage > 35) ? styles.proteico : styles.nonProteico}> {(protPercentage).toFixed(0)}%</Text>
                    </View>
                </View>
                <View style={{
                    marginBottom: dimension.height/35, 
                    marginLeft:dimension.width/20}}>
                    {cautions.length > 0 && (
                    cautions.map((caution, index) => (
                        <View key={index} style={{flexDirection:'row',}}>
                            <Foundation name={'alert'} key={index+20} size={dimension.width/20} color={'#e38512'}/>
                            <Text key={index} style={{marginLeft: dimension.width/80,}}>{caution}</Text>
                        </View>
                    ))
                    )}
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
                <Text style={styles.testoLink_paginaRicetta}>Preparazione:</Text>
                    <TouchableOpacity onPress = {() => {handleClick()}}>
                        <View style={styles.bottone_paginaRicetta}  >
                            <Text style={styles.testoBottone_paginaRicetta}>Ricetta</Text>
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
        <ScrollView style={styles.container_paginaRicetta}>
    
        <TouchableOpacity style={{
            marginTop: '6%', 
            marginBottom: '2%',
            marginLeft: '2%',
            height: dimension.height/18,
            widht: dimension.width,
            }} onPress={() => navigation.goBack()}>
                <Ionicons name={'arrow-back'} size={dimension.width/8}/>
        </TouchableOpacity>

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
                    }}>Categoria Generale</Text>
                
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
                    marginLeft: dimension.width/20,
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
                        <Text style={{ marginLeft: dimension.width/60, marginBottom: dimension.height/110}}>Ricetta per {yields} {plurale(yields)}</Text>
                    </View>
                    { cuisineType.length > 0 &&
                    <View>
                        {cuisineType.map((type, index) => (
                            <View key={index} style={{ 
                                flexDirection: 'row', 
                                marginLeft: dimension.width/30, 
                                marginBottom: dimension.height/130, }}>
                                <Fontisto key={index+20} name={'world-o'} size={dimension.width/20} key={index+10}/>
                                <Text style={{ marginLeft: dimension.width/60, marginBottom: dimension.height/110}}
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
                    <Text style={styles.testoLink_paginaRicetta}>Preparazione:</Text>
                        <TouchableOpacity onPress = {() => {handleClick()}}>
                            <View style={styles.bottone_paginaRicetta}  >
                                <Text style={styles.testoBottone_paginaRicetta}>Ricetta</Text>
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
        <ScrollView style={styles.container_paginaRicetta}>
    
        <TouchableOpacity style={{
            marginTop: '6%', 
            marginBottom: '2%',
            marginLeft: '2%',
            height: dimension.height/18,
            widht: dimension.width,
            }} onPress={() => navigation.goBack()}>
               <Ionicons name={'arrow-back'} size={dimension.width/8}/>
        </TouchableOpacity>

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
                        <Text style={{ marginLeft: dimension.width/60}}>Ricetta per {yields} {plurale(yields)}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: dimension.width/35, marginBottom: dimension.height/50}}>
                        <Entypo name='stopwatch' size={dimension.width/20}/>
                        <Text style={{ marginLeft: dimension.width/60}}>Tempo preparazione: {totalTime} minuti</Text>
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
                    <Text style={styles.testoLink_paginaRicetta}>Preparazione:</Text>
                        <TouchableOpacity onPress = {() => {handleClick()}}>
                            <View style={styles.bottone_paginaRicetta}  >
                                <Text style={styles.testoBottone_paginaRicetta}>Ricetta</Text>
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
        <ScrollView style={styles.container_paginaRicetta}>
    
        <TouchableOpacity style={{
            marginTop: '6%', 
            marginBottom: '2%',
            marginLeft: '2%',
            height: dimension.height/18,
            widht: dimension.width,
            }} onPress={() => navigation.goBack()}>
                <Ionicons name={'arrow-back'} size={dimension.width/8}/>
        </TouchableOpacity>
        
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
    
                <View style={{
                    flex: 1,
                    marginLeft: dimension.width/10,
                    marginRight: dimension.width/10,
                    borderColor: '#b5b5b5',
                    borderWidth: 1,
                    marginTop: dimension.height/10,
                    backgroundColor: '#f5f5f5'}}>
                    

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
                        <Text style={{ marginLeft: dimension.width/80}}>Ricetta per {yields} {plurale(yields)}</Text>
                    </View>
                </View>   

                <View style={{
                    marginTop: dimension.height/25,
                    marginLeft: dimension.width/10,
                    borderWidth: 1,
                    borderColor: '#9e9e9e',
                    marginRight: dimension.width/10,
                    backgroundColor: '#f5f5f5'
                }}>
                    <Text style={{ 
                        color:'#003809', 
                        fontSize: dimension.width/20,
                        fontWeight: '700',
                        marginBottom: dimension.height/20,
                        marginTop: dimension.height/40,
                        marginLeft: dimension.width/25 }}>Informazioni salutistiche:</Text>
                    {healthLabels.map((label, index) => 
                    (
                    <View key={index} style={{flexDirection: 'row', marginLeft: dimension.width/18}}>
                        <Entypo key={index+30} name={'check'} color={'green'} size={dimension.width/20}/>
                        <Text key={index+60} style={{
                        marginBottom: dimension.height/110,
                        marginLeft: dimension.width/90}}>{label}
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
                    <Text style={styles.testoLink_paginaRicetta}>Preparazione:</Text>
                        <TouchableOpacity onPress = {() => {handleClick()}}>
                            <View style={styles.bottone_paginaRicetta}  >
                                <Text style={styles.testoBottone_paginaRicetta}>Ricetta</Text>
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