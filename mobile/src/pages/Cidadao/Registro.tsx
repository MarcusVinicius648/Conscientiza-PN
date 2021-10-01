import React,{useEffect,useState} from 'react';
import {SafeAreaView, StyleSheet,Alert, View,TouchableOpacity,Text, TextInput, ScrollView, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import { StatusBarTop } from '../../components/StatusBarTop';
import { Feather as Icon } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import ImagePicker from 'react-native-image-crop-picker';

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
    const [photoOptions, setPhotoOptions] = useState(false)
    const [image, setImage] = useState('')

    function CriarRegistro(){
        
    }

    function AcessarFoto(){
       setPhotoOptions(!photoOptions)
    }

    function TakePhotoFromCamera(){
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setImage(image.path);
          });
          
    }

    function ChoosePhotoFromLibrary(){
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setImage(image.path);
          });
          
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBarTop 
                title={'Registrar uma nova ocorrência'} 
                activeIconAbout={false} 
                activeIconBack={true}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
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
            {photoOptions &&(
                   <View style={styles.ContainerFooter}>
                        <View style={styles.photoContainer}>
                            <Text style={styles.photoTitle}>
                                Adicionar uma imagem à ocorrência:
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={TakePhotoFromCamera}
                                style={styles.photoButtonContainer}
                            >
                                <View>
                                    <Text style={styles.photoButtonTitle}>
                                        Tirar a foto   
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={ChoosePhotoFromLibrary}
                                style={styles.photoButtonContainer}
                            >
                                <View>
                                    <Text style={styles.photoButtonTitle}>
                                        Escolher da galeria   
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={AcessarFoto}
                                style={styles.photoButtonContainer}
                            >
                                <View>
                                    <Text style={styles.photoButtonTitle}>
                                        Cancelar  
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
            )}
               
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
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
    ContainerFooter:{
        position:'absolute',
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    },
    photoContainer:{
        backgroundColor:colors.white,
        width:'100%',
        alignItems:'center',
        height: 250,
        borderTopWidth:1,
        borderTopColor:colors.green_dark
    },
    photoTitle:{
        marginTop:14,
        fontFamily:fonts.heading,
        fontSize:16
    },
    photoButtonContainer:{
        marginTop:25,
        width:'90%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.green,
        borderRadius: 15
    },
    photoButtonTitle:{
        fontFamily:fonts.complement,
        fontSize:13
    },
});