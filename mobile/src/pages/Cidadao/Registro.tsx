import React,{useEffect,useState} from 'react';
import {SafeAreaView, StyleSheet,Alert, View, TouchableOpacity, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import { StatusBarTop } from '../../components/StatusBarTop';
import { Feather as Icon } from '@expo/vector-icons';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export function Registro(){
    const navigation = useNavigation();
    const route = useRoute();

    return(
        <SafeAreaView style={styles.container}>
            <StatusBarTop 
                title={'Registrar uma nova ocorrência'} 
                activeIconAbout={false} 
                activeIconBack={true}
            />

            <View style={styles.cameraContainer}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('CameraPage')}
                >
                    <Icon
                        name={'image'}
                        style={styles.iconCamera}
                    />
                    <Text style={styles.textCamer}>
                        Adicionar uma Foto
                    </Text>
                </TouchableOpacity> 
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1
    },
    cameraContainer:{
        marginTop: 20,
        marginHorizontal:50,
        borderWidth:1,
        borderColor: colors.black,
        height:150, 
        width:'70%',
        alignItems:'center',
        justifyContent:'center',
    },
    iconCamera:{
       fontSize:36,
       alignSelf:'center'
    },
    textCamer:{
        fontFamily:fonts.text
    }
});