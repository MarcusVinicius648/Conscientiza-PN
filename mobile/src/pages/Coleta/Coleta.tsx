import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Linking } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { StatusBarTop } from '../../components/StatusBarTop';
import { CardHeader } from '../../components/CardHeader';
import { CardItems } from '../../components/CardItems';
import api from '../../server/api';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Load } from '../../components/Load';

interface Params {
    cep: string;
    bairro: string;
}

interface Data {
    codigo: number;
    tipo: number;
    bairro: string;
    dia_semana: number;
    periodo: string;
    horario: string;
}

export function Coleta() {
    const [data, setData] = useState<Data[]>([]);

    const route = useRoute();
    const { cep, bairro } = route.params as Params;

    const [loading, setLoading] = useState(true);

    async function fetchColetas() {
        await api.get(`coletas/${bairro}`).then(response => {
            setData(response.data);
        }); 

        setLoading(false);
    }

    useEffect(() => {
        fetchColetas();
    }, []);

    if (loading)
        return <Load />

    return (
        <SafeAreaView style={styles.container}>
            <StatusBarTop 
                title={'Coletas'} 
                activeIconBack={true} 
                activeIconAbout={false}
            />

            <View style={styles.header}>
                <Text style={styles.text}>                
                    CEP: {cep}
                </Text>
                <Text style={styles.text}>  
                    Bairro: {bairro}
                </Text>
            </View>

            <ScrollView>
                <CardHeader 
                    title={'Coleta Tradicional'} 
                    page={'Residencial'}
                />
                    {data.filter(coleta => coleta.tipo == 1).map(coleta => (
                        <View key={String(coleta.codigo)}>
                            <CardItems      
                                diaSemana={coleta.dia_semana}      
                                periodo={coleta.periodo}        
                                horario={coleta.horario}
                            />                    
                        </View>
                    ))}
                    {data.filter(coleta => coleta.tipo == 1).length == 0 && (
                        <Text style={styles.withoutRecord}> Não há coleta tradicional em seu bairro! </Text>
                    )}

                <CardHeader 
                    title={'Coleta Seletiva'} 
                    page={'Seletiva'}
                />
                    {data.filter(coleta => coleta.tipo == 2).map(coleta => (
                        <View key={String(coleta.codigo)}>
                            <CardItems      
                                diaSemana={coleta.dia_semana}      
                                periodo={coleta.periodo}        
                                horario={coleta.horario}
                            />                    
                        </View>
                    ))}
                    {data.filter(coleta => coleta.tipo == 2).length == 0 && (
                        <Text style={styles.withoutRecord}> Não há coleta seletiva em seu bairro! </Text>
                    )}

                <CardHeader 
                    title={'Coleta de Volumosos'} 
                    page={'Volumosos'}
                />
                    <Text style={styles.link} onPress={()=>{Linking.openURL('https://www.pontenova.mg.gov.br/downloads/categoria/coleta-de-volumosos/10127');}} > 
                        Link para a coleta de volumosos!{'\n'}
                    </Text> 

                <CardHeader 
                    title={'Coleta Zona Rural'} 
                    page={'Rural'}
                />
                    <Text style={styles.link} onPress={()=>{Linking.openURL( 'https://www.pontenova.mg.gov.br/bus_ava.aspx?search=lixo&f=&t=&m=1&c=');}}> 
                        Link para a coleta na zona rural!{"\n"}
                    </Text>

            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        padding: 20,
    },
    text: {
        fontFamily: fonts.heading,
        color: colors.black,
        fontSize: 22
    },
    link:{
        marginLeft: 20,
        marginTop: 10,
        color:colors.blue,      
        fontSize: 18 
    },
    withoutRecord:{
        marginLeft: 20,
        marginTop: 10,
        color:colors.black,      
        fontSize: 18 
    }
});