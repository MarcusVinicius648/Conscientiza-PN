import React,{useEffect, useState} from 'react';
import {SafeAreaView, Alert, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/core';
import { Feather as Icon } from '@expo/vector-icons';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function CameraPage(){
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const navigation = useNavigation();

    function TakePicture(){
        navigation.goBack();
    }

    useEffect(()=>{
        async function CameraAllow(){
            const {status} = await Camera.requestPermissionsAsync();
            if (status !== 'granted'){
                Alert.alert('Precisamos de sua permissão para acessar a Camera!');
                return;
            }
        }
        CameraAllow();
    },[])

    return (
        <SafeAreaView>
            <View style={styles.cameracontainer}>
                <Camera style={styles.camera} type={type}>
                    <View style={styles.takePictureContainer}>
                        <TouchableOpacity 
                            style={styles.takePictureButton}
                            activeOpacity={0.7}
                            onPress={TakePicture}
                        >

                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1
    },
    cameracontainer:{
        width:'100%',
        height:'100%'
    },
    camera:{
        flex:1,
        justifyContent:'flex-end'
    },
    takePictureContainer:{
        marginBottom:20,
        alignSelf:'center'
    },
    takePictureButton:{
        borderWidth:1,
        borderColor:colors.black,
        height:70,
        width:70,
        borderRadius:35,
    },
    
});