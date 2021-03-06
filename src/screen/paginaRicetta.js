//import
import React from "react";
import {ScrollView, Text, Linking, Image, View, Dimensions, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

//import miei file
import {styles} from "../../Styles";

export default function paginaRicetta( {route, navigation} ){
    //prendo valori tramite route (funzione di navigation)
    const { title, image, calories, ingredients, url, numeroId, digest, yields, totalTime } = route.params;
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

    //gestione link esterno per ricetta
    const handleClick = () => {
        Linking.openURL(url)
    }

    /*
    <Text>Fat: {(fat).toFixed(1)}g {(fatPercentage).toFixed(0)}%</Text>
                <Text>Carb: {(carb).toFixed(1)}g {(carbPercentage).toFixed(0)}%</Text>
                <Text>Protein: {(prot.toFixed(1))}g {(protPercentage).toFixed(0)}%</Text>
    */

    //inizio conditional rendering
    //CATEGORIA FIT
    if(numeroId==1)
    return(
    <ScrollView style={styles.container_paginaRicetta}>
        
        <View style={styles.bloccoSuperiore_paginaRicetta}>
            <Image style={styles.immagineRicetta_paginaRicetta} source={{uri: image}}/>
        </View>

        <View style={styles.bloccoInferiore_paginaRicetta}>

            <View style={styles.conatinerTitolo_paginaRicetta}>
                <Text style={styles.titoloRicetta_paginaRicetta}>{title}</Text>
            </View>

            <View style={styles.tabellaNutrizionale_paginaRicetta}>
                <View style={{ flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="fire" size={dimension.width/20}/>
                    <Text style={styles.calories_paginaRicetta}>{Math.round(kcalPerPersona)} Kcal per persona</Text> 
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Ionicons name="people" size={dimension.width/20}/>
                    <Text style={{ marginLeft: dimension.width/80}}>Ricetta per {yields} {plurale(yields)}</Text>
                </View>
            </View>    

            <View style={styles.ingredienti_paginaRicetta}>
                <Text style={styles.titoloIngredienti_paginaRicetta}>Ingredienti:</Text>

                    {ingredients.map((ingredients, index) =>(
                    <View style={{ flexDirection: 'row', 
                                   alignItems:'center',
                                   marginLeft: dimension.width/20,
                                   marginTop: dimension.height/200}}>
                        <AntDesign key={(index +1)*20} name="minus" size={dimension.width/30}/>
                        <Text key={index}
                              style={styles.lineaIngredienti_paginaRicetta} 
                              numberOfLines={2}
                              >{ingredients.text}</Text>
                    </View>
                    ))}
            </View>

            <View style={styles.linkRicetta_paginaRicetta}>
                <Text style={styles.testoLink_paginaRicetta}>Per pi?? dettagli e per la ricetta completa clicca qui!</Text>
                    <TouchableOpacity onPress = {() => {handleClick()}}>
                        <View style={styles.bottone_paginaRicetta}  >
                            <Text style={styles.testoBottone_paginaRicetta}>Button</Text>
                        </View>
                    </TouchableOpacity>
            </View>

        </View>
        
    </ScrollView>
    )

    //CATEGORIA TRADIZIONALE
    else if(numeroId==2)
    return(
    <ScrollView style={styles.container}>
       
       <View style={styles.bloccoSuperiore_paginaRicetta}>
            <Image style={styles.immagineRicetta_paginaRicetta} source={{uri: image}}/>
        </View>

        <View style={styles.bloccoInferiore_paginaRicetta}>

            <View style={styles.conatinerTitolo_paginaRicetta}>
                <Text style={styles.titoloRicetta_paginaRicetta}>{title}</Text>
            </View>

            <View style={styles.tabellaNutrizionale_paginaRicetta}>
                <View style={{ flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="fire" size={dimension.width/20}/>
                    <Text style={styles.calories_paginaRicetta}>{Math.round(kcalPerPersona)} Kcal per persona</Text> 
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Ionicons name="people" size={dimension.width/20}/>
                    <Text style={{ marginLeft: dimension.width/80}}>Ricetta per {yields} {plurale(yields)}</Text>
                </View>
            </View>    

            <View style={styles.ingredienti_paginaRicetta}>
                <Text style={styles.titoloIngredienti_paginaRicetta}>Ingredienti:</Text>

                    {ingredients.map((ingredients, index) =>(
                    <View style={{ flexDirection: 'row', 
                                   alignItems:'center',
                                   marginLeft: dimension.width/20,
                                   marginTop: dimension.height/200}}>
                        <AntDesign key={(index +1)*20} name="minus" size={dimension.width/30}/>
                        <Text key={index}
                              style={styles.lineaIngredienti_paginaRicetta} 
                              numberOfLines={2}
                              >{ingredients.text}</Text>
                    </View>
                    ))}
            </View>

            <View style={styles.linkRicetta_paginaRicetta}>
                <Text style={styles.testoLink_paginaRicetta}>Per pi?? dettagli e per la ricetta completa clicca qui!</Text>
                    <TouchableOpacity onPress = {() => {handleClick()}}>
                        <View style={styles.bottone_paginaRicetta}  >
                            <Text style={styles.testoBottone_paginaRicetta}>Button</Text>
                        </View>
                    </TouchableOpacity>
            </View>

        </View>
    </ScrollView>
       )

    //CATEGORIA FACILE E VELOCE
    else if(numeroId==3)
    return(
    <ScrollView style={styles.container}>
        
            
        <View style={styles.bloccoSuperiore_paginaRicetta}>
            <Image style={styles.immagineRicetta_paginaRicetta} source={{uri: image}}/>
        </View>

        <View style={styles.bloccoInferiore_paginaRicetta}>

            <View style={styles.conatinerTitolo_paginaRicetta}>
                <Text style={styles.titoloRicetta_paginaRicetta}>{title}</Text>
            </View>

            <View style={styles.tabellaNutrizionale_paginaRicetta}>
                <View style={{ flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="fire" size={dimension.width/20}/>
                    <Text style={styles.calories_paginaRicetta}>{Math.round(kcalPerPersona)} Kcal per persona</Text> 
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Ionicons name="people" size={dimension.width/20}/>
                    <Text style={{ marginLeft: dimension.width/80}}>Ricetta per {yields} {plurale(yields)}</Text>
                </View>
            </View>    

            <View style={styles.ingredienti_paginaRicetta}>
                <Text style={styles.titoloIngredienti_paginaRicetta}>Ingredienti:</Text>

                    {ingredients.map((ingredients, index) =>(
                    <View style={{ flexDirection: 'row', 
                                   alignItems:'center',
                                   marginLeft: dimension.width/20,
                                   marginTop: dimension.height/200}}>
                        <AntDesign key={(index +1)*20} name="minus" size={dimension.width/30}/>
                        <Text key={index}
                              style={styles.lineaIngredienti_paginaRicetta} 
                              numberOfLines={2}
                              >{ingredients.text}</Text>
                    </View>
                    ))}
            </View>

            <View style={styles.linkRicetta_paginaRicetta}>
                <Text style={styles.testoLink_paginaRicetta}>Per pi?? dettagli e per la ricetta completa clicca qui!</Text>
                    <TouchableOpacity onPress = {() => {handleClick()}}>
                        <View style={styles.bottone_paginaRicetta}  >
                            <Text style={styles.testoBottone_paginaRicetta}>Button</Text>
                        </View>
                    </TouchableOpacity>
            </View>

        </View>
    </ScrollView>
    )

    //CATEGORIA PERSONALIZZATA
     else if(numeroId==4)
     return(
     <ScrollView style={styles.container}>
           
              
           <View style={styles.bloccoSuperiore_paginaRicetta}>
            <Image style={styles.immagineRicetta_paginaRicetta} source={{uri: image}}/>
        </View>

        <View style={styles.bloccoInferiore_paginaRicetta}>

            <View style={styles.conatinerTitolo_paginaRicetta}>
                <Text style={styles.titoloRicetta_paginaRicetta}>{title}</Text>
            </View>

            <View style={styles.tabellaNutrizionale_paginaRicetta}>
                <View style={{ flexDirection: 'row'}}>
                    <MaterialCommunityIcons name="fire" size={dimension.width/20}/>
                    <Text style={styles.calories_paginaRicetta}>{Math.round(kcalPerPersona)} Kcal per persona</Text> 
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Ionicons name="people" size={dimension.width/20}/>
                    <Text style={{ marginLeft: dimension.width/80}}>Ricetta per {yields} {plurale(yields)}</Text>
                </View>
            </View>    

            <View style={styles.ingredienti_paginaRicetta}>
                <Text style={styles.titoloIngredienti_paginaRicetta}>Ingredienti:</Text>

                    {ingredients.map((ingredients, index) =>(
                    <View style={{ flexDirection: 'row', 
                                   alignItems:'center',
                                   marginLeft: dimension.width/20,
                                   marginTop: dimension.height/200}}>
                        <AntDesign key={(index +1)*20} name="minus" size={dimension.width/30}/>
                        <Text key={index}
                              style={styles.lineaIngredienti_paginaRicetta} 
                              numberOfLines={2}
                              >{ingredients.text}</Text>
                    </View>
                    ))}
            </View>

            <View style={styles.linkRicetta_paginaRicetta}>
                <Text style={styles.testoLink_paginaRicetta}>Per pi?? dettagli e per la ricetta completa clicca qui!</Text>
                    <TouchableOpacity onPress = {() => {handleClick()}}>
                        <View style={styles.bottone_paginaRicetta}  >
                            <Text style={styles.testoBottone_paginaRicetta}>Button</Text>
                        </View>
                    </TouchableOpacity>
            </View>

        </View>
     </ScrollView>
       )
       //else di backup
    else return (
        <Text>Spiacenti! Pagina non trovata </Text>
    )
       
}