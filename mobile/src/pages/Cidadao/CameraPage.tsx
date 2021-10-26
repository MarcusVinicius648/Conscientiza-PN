import React,{useEffect,useState} from 'react';
import {SafeAreaView,StyleSheet, Alert, View, TouchableOpacity, Text} from 'react-native';
import  {Camera}  from 'expo-camera';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {CapturedImage} from '../../components/CapturedImage';

export function CameraPage(){
    const [startCamera, setStartCamera] = useState(false)
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)
    let camera:Camera


    async function handleTakePicture(){
        const photo = await camera.takePictureAsync();
        setPreviewVisible(true)
        setCapturedImage(photo)
    }

    async function handleSavePicture(){

    }

    async function handleReTakePicture(){

    }

    useEffect(()=>{
        async function handlePermission() {
            const {status} = await Camera.requestPermissionsAsync();
           
            if(status == 'granted'){
                setStartCamera(true)
            }else{
            Alert.alert("Acesso negado!")
            }   
        };
        handlePermission();
    },[])

    return(
        <SafeAreaView>
                {startCamera ? (
                    <View> 
                        {previewVisible && capturedImage ?(
                            <View style={styles.container}>
                                <CapturedImage photo={capturedImage}/>
                                <View style={styles.reTakeButtonContainer}>
                                        <TouchableOpacity 
                                            activeOpacity={0.7}
                                            style={styles.SavePictureButton}
                                            onPress={handleReTakePicture}
                                        >
                                            <Text style={styles.SaveButtonText}>
                                                Tirar Novamente
                                            </Text>
                                        </TouchableOpacity>
                                </View>

                                <View style={styles.SaveButtonContainer}>
                                        <TouchableOpacity 
                                            activeOpacity={0.7}
                                            style={styles.SavePictureButton}
                                            onPress={handleReTakePicture}
                                        >
                                            <Text style={styles.SaveButtonText}>
                                                Salvar Imagem
                                            </Text>
                                        </TouchableOpacity>
                                </View>
                            </View>
                        ):(
                            <View style={styles.container}>
                                <Camera style={styles.cameraContainer}></Camera>
                                <View style={styles.takePictureButtonContainer}>
                                    <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.takePictureButton}
                                    onPress={handleTakePicture}
                                    >
                                    </TouchableOpacity>
                                </View>
                            </View>  
                        )}
                    </View>
                ):(
                    <View
                        style={{
                            alignContent:'center',
                            justifyContent:'center'
                        }}
                    >
                        <Text>
                            Acesso negado!
                        </Text>
                    </View>
                )}
               
        </SafeAreaView>
    )    
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },
    cameraContainer:{
        width:'100%',
        height:'100%'
    },
    takePictureButtonContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom: 25
    },
    takePictureButton:{
        backgroundColor: colors.green,
        height:50,
        width:50,
        borderRadius:25,
    },
    SaveButtonText:{
        fontFamily:fonts.heading
    },
    reTakeButtonContainer:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        marginBottom: 25,
        
    },
    SaveButtonContainer:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginBottom: 25
    },
    SavePictureButton:{
        backgroundColor: colors.green,
        height:50,
        width:100,
        borderRadius:10,
        padding:5
    },
})