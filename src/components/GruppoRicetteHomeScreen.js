//import
import React, { useEffect } from "react"
import { FlatList, View } from "react-native"

//import miei file
import RicettaHomeScreen from "./RicettaHomeScreen";

export default function GruppoRicetteHomeScreen({stringa, numeroId, navigation}){

    const [data, setData] = React.useState([]);

    useEffect(() => {
      getRecipes();
  }, [])
  
  const getRecipes = async () => {
    const response = await fetch(stringa);
    const data2 = await response.json();
    setData(data2.hits);
  }

 return(

    <View style={{flex:1}}>
    <FlatList
    horizontal={true}
    data={data}
    keyExtractor={(x, i) => i.toString()}
    renderItem={({item}) => (
      
        <RicettaHomeScreen 
        key={item.recipe.calories}
        title={item.recipe.label}
        calories={(item.recipe.calories).toFixed(0)}
        image={item.recipe.image}
        ingredients={item.recipe.ingredients}
        url={item.recipe.url}
        numeroId= {numeroId}
        digest={item.recipe.digest}
        yields={item.recipe.yield}
        totalTime={item.recipe.totalTime}
        navigation={navigation}/>
       )
    }
    />
    </View>
 )
}