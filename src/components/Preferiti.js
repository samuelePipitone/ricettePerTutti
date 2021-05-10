import React from "react";
import { FlatList, View } from "react-native";

import styles from "../../Styles";

const renderItem = ({item}) => {}

export default function Preferiti(){
    const [data, setData] = React.useState([]);

    return(

        <View style={styles.container}>
            <FlatList
            data={data}
            renderItem={renderItem}
            />
        </View>

    )
}