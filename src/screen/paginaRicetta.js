//import
import React from "react";
import {ScrollView, Text, Button, Linking, Image } from "react-native"

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
    const fat = macroValue[0];
    const carb = macroValue[1];
    const prot = macroValue[2];
    const fatPercentage = ((fat/(fat + carb + prot))*100)
    const carbPercentage = ((carb/(fat + carb + prot))*100)
    const protPercentage = ((prot/(fat + carb + prot))*100)
    const kcalPerPersona = (calories/yields)
    const plurale = (yields) => {if(yields==1) return "persona"; else return "persone"}
    const immediato = (totalTime) => {if(totalTime==0) return "immediato!"; else return <Text>solo {totalTime} minuti!</Text>}
    
    //gestione link esterno per ricetta
    const handleClick = () => {
        Linking.openURL(url)
    }
    //inizio conditional rendering
    //CATEGORIA FIT
    if(numeroId==1)
    return(
    <ScrollView style={styles.container}>
        
        <Text style={styles.titoloRicetta_Ricetta}>{title}</Text>
        <Image style={styles.immagineRicetta_Ricetta} source={{uri: image}}/>

        <Text>percentage of fat: {(fat).toFixed(1)}  .    {(fatPercentage).toFixed(0)}%</Text>
        <Text>percetnage of carb: {(carb).toFixed(1)}    .  {(carbPercentage).toFixed(0)}%</Text>
        <Text>percentage of protein: {(prot.toFixed(1))}  .  {(protPercentage).toFixed(0)}%</Text>

        <Text>{kcalPerPersona} Kcal per persona</Text>
       
        <Text>Ingredienti per {yields} {plurale(yields)}:</Text>
        {ingredients.map((ingredients, index) =>(
            <Text key={index}>{ingredients.text}</Text>
            ))}

        <Text>Per più dettagli e per la ricetta completa clicca qui!</Text>
        <Button
        onPress={handleClick}
        title="ricetta!"
        />
    </ScrollView>
    )

    //CATEGORIA TRADIZIONALE
    else if(numeroId==2)
    return(
    <ScrollView style={styles.container}>
           
        <Text style={styles.titoloRicetta_Ricetta}>{title}</Text>
        <Image style={styles.immagineRicetta_Ricetta} source={{uri: image}}/>
   
        <Text>Ingredienti:</Text>
        {ingredients.map((ingredients, index) =>(
               <Text key={index}>{ingredients.text}</Text>
               ))}
   
        <Text>Per più dettagli e per la ricetta completa clicca qui!</Text>
           <Button
           onPress={handleClick}
           title="ricetta!"
           />
           
    </ScrollView>
       )

    //CATEGORIA FACILE E VELOCE
    else if(numeroId==3)
    return(
    <ScrollView style={styles.container}>
        
        <Text style={styles.titoloRicetta_Ricetta}>{title}</Text>
        <Image style={styles.immagineRicetta_Ricetta} source={{uri: image}}/>

        <Text>tempo di preparazione: {immediato(totalTime)}</Text>

        <Text>Ingredienti per {yields} {plurale(yields)}</Text>
        {ingredients.map((ingredients, index) =>(
            <Text key={index}>{ingredients.text}</Text>
            ))}

        <Text>Per più dettagli e per la ricetta completa clicca qui!</Text>
        <Button
        onPress={handleClick}
        title="ricetta!"
        />
    </ScrollView>
    )

    //CATEGORIA PERSONALIZZATA
     else if(numeroId==4)
     return(
     <ScrollView style={styles.container}>
           
           <Text style={styles.titoloRicetta_Ricetta}>{title}</Text>
           <Image style={styles.immagineRicetta_Ricetta} source={{uri: image}}/>
   
           <Text>Ingredienti:</Text>
           {ingredients.map((ingredients, index) =>(
               <Text key={index}>{ingredients.text}</Text>
               ))}
   
           <Text>Per più dettagli e per la ricetta completa clicca qui!</Text>
           <Button
           onPress={handleClick}
           title="ricetta!"
           />
     </ScrollView>
       )
       //else di backup
    else return (
        <Text>Spiacenti! Pagina non trovata </Text>
    )
       
}