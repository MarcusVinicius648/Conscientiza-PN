import React, { useState }  from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import imageWelcome from '../../assets/imgwelcome.png';
import { Entypo } from '@expo/vector-icons';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Welcome() {

    const[userCep,setUserCep]= useState<string>();
    const navigation = useNavigation();

    function handleStart() {
        async function setCep(){
            const cep = await AsyncStorage.getItem('@conscientizaPn:cep')
            setUserCep(cep || '')
        }
        console.log(userCep)

       setCep()

        if(!userCep){
            navigation.navigate('DataPage') //This function move on the client to DataPage
        }else{  
            navigation.navigate('Home') 
        }
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.contain}>
                <Text style={styles.title}>
                    Utilize nossas {"\n"}
                    funcionalidades para {"\n"}
                    uma Ponte Nova melhor!   
                </Text>
                <Image source={imageWelcome} style={styles.img} resizeMode="contain" />
                <Text style={styles.subtitle}>
                    Uma plataforma de {"\n"}
                    apoio e fiscalização ao descarte {"\n"}
                    de resíduos sólidos.
                </Text>
                <TouchableOpacity 
                    style={styles.buttom}
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Entypo 
                        name="chevron-thin-right" 
                        style={styles.buttonIcon} 
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    /*Global -------------------------------------------- */
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: colors.background
    },
    contain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20
    },
    /*Titles and Subtitles -------------------------------------------- */
    title: {
        fontFamily: fonts.heading,
        lineHeight: 34,
        fontSize: 28,
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20,
        color: colors.heading
    },
    subtitle: {
        textAlign: 'center',
        fontFamily: fonts.text,
        fontSize: 18,
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 20,
        color: colors.heading
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
})