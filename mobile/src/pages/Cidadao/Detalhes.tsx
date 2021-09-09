import React from 'react';
import { SafeAreaView,StyleSheet,Image, View, Text, ScrollView } from 'react-native';
import { StatusBarTop } from '../../components/StatusBarTop';
import { Button } from '../../components/Button';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Detalhes(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBarTop title={'Detalhes das Ocorrências'} activeIconAbout={false} activeIconBack={true}/>
            
            <Image 
                    style={styles.OcorrenciaImage} 
                    source={require('../../assets/ImgExemplo.png')} 
                    resizeMode={'contain'}
            />

            <ScrollView 
                showsVerticalScrollIndicator={false}
            > 
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        <Text style={styles.titleText}>Fiscal:</Text> José Barreiro da Silva {'\n'} 
                        <Text style={styles.titleText}>Local:</Text>  Triângulo Novo / Rua João Alves de Oliveira {'\n'}
                        <Text style={styles.titleText}>Descrição:</Text> Já faz semanas que há este acúmulo de lixo na frente da minha rediência. A prefeitura está fazendo obras na rua, mas não recolhe o lixo. Está com odor desagradável e já apareçeu diversos animais peçonhetos.
                    </Text>
                </View>

                <View style={styles.reportContainer}>
                    <Text style={styles.reportext}>
                        Se você concorda com essa denúncia, aperte o botão abaixo e ajude com que ela ganhe força!
                    </Text>
                    <TouchableOpacity 
                        style={styles.reportButton}
                        activeOpacity={0.8}
                    >
                        <Button title={'Contribuir com a Denúncia'}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    container:{
        width: '100%',
        alignItems:'center',
        flex:1
    },
    OcorrenciaImage:{
        marginTop: 10,
        width: '80%',
        height: 200
    },
    textContainer:{
        marginTop:19,
        marginRight:10,
        marginLeft:10,
    },
    text:{
        fontFamily:fonts.complement,
        fontSize:16,
        lineHeight:22
    },
    titleText:{
        fontFamily:fonts.heading,
        fontSize:16,
        lineHeight:22
    },
    reportContainer:{
        marginTop: 20,
        alignItems:'center',
        borderTopColor:colors.green,
        borderTopWidth:1
    },
    reportext:{
        marginTop:15,
        marginBottom:15,
        marginLeft: 35,
        marginRight:15,
        fontSize: 14,
        fontFamily: fonts.text,
        color:colors.green
    },
    reportButton:{
        marginBottom: 20,
    },
})