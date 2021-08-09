import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import imageWelcome from '../../assets/imgVolumosos.png';
import { StatusBarTop } from '../../components/StatusBarTop';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export function Volumosos() {
    return (
        <SafeAreaView style={styles.container}>            
            <StatusBarTop 
                title={'Coleta Seletiva'} 
                activeIconBack={true} 
                activeIconAbout={false}
            />  

            <View style={styles.contain}>            
                <Text style={styles.subtitle}>
                    A coleta de resíduos sólidos domiciliares consiste na atividade
                    regular de recolhimento e transporte do lixo gerado nas 
                    residências, no comércio e nos prédios públicos.
                </Text>
                <Image source={imageWelcome} style={styles.img} resizeMode="contain" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    /*Global -------------------------------------------- */
    container: {
        flex: 1,
        width: '100%',
    },
    contain: {
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,        
    }, 
    subtitle: {
        textAlign: 'center',
        fontFamily: fonts.text,
        fontSize: 17,
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 20,
        color: colors.coletas,
    },

    /*Image -------------------------------------------- */

    img: {
        height: Dimensions.get('window').width * 0.7,
    },

    /* Buttom -------------------------------------------- */
    buttom: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 56,
        borderRadius: 16,
        marginBottom: 6
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 23,
        fontWeight: 'bold'
    },    
    bar: {
        flex: 1,
        position: 'absolute',
        textAlign: 'left',
        justifyContent: 'center',
        width: '100%',
        height: 56,
        marginTop: 24,
        backgroundColor: colors.green,
        paddingLeft: 19,
        paddingBottom: 24
    },
    nameBar: {
        position: 'absolute',
        marginLeft: 72,

        fontFamily: fonts.text,
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 55,
        color: colors.white

    },
    icon: {
        position: 'absolute',
        marginHorizontal: 19,
        marginTop: -10,
        marginLeft: -8,

        fontSize: 19,
        lineHeight: 20,
        color: colors.white,
    },

})