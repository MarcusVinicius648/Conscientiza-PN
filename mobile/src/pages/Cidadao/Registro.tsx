import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, View, TouchableOpacity, Text, TextInput, ScrollView, Image, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import { StatusBarTop } from '../../components/StatusBarTop';
import { Feather as Icon } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import * as Location from 'expo-location';
import api from '../../server/api';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface Params {
    nome: string,
    photo: any | null
}

export function Registro() {
    const navigation = useNavigation();
    const route = useRoute();
    const dataParams = route.params as Params;

    const [image, setImage] = useState('');

    const [photoOptions, setPhotoOptions] = useState(false);
    const [foto, setFoto] = useState('foto_fake');
    const [descricao, setDescricao] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [ocorrenciaPositions, setOcorrenciaPositions] = useState<[number, number]>([0, 0,]);

    useEffect(() => {
        async function loadPosition() {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Precisamos de sua permissão para obter a localização');
                return;
            }

            const location = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = location.coords;

            setOcorrenciaPositions([
                latitude,
                longitude
            ]);
        }
        loadPosition();
    }, []);

    async function acessarGaleria() {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Desculpe, precisamos de permissão para acessar sua galeria!');
            } else {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    quality: 1,
                });

                if (!result.cancelled) {
                    setImage(result.uri);
                    dataParams.photo = null;
                    setPhotoOptions(!photoOptions);
                }
            }
        }
    }

    async function CriarRegistro() {
        const latitude = ocorrenciaPositions[0];
        const longitude = ocorrenciaPositions[1];
        const reportacoes = 1;
        const nomeUsuario = dataParams.nome;

        const data = {
            descricao,
            foto,
            latitude,
            longitude,
            reportacoes,
            nomeUsuario,
            bairro,
            rua
        };

        if (descricao != '' || rua != '' || bairro != '') {
            await api.post('ocorrencias', data);
            Alert.alert('Registro feito com sucesso!');

            navigation.goBack();
        } else {
            Alert.alert('Informe os dados completos da ocorrência registrada!');
        };
    }

    function handleGravarDescricao(desc: string) {
        setDescricao(desc)
    }
    function handleGravarRua(rua: string) {
        setRua(rua)
    }

    function handleGravarBairro(bairro: string) {
        setBairro(bairro)
    }


    function AcessarFoto() {
        setPhotoOptions(!photoOptions);
    }

    function TakePhotoFromCamera() {
        setPhotoOptions(!photoOptions);
        setImage('');
        navigation.navigate('CameraPage');
    }

    return (
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
                    <Text style={{
                        fontFamily: fonts.text,
                        color: colors.gray_dark,
                        marginBottom: 5,
                    }}>
                        Digite aqui a rua da ocorrência:
                    </Text>
                    <TextInput
                        multiline={false}
                        onChangeText={handleGravarRua}
                        style={[styles.textInput, { height: 50 }]}
                    />
                </View>

                <View style={styles.inputsContainer}>
                    <Text style={{
                        fontFamily: fonts.text,
                        color: colors.gray_dark,
                        marginBottom: 5,
                    }}>
                        Digite aqui o bairro da ocorrência:
                    </Text>
                    <TextInput
                        multiline={false}
                        onChangeText={handleGravarBairro}
                        style={[styles.textInput, { height: 50 }]}
                    />
                </View>

                <View style={styles.inputsContainer}>
                    <Text style={{
                        fontFamily: fonts.text,
                        color: colors.gray_dark,
                        marginBottom: 5,
                    }}>
                        Digite aqui algo sobre a ocorrência:
                    </Text>
                    <TextInput
                        multiline={true}
                        onChangeText={handleGravarDescricao}
                        style={[styles.textInput, { height: 150 }]}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderColor: colors.gray, width: '90%', alignSelf: 'center', borderRadius: 10, paddingBottom: 5 }}>
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

                    {image != '' &&
                        <Image
                            style={{ width: '50%', height: 200, marginLeft: '5%', marginTop: 5, borderRadius: 10, resizeMode: 'contain' }}
                            source={{ uri: image }}
                        />
                    }

                    {dataParams.photo &&
                        <Image
                            style={{ width: '50%', height: 200, marginLeft: '5%', marginTop: 5, borderRadius: 10, resizeMode: 'contain' }}
                            source={{ uri: dataParams.photo.uri }}
                        />
                    }
                </View>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    activeOpacity={0.7}
                    onPress={CriarRegistro}
                >
                    <Button title={'Criar Ocorrência'} />
                </TouchableOpacity>
            </ScrollView>

            {photoOptions && (
                <View style={styles.ContainerFooter}>
                    <View style={styles.photoContainer}>
                        <Text style={styles.photoTitle}>
                            Adicionar uma imagem
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={TakePhotoFromCamera}
                            style={styles.photoButtonContainer}
                        >
                            <View>
                                <Text style={styles.photoButtonTitle}>
                                    Tirar uma foto
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={acessarGaleria}
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
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: colors.background
    },
    cameraContainer: {
        flex: 1,
        marginTop: 5,
        marginLeft: 15,
        borderRadius: 10,
        backgroundColor: colors.background,
        height: 100,
        width: '35%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    iconCamera: {
        fontSize: 36,
        alignSelf: 'center',
        color: colors.gray_dark
    },
    textCamer: {
        fontFamily: fonts.text,
        color: colors.gray_dark,
        alignSelf: 'center',
    },
    inputsContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15
    },
    textInput: {
        borderWidth: 1,
        borderColor: colors.gray,
        width: '90%',
        height: 60,
        marginBottom: 15,
        borderRadius: 10,
        fontFamily: fonts.text,
        color: colors.gray_dark,
        paddingLeft: 15
    },
    DescTextInput: {
        height: 170,
        paddingRight: 15
    },
    buttonContainer: {
        width: '90%',
        marginLeft: '5%',
        marginTop: 15,
        marginBottom: 30,
    },
    ContainerFooter: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    photoContainer: {
        backgroundColor: colors.background,
        width: '100%',
        alignItems: 'center',
        height: 250,
        borderTopWidth: 2,
        borderTopColor: colors.green_dark
    },
    photoTitle: {
        marginTop: 12,
        fontFamily: fonts.heading,
        fontSize: 14
    },
    photoButtonContainer: {
        marginTop: 15,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
        borderRadius: 15
    },
    photoButtonTitle: {
        fontFamily: fonts.complement,
        color: colors.white,
        fontSize: 15
    },
});