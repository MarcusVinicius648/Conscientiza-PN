import React,{useEffect,useState} from 'react';
import {SafeAreaView, StyleSheet,Alert, View,TouchableOpacity,Text, TextInput, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import { StatusBarTop } from '../../components/StatusBarTop';
import { Feather as Icon } from '@expo/vector-icons';
import { Button } from '../../components/Button';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Assets } from '@react-navigation/stack';

interface Params{
    nome:string
}

export function Registro(){
    const navigation = useNavigation();
    const route = useRoute();
    const Username = route.params as Params;
    const [file, setFile] = useState();

    function CriarRegistro(){
        
    }

    function AcessarFoto(){
       
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBarTop 
                title={'Registrar uma nova ocorrência'} 
                activeIconAbout={false} 
                activeIconBack={true}
            />

            <ScrollView>
                <View style={styles.inputsContainer}>
                    <TextInput
                        placeholder={'Bairro'} 
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder={'Rua'} 
                        style={styles.textInput}
                    />
                    <TextInput
                        placeholder={'Descrição'} 
                        multiline={true}
                        style={[styles.textInput,styles.DescTextInput]}
                    />
                </View>

                <View style={styles.cameraContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={AcessarFoto}
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

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    activeOpacity={0.7}
                    onPress={CriarRegistro}
                >
                 <Button title={'Criar Ocorrência'}/>
                </TouchableOpacity>
            </ScrollView>
           
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1
    },
    cameraContainer:{
        marginLeft:'5%',
        marginTop:30,
        borderWidth:1,
        borderRadius: 10,
        borderColor: colors.gray,
        height:150, 
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
    },
    iconCamera:{
       fontSize:36,
       alignSelf:'center',
       color: colors.gray_dark
    },
    textCamer:{
        fontFamily:fonts.text,
        color: colors.gray_dark
    },
    inputsContainer:{
        flex:1,
        alignItems:'center',
        marginTop: 35
    },
    textInput:{
        borderWidth:1,
        borderColor: colors.gray,
        width: '90%',
        height:60,
        marginBottom:15,
        borderRadius: 10,
        fontFamily: fonts.text,
        color: colors.gray_dark,
        paddingLeft: 15
    },
    DescTextInput:{
        height: 170,
        paddingRight:15,
    },
    buttonContainer:{
        width:'90%',
        marginLeft:'5%',
        marginTop:40,
        marginBottom: 30,
    },
});