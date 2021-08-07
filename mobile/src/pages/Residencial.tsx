import React  from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import imageWelcome from '../assets/imgResidencial.png';
import imageSacoLixo from '../assets/garbage.png';
import imageCaixa from '../assets/box.png';
import imageRelogio from '../assets/clock.png';
import imageLixeira from '../assets/trash.png';
import imageReciclagem from '../assets/recycle.png';

import { StatusBarTop } from '../components/StatusBarTop';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Residencial() {

    return (
        <SafeAreaView style={styles.container}>   
            <StatusBarTop 
                title={'Coleta Tradicional'} 
                activeIconBack={true} 
                activeIconAbout={false}
            />

            <ScrollView>
                <View style={styles.description}>            
                    <Text style={styles.textDescription}>  
                        A coleta de lixo tradicional é realizada pela prefeitura de Ponte Nova 
                        em diferentes dias da semana em todos os bairros da cidade. Este tipo de 
                        coleta é realizada por caminhões de lixo específicos, onde os garis recolhem 
                        o lixo deixado pelo morador na porta de suas casas ou em cestos de lixo 
                        localizados em diferentes pontos pela cidade.
                    </Text>                
                </View>

                <View>
                    <Text style={styles.textDescription}>  
                        Para manter o correto descarte de lixo, siga algumas dicas:
                    </Text>

                    <Text style={styles.textDescription}>  
                        1. Embale corretamente seu lixo.
                    </Text>

                    <View style={styles.viewImg}>
                        <Image source={imageSacoLixo} style={styles.image} />
                    </View>                    

                    <Text style={styles.textDescription}>  
                        2. Proteja materiais cortantes.
                    </Text>

                    <View style={styles.viewImg}>
                        <Image source={imageCaixa} style={styles.image} />
                    </View>  

                    <Text style={styles.textDescription}>  
                        3. Deposite na frente de sua casa um pouco antes do horário de início da coleta ou deposite em locais específicos para descarte.                   
                    </Text>

                    <View style={styles.viewImg}>
                        <Image source={imageRelogio} style={styles.image} />
                        <Image source={imageLixeira} style={styles.image} />
                    </View> 

                    <Text style={styles.textDescription}>  
                        4. Dê preferência em descartar materiais recicláveis no dia da coleta seletiva.                    
                    </Text>

                    <View style={styles.viewImg}>
                        <Image source={imageReciclagem} style={styles.image} />
                    </View> 
                </View>

                <View>
                    
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
        backgroundColor: colors.background
    },
    description: {
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,        
    }, 
    textDescription: {
        textAlign: 'center',
        fontFamily: fonts.text,
        fontSize: 17,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        color: colors.coletas,
    },

    /*Image -------------------------------------------- */
    img: {
        height: Dimensions.get('window').width * 0.7,
    },
    viewImg: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'        
    },
    image: {
        height: 65,
        width: 65,
        marginLeft: 5
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