import React, { useState }  from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

import imageWelcome from '../assets/imgVolumosos.png';
import { SideBar } from '../components/SideBar';
import { Coleta } from '../pages/Coleta';

import { Entypo } from '@expo/vector-icons';
import GeneralStatusBarColor from '../components/GeneralStatusBarColor'; 

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { useNavigation } from '@react-navigation/core';

import AsyncStorage from '@react-native-async-storage/async-storage';


export function Volumosos() {

    const[userCep,setUserCep]= useState<string>();
    const navigation = useNavigation();


    function handleStart() {
       
        
            navigation.navigate('Coleta') //This function move on the client to DataPage

        
    }

   

    return (

        <SafeAreaView style={styles.container}>
            
            <View style={styles.bar}>

                <GeneralStatusBarColor backgroundColor="#32B768" />

                    <TouchableOpacity activeOpacity={0.7} onPress={handleStart}>
                        <Text>
                            <Entypo name="chevron-thin-left" style={styles.icon}  />
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.nameBar}>
                        Coleta Volumosos
                    </Text>
            </View>

            <View style={styles.contain}>
            
                <Text style={styles.subtitle}>
                {'\n'} 
                {'\n'}
                {'\n'} 
                {'\n'} 

                A coleta de resíduos sólidos domiciliares consiste na atividade
                regular de recolhimento e transporte do lixo gerado nas 
                residências, no comércio e nos prédios públicos.{'\n'}
                   
                    
                </Text>

                <Image source={imageWelcome} style={styles.img} resizeMode="contain" />

                
                <Text style={styles.subtitle}>
                   {'\n'}
                   
                    
                </Text>

                

                
                


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    /*Global -------------------------------------------- */
    container: {
        flex: 1,
        width: '100%',
    },

    contain: {
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
        
    },
  

    subtitle: {
        textAlign: 'center',
        fontFamily: fonts.heading,
        fontSize: 17,
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 20,
        color: colors.coletas,
    },

    /*Image -------------------------------------------- */

    img: {
        height: Dimensions.get('window').width * 0.7,
    },

    /* Buttom -------------------------------------------- */
    buttom: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 56,
        borderRadius: 16,
        marginBottom: 6
    },

    buttonIcon: {
        color: colors.white,
        fontSize: 23,
        fontWeight: 'bold'
    },
    
bar: {
    flex: 1,
    position: 'absolute',
    textAlign: 'left',
    justifyContent: 'center',
    width: '100%',
    height: 56,
    marginTop: 24,
    backgroundColor: colors.green,
    paddingLeft: 19,
    paddingBottom: 24


},

nameBar: {
    position: 'absolute',
    marginLeft: 72,

    fontFamily: fonts.text,
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 55,
    color: colors.white

},

icon: {
    position: 'absolute',
    marginHorizontal: 19,
    marginTop: -10,
    marginLeft: -8,

    fontSize: 19,
    lineHeight: 20,
    color: colors.white,
},

})