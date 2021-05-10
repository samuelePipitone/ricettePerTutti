import React, { useEffect } from "react"
import { FlatList } from "react-native"

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

    <FlatList
    horizontal={true}
    data={data}
    keyExtractor={(x, i) => i.toString()}
    renderItem={({item}) =>

    data.map(data => (
        <RicettaHomeScreen 
        key={data.recipe.calories}
        title={data.recipe.label}
        calories={(data.recipe.calories).toFixed(0)}
        image={data.recipe.image}
        ingredients={data.recipe.ingredients}
        url={data.recipe.url}
        numeroId= {numeroId}
        digest={data.recipe.digest}
        yields={data.recipe.yield}
        totalTime={data.recipe.totalTime}
        navigation={navigation}/>
       ))
    }
    />
 )
}