import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export function Detail() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.iconBack}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                        name="arrow-left"
                        size={20}
                        color={colors.white}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.titleRegion}>
                <Text style={styles.text}>
                    Detalhes
                </Text>
            </View>

            <Image style={styles.pointImage} source={require('../../assets/atack.png')} />

            <Text style={styles.title}>
                Atacado Central do Triângulo Novo
            </Text>


            <View style={styles.address}>
                <Text style={styles.titleAddress}>Matriz:</Text>
                <Text style={styles.textAddress}>
                    Rua Santo Antonio, n° 87 / Santo Antônio {'\n'}
                    Ponte Nova - MG
                </Text>
                <Text style={styles.titleAddress}>Filiais:</Text>
                <Text style={styles.textAddress}>
                    Rua Francisco Ozanan, n° 97 / Centro {'\n'}
                    Ponte Nova - MG
                </Text>

                <Text style={styles.titleAddress}>Funcionamento da Matriz:</Text>
                <Text style={styles.textAddress}>
                    Segunda à Sábado das 07:30hs às 21:00hs e {'\n'}
                    Domingo das 07:30hs às 13:00hs
                </Text>
                <Text style={styles.titleAddress}>Funcionamento das Filiais:</Text>
                <Text style={styles.textAddress}>
                    Segunda à Sábado das 07:30hs às 19:20hs e {'\n'}
                    Domingo das 07:30hs às 13:00hs
                </Text>
            </View>


            <View style={styles.footer}>
                <RectButton style={styles.button}>
                    <FontAwesome name="whatsapp" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>Whatsapp</Text>
                </RectButton>
                <RectButton style={styles.button}>
                    <Icon name="mail" size={20} color="#FFF" />
                    <Text style={styles.buttonText}>E-mail</Text>
                </RectButton>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.green,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    detailBox: {
        width: '100%',
        marginLeft: 0
    },
    iconBack: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: 60
    },
    titleRegion: {
        height: 46,
        marginRight: 300
    },
    iconHelp: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: 60
    },
    text: {
        position: 'absolute',
        paddingRight: 80,
        marginTop: 16,
        fontFamily: fonts.text,
        fontSize: 20,
        color: colors.white
    },
    pointImage: {
        width: '99%',
        marginLeft: 2,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 10,
    },
    title: {
        fontFamily: fonts.heading,
        color: colors.gray_dark,
        marginLeft: 7,
        fontSize: 20
    },
    address: {
        marginTop: 3,
        marginLeft: 15,
        lineHeight: 10
    },
    titleAddress: {
        fontFamily: fonts.heading,
        color: colors.gray_dark,
        marginTop: 6,
        fontSize: 15
    },
    textAddress: {
        fontFamily: fonts.text,
        color: colors.gray_dark,
    },

    footer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: colors.gray,
        paddingVertical: 10,
        paddingHorizontal: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    button: {
        width: '48%',
        backgroundColor: '#34CB79',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        marginLeft: 8,
        color: '#FFF',
        fontSize: 16,
        fontFamily: fonts.text,
    },
});