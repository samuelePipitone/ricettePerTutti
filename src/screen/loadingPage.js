import React, { useEffect } from 'react';
import { View, Image, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native';

const dimension = Dimensions.get('window');
const imageHeight = dimension.height;
const imageWidth = dimension.width;

export default function loadingPage( { navigation }){

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home");
        }, 3500);
    }, []);

    return(
      <SafeAreaView style={{ 
          backgroundColor: 'white',
          width: imageWidth,
          height: imageHeight}}>  
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            
        }}>
            <Image 
            source={require('../images/logo.jpg')}
            style={{ 
                height:imageHeight/3,
                width:imageWidth/3,
                alignSelf: 'center',
                marginTop: '45%',
                resizeMode: 'contain'
                }}/>
            <ActivityIndicator 
            size='large'
            color='green'
            />
        </View>
      </SafeAreaView>
    )
}