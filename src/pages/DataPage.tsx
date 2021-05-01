import React from 'react';
import {
    Text,
    SafeAreaView,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TextInput
} from 'react-native';

import { Button } from '../components/Button';

import ImgData from '../assets/imgdata.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { useNavigation } from '@react-navigation/core';

export function DataPage() {

    const navigation = useNavigation();

    function handleMoveon() {
        navigation.navigate('Home')
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

                    <TextInput style={styles.input} placeholder="Digite seu nome:" />

                    <TextInput style={styles.input} placeholder="Digite seu CEP:" />

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