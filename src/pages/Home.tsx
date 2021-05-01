import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Home(){
    return(
        <View > 
           <Text style={styles.container}>
           This is the HomePage
           </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems: 'center'
    },
});