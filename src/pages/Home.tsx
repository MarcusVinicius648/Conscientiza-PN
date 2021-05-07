import React from 'react';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {SideBar} from '../components/SideBar';

export function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <SideBar/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems: 'center'
    },
});