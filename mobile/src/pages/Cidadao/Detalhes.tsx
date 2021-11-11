import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import { StatusBarTop } from '../../components/StatusBarTop';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../server/api';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Ocorrencias {
    id: number,
    foto: string,
    latitude: number,
    longitude: number,
    reportacoes: number,
    nomeUsuario: string,
    descricao: string,
    bairro: string,
    rua: string,
};

interface Params {
    ocorrencias_id: number
};

export function Detalhes() {
    const [data, setData] = useState<Ocorrencias>({} as Ocorrencias);
    const route = useRoute();
    const routeParams = route.params as Params;

    useEffect(() => {
        api.get(`ocorrencias/${routeParams.ocorrencias_id}`).then(response => {
            setData(response.data);
        });

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBarTop title={'Detalhes das Ocorrências'} activeIconAbout={false} activeIconBack={true} />
            <View style={styles.imageContainer}>
                <Text style={styles.titleText}>
                        Foto do Local
                </Text>
                <Image
                    style={styles.OcorrenciaImage}
                    source={{
                        uri: `https://conscientizapn.s3.sa-east-1.amazonaws.com/${data.foto}`
                    }}
                    resizeMode={'contain'}
                />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>
                        Cidadão Fiscal:
                    </Text>
                    <Text style={styles.dataText}>
                        {data.nomeUsuario}
                    </Text>

                    <Text style={styles.titleText}>
                        Local da Ocorrência:
                    </Text>
                    <Text style={styles.dataText}>
                        {data.rua} / {data.bairro}
                    </Text>

                    <Text style={styles.titleText}>
                        Descrição:
                    </Text>
                    <Text style={styles.dataText}>
                        {data.descricao}
                    </Text>
                </View>
            </ScrollView>

            <View style={styles.reportContainer}>
                <Text style={styles.reportext}>
                    Se você concorda com essa denúncia, aperte o botão abaixo e ajude com que ela ganhe força!
                </Text>
                <TouchableOpacity
                    style={styles.reportButton}
                    activeOpacity={0.8}
                >
                    <Button title={'Contribuir com a Denúncia'} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    imageContainer: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
    },
    OcorrenciaImage: {
        width: '80%',
        height: 250,
        resizeMode: 'contain',
        borderRadius: 5
    },
    textContainer: {
        marginLeft: 15,
        width: '90%',
    },
    text: {
        fontFamily: fonts.complement,
        fontSize: 16,
        lineHeight: 26
    },
    titleText: {
        fontFamily: fonts.heading,
        fontSize: 16,
        marginVertical: 5
    },
    dataText: {
        fontFamily: fonts.text,
        fontSize: 16,
    },
    reportContainer: {
        alignItems: 'center',
        borderTopColor: colors.green,
        borderTopWidth: 1,
    },
    reportext: {
        marginTop: 5,
        marginBottom: 15,
        marginLeft: 35,
        marginRight: 15,
        fontSize: 14,
        fontFamily: fonts.text,
        color: colors.green
    },
    reportButton: {
        marginBottom: 10,
    },
})