import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { StatusBarTop } from '../../components/StatusBarTop';
import colors from '../../styles/colors';

import ImgFelippe from '../../assets/Foto-Felippe.png';
import ImgMarcosVinicius from '../../assets/Foto-Marcus-Vinicius.png';
import ImgJoaoVictor from '../../assets/Foto-Joao-Victor.png';
import ImgJosue from '../../assets/Foto-Josue.png';
import ImgLeonardo from '../../assets/Foto-Leonardo.png';
import fonts from '../../styles/fonts';

export function About(){

    return(
        <SafeAreaView style={styles.container}>
            <StatusBarTop 
                title={'Sobre'} 
                activeIconBack={true} 
                activeIconAbout={false}
            />

            <ScrollView>
                <View style={styles.photo}>
                    <Image 
                        source={ImgFelippe} 
                        style={styles.image}
                    />
                    <Text style={styles.text}> 
                        Coordenador: {'\n'} 
                        Profº Felippe Moreira Faêda {'\n'} 
                        felippe.faeda@ifmg.edu.br
                    </Text>
                </View>

                <View style={styles.photo}>
                    <Image 
                        source={ImgMarcosVinicius} 
                        style={styles.image}
                    />
                    <Text style={styles.text}> 
                        Bolsista: {'\n'} 
                        Marcus Vinícius Vieira dos Santos {'\n'} 
                        marcusvieira087@gmail.com
                    </Text>
                </View>

                <View style={styles.photo}>
                    <Image 
                        source={ImgJoaoVictor} 
                        style={styles.image}
                    />
                    <Text style={styles.text}> 
                        Bolsista: {'\n'} 
                        João Victor da Silva Ferreira {'\n'} 
                        joaovictorferr11@gmail.com
                    </Text>
                </View>

                <View style={styles.photo}>
                    <Image 
                        source={ImgJosue} 
                        style={styles.image}
                    />
                    <Text style={styles.text}> 
                        Voluntário: {'\n'} 
                        Josué Rodrigues dos Santos {'\n'} 
                        josue.rodrigues11@hotmail.com
                    </Text>
                </View>

                <View style={styles.photo}>
                    <Image 
                        source={ImgLeonardo} 
                        style={styles.image}
                    />
                    <Text style={styles.text}> 
                        Colaborador Externo: {'\n'} 
                        Leonardo Moreira Faêda {'\n'} 
                        leonardo.faeda@gmail.com
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    photo: {
        flexDirection: 'row',
        backgroundColor: colors.white
    },
    image: {
        borderColor: colors.body_dark,
        borderWidth: 2,
        borderRadius: 100,
        height: 80,
        width: 80,
        margin: 20
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 16,
        marginTop: 20
    }
});
