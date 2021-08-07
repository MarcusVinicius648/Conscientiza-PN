import React, { useState }  from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import imageWelcome from '../assets/imgSeletiva.png';
import { StatusBarTop } from '../components/StatusBarTop';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { ScrollView } from 'react-native-gesture-handler';

export function Seletiva() {

    return (

        <SafeAreaView style={styles.container}>
            <StatusBarTop 
                title={'Coleta Seletiva'} 
                activeIconBack={true} 
                activeIconAbout={false}
            />            
            <ScrollView>
                <View style={styles.contain}>            
                    <Text style={styles.subtitle}>
                        A coleta seletiva é um método que otimiza 
                        os processos de destinição dos resíduos e rejeitos. 
                        Ela exige que haja uma separação dos lixos em 
                        úmidos, secos, recicláveis e orgânicos.   
                    </Text>

                    <Image source={imageWelcome} style={styles.img} resizeMode="contain" />
                </View>

                <View style={styles.agrupamento}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                        <Text style={styles.text} >
                            1
                        </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                        <Text style={styles.text} >
                            2
                        </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                        <Text style={styles.text} >
                            3
                        </Text>
                    </TouchableOpacity> 
                </View>

                <View style={styles.agrupamento}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                        <Text style={styles.text} >
                            4
                        </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                        <Text style={styles.text} >
                            5
                        </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                        <Text style={styles.text} >
                            6
                        </Text>
                    </TouchableOpacity> 
                </View>

            </ScrollView>
            
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
    agrupamento: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: colors.green,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        margin: 2
    },
    text: {
        fontSize: 16,
        margin: 20,
        color: colors.white,
        fontFamily: fonts.text
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