import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface CardItemsProps {
    diaSemana: number;
    periodo: string;
    horario: string;
}

function getDiaSemana(dia: number){
    switch(dia){
        case 0: return 'Domingo';
        case 1: return 'Segunda-Feira';
        case 2: return 'Terça-Feira';
        case 3: return 'Quarta-Feira';
        case 4: return 'Quinta-Feira';
        case 5: return 'Sexta-Feira';
        case 6: return 'Sábado';
        default: return '';
    }
}

export function CardItems({ diaSemana, periodo, horario }: CardItemsProps){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textWeek}>
                    {getDiaSemana(diaSemana)}
                </Text>
                <Text style={styles.textTime}>
                    Período: {periodo} - {horario} horas
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray_light,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        flexDirection: 'row',
        //justifyContent: 'space-between',
    },
    header: {
        justifyContent: 'center',
        marginLeft: 10
    },
    textWeek: {
        fontFamily: fonts.heading,
        fontSize: 18,
        color: colors.black,
        fontWeight: '200'
    },
    textTime: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: colors.black
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
});