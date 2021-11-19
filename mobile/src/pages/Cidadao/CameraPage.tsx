import React, {useEffect, useState} from 'react';
import {SafeAreaView,StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Camera} from 'expo-camera';

import colors from '../../styles/colors';
import { CameraPreview } from '../../components/CameraPreview';

export function CameraPage(){
    const navigation = useNavigation();

    const [startCamera, setStartCamera] = useState(false);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [capturedImage, setCapturedImage] = useState<any>(null);

    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
    
    let camera: Camera;

    async function handleTakePicture(){
        const options = { quality: 0.5, base64: true };
        const photo: any = await camera.takePictureAsync(options);
        setPreviewVisible(true);
        setCapturedImage(photo);
    }

    const handleFlashMode = () => {
        if (flashMode === Camera.Constants.FlashMode.on) {
          setFlashMode(Camera.Constants.FlashMode.off);
        } else if (flashMode === Camera.Constants.FlashMode.off) {
          setFlashMode(Camera.Constants.FlashMode.on);
        } else {
          setFlashMode(Camera.Constants.FlashMode.auto);
        }
    }

    const switchCamera = () => {
        if (cameraType === Camera.Constants.Type.back) {
          setCameraType(Camera.Constants.Type.front);
        } else {
          setCameraType(Camera.Constants.Type.back);
        }
    }

    const iniciarCamera = async () => {
        const {status} = await Camera.requestPermissionsAsync();
        if (status === 'granted') {
          setStartCamera(true);
        } else {
          Alert.alert('Acesso Negado!');
        }
    }

    useEffect(() => {
        iniciarCamera();
    }, []);

    async function handleSavePicture(){
        navigation.navigate('Registro', {photo: capturedImage});
    }

    async function handleReTakePicture(){
        setCapturedImage(null);
        setPreviewVisible(false);
        iniciarCamera();
    }

    return(
        <SafeAreaView style={styles.container}>

            { !startCamera && 
                <View style={styles.viewTirarFoto}>
                    <TouchableOpacity
                        onPress={iniciarCamera}
                        style={styles.button}
                    >
                        <Text style={styles.text}>Tirar Foto</Text>
                    </TouchableOpacity>
                </View>
            }

            { startCamera && previewVisible &&
                <CameraPreview 
                    photo={capturedImage} 
                    savePhoto={handleSavePicture} 
                    retakePicture={handleReTakePicture} 
                />
            }

            { startCamera && !previewVisible &&
                <View style={{flex: 1}}>
                    <Camera
                        type={cameraType}
                        flashMode={flashMode}
                        style={{flex: 1}} 
                        ref={(r: Camera) => {
                            camera = r
                        }}
                    >
                        <View style={styles.viewCamera}>
                            <View style={styles.viewFlashAndSwitchCamera}>
                                <TouchableOpacity
                                    onPress={handleFlashMode}
                                    style={styles.buttonFlashMode}
                                >
                                    <Text style={{fontSize: 20}}>⚡️</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={switchCamera}
                                    style={styles.buttonSwitchCamera}
                                >
                                    <Text style={{fontSize: 20}}>
                                        {cameraType === Camera.Constants.Type.front ? '🤳' : '📷'}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.viewTakePicture}>
                                <View style={styles.viewButtonTakePicture}>
                                    <TouchableOpacity
                                        onPress={handleTakePicture}
                                        style={styles.buttonTakePicture}
                                    />
                                </View>
                            </View>
                        </View>
                    </Camera>                     
                </View>
            }
            
        </SafeAreaView>
    )    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    viewCamera: {
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    viewFlashAndSwitchCamera: {
        position: 'absolute',
        left: '5%',
        top: '10%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    buttonFlashMode: {
        backgroundColor: '#000',
        borderRadius: 50,
        height: 25,
        width: 25
    },
    buttonSwitchCamera: {
        marginTop: 20,
        borderRadius: 10,
        height: 25,
        width: 25
    },
    viewTakePicture: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
    },
    viewButtonTakePicture: {
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center'
    },
    buttonTakePicture: {
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    viewTirarFoto: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 130,
        borderRadius: 4,
        backgroundColor: colors.green,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})