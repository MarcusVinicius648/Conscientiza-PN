import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TextInput,
    Alert,
} from 'react-native';

import { Button } from '../components/Button';

import ImgData from '../assets/imgdata.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInputMask } from 'react-native-masked-text';




export function DataPage() {

    const [name, setName] = useState<string>();
    const [cep, setCep] = useState<string>();

    let [dataAddress = {
        logradouro: "...",
        bairro: '...',
        localidade: '...',
        uf: '...',
        erro: false

    }, setDataAddress] = useState();



    const navigation = useNavigation();

    function handleSetValueName(userName: string) {
        setName(userName)
    }
    function handleSetValueCEP(userCEP: string) {
        setCep(userCEP)
    }


    async function handleMoveon() {
        if (!name || !cep)
            return Alert.alert("Por favor, Preencha todos os campos!😢");


        await AsyncStorage.setItem('@conscientizaPn:userName', name);
        await AsyncStorage.setItem('@conscientizaPn:cep', cep);

        let OnlyNumber = cep.replace(/\D/g, '')
        async function SearchAddressInformations() {

            fetch('https://viacep.com.br/ws/' + OnlyNumber + '/json/').then(res => res.json()).then(async data => {

                setDataAddress(dataAddress = data)

                if (!dataAddress.erro) {

                    await AsyncStorage.setItem('@conscientizaPn:rua', dataAddress.logradouro);
                    await AsyncStorage.setItem('@conscientizaPn:bairro', dataAddress.bairro)
                    await AsyncStorage.setItem('@conscientizaPn:localidade', dataAddress.localidade)
                    await AsyncStorage.setItem('@conscientizaPn:uf', dataAddress.uf)

                    navigation.navigate('Home');
                } else {
                    Alert.alert("Este CEP está incorreto. Insira-o novamente, por favor!")
                }

            }).catch();

        }

        SearchAddressInformations();

    }

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.content}>

                <View style={styles.form}>

                    <View style={styles.header}>

                        <Image source={ImgData} style={styles.img} resizeMode="contain" />

                        <Text style={styles.label}>
                            Informe seu nome e o seu CEP:
                        </Text>
                    </View>

                    <TextInput style={styles.input}
                        placeholder="Digite seu nome:"
                        onChangeText={handleSetValueName}
                        maxLength={22}
                    />

                    <TextInputMask
                        type={'zip-code'}
                        style={styles.input}
                        placeholder="Digite seu CEP:"
                        onChangeText={handleSetValueCEP}
                        keyboardType={'number-pad'}
                        maxLength={9}
                        value={cep}

                    />

                    <View style={styles.footer}>
                        <Button title="Confirmar" onPress={handleMoveon} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )




}

const styles = StyleSheet.create({

    /*Global -------------------------------------- */
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    content: {
        flex: 1,
        width: '100%',

    },

    /*Texts -------------------------------------- */
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
        width: '100%',

    },
    header: {
        alignItems: 'center',
    },

    label: {
        marginTop: 20,

        fontSize: 22,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading

    },
    /*Img-------------------------------------- */
    img: {
        height: Dimensions.get('window').width * 0.4,
        marginTop: -140,
        marginLeft: 20,

    },

    /*Inputs-------------------------------------- */
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,

        color: colors.heading,

        width: '100%',
        marginTop: 40,

        padding: 10,
        textAlign: 'center',
    },

    /*Footer-------------------------------------- */
    footer: {

        marginTop: 50,
        marginBottom: -100,
        width: '100%',
        paddingHorizontal: 20,

    }
});