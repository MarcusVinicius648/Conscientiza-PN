import React, {useEffect,useState} from 'react';

import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import { SideBar } from '../components/SideBar';
import { useNavigation } from '@react-navigation/core';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Ecoponto() {
    


    return (

        <SafeAreaView>

            

            <SafeAreaView style={styles.container}>

            <SideBar title={"EcoPonto"}/>

            </SafeAreaView>

            

        </SafeAreaView>

            
        
                
                
        
    )

}




const styles = StyleSheet.create({

    container:{

        flex: 1,
        width: '100%',
    
    },


});

