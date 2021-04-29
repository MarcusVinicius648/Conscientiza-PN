import React from 'react';
import {SafeAreaView,View,Text,StyleSheet,Image, Dimensions,TouchableOpacity} from 'react-native';

import imageWelcome from '../assets/imgwelcome.png'; 

import { Entypo } from '@expo/vector-icons';


import colors from '../styles/colors';

export function Welcome(){
    return(
        
        <SafeAreaView style={styles.container}>
             <View style={styles.contain}>
                <Text style={styles.title}>
                    Consciêntiza PN
                </Text>
            
            
             <Image source={imageWelcome} style={styles.img} resizeMode="contain"/> 

             <Text style={styles.subtitle}> 
                Utilize {"\n"}
                nossas funcionalidades {"\n"}
                para uma Ponte Nova melhor!
            </Text>

            <TouchableOpacity style={styles.buttom}>
                <Text>
                    <Entypo name="chevron-thin-right" style={styles.buttonIcon}  />
                </Text>
            </TouchableOpacity>

            </View>
        </SafeAreaView>
        
       
    )
    /*Este resizeMode vai fazer com que se utilize corretamente a manipulação da img */
}

const styles = StyleSheet.create({
    
    /*Global -------------------------------------------- */
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    contain:{
        flex:1,
        alignItems:'center',
        justifyContent: 'space-around',
        padding:20
       
    },
    /*Titles and Subtitles -------------------------------------------- */
    title:{
        lineHeight: 34,
        fontSize: 28,
        fontWeight: 'bold',
        alignContent: 'center',
        marginTop: 30,
        marginBottom: 20,
        color: colors.heading

    },

    subtitle:{
        textAlign:'center',
        fontSize: 18,
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 20,
        color: colors.heading
    },

    /*Image -------------------------------------------- */

    img:{
      height: Dimensions.get('window').width *0.7,
      
    },

    /* Buttom -------------------------------------------- */
    buttom:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 56,
        borderRadius: 16,
        marginBottom: 10
    },

    buttonIcon:{
        color: colors.black,
        fontSize: 23,
        fontWeight: 'bold'
        
    },
})