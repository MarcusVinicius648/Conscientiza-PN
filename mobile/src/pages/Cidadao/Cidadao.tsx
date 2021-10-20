import React, {useEffect,useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet,Alert, TouchableOpacity, ScrollView } from 'react-native';
import {StatusBarTop} from '../../components/StatusBarTop';
import { useNavigation, useRoute } from '@react-navigation/core';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {Button} from '../../components/Button';
import { Feather as Icon } from '@expo/vector-icons';
import api from '../../server/api';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Registro } from './Registro';

interface Params{
    nome: string
}

interface Ocorrencias{
    id:number,
    latitude:number,
    longitude:number
}

export function Cidadao() {
    const navigation = useNavigation();
    const route = useRoute();
    const Username = route.params as Params;
    const nome = Username.nome;
    const [initialPositions, setInicialPositions] = useState<[number,number]>([0,0,]);
    const [ocorrencias, setOcorrencias] = useState<Ocorrencias[]>([]);

    useEffect(()=>{
        async function loadPosition(){
            const {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted'){
                Alert.alert('Precisamos de sua permissão para obter a localização');
                return;
            }

            const location = await Location.getCurrentPositionAsync();
            const {latitude, longitude} = location.coords;
            
            setInicialPositions([
                latitude,
                longitude
            ]);
           
        }
        loadPosition();
    },[]);

    useEffect(()=>{
        api.get('ocorrencias').then(response=>{
            setOcorrencias(response.data);
        })
    },[]);

    function handleNavigateToDetail(id: number) {
        navigation.navigate('Detalhes', { ocorrencias_id: id });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBarTop 
                title={'Cidadão Fiscal'} 
                activeIconAbout={false} 
                activeIconBack={true}
            />
            <View style={styles.footerContainer}>
                    <View style={styles.iconContainer}>
                        <View style={styles.mapLocalization}></View> 
                            <View style={styles.mapLocalizationRegion}>
                               <Text style={styles.icon}>
                                    !
                               </Text>  
                        </View>
                    </View>  
                        <Text style={styles.legend}>
                            Quanto mais avermelhado o ponto estiver, {'\n'} 
                            mais pessoas estão insatisfeitas {'\n'}
                            com o mesmo problema.
                        </Text>
            </View>

            <View style={styles.mapContainer}>
            { initialPositions[0] !== 0 && (
                    <MapView 
                        style={styles.map}
                        initialRegion={{
                            latitude:initialPositions[0],
                            longitude:initialPositions[1],
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.014,
                        }}
                    > 
                        {ocorrencias.map(ocorrencia =>(
                            <Marker
                            coordinate={{ 
                                latitude:ocorrencia.latitude, 
                                longitude:ocorrencia.longitude, 
                            }}
                            style={styles.marker} 
                            onPress= {()=>handleNavigateToDetail(ocorrencia.id)}
                            key={ocorrencia.id}
                            >
                                <View style={styles.arrowDown}></View>   
                                <View style={styles.mapMarkerContainer}>
                                    <Text style={styles.mapMarkerTitle}>
                                        !
                                    </Text>   
                                </View>
                        </Marker>         
                        ))}    
                    </MapView>
            )}
            </View>

            <TouchableOpacity 
                activeOpacity={0.8}
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Registro',{nome})}
            > 
                <Button title={'+ Registrar uma ocorrência'}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    titleContainer:{
        marginLeft:15,
        marginTop:10,
        marginBottom:15
    },
    title:{
        textAlign:'left', 
        fontSize:14,
        fontFamily:fonts.complement
    },
    map:{
        width: '100%',
        height: '100%',
    },
    mapContainer:{
        width: '98%',
        height:'65%',
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft:3.5,
        marginBottom:20, 
    },
    buttonContainer:{
        marginHorizontal:50,
        width: '70%',
        marginTop:-15,
        
    },
    marker:{
        width: 40,
        height: 40,
    },
    markerContainer:{
        width: 40,
        height: 40,
    },
    mapMarkerContainer:{
        width: 40,
        height: 40,
        backgroundColor: colors.green,
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        alignItems: 'center'
    },
    arrowDown:{
        position: 'absolute',
        marginLeft: 8,
        marginTop: 38,
        width: 0,
        height:0,
        borderLeftWidth: 12,
        borderLeftColor: 'transparent',
        borderRightWidth: 12,
        borderRightColor: 'transparent',
        borderTopColor:colors.green,
        borderTopWidth: 12
    },
    mapMarkerTitle:{
        flex: 1,
        fontFamily:fonts.complement,
        color: colors.white,
        fontSize: 25,
        lineHeight: 15,
        paddingTop:25
    },
    mapLocalizationRegion:{
        width: 32,
        height: 32,
        backgroundColor: colors.green,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer:{
        margin:15,
        marginTop:20
    },
    icon:{
        color:colors.white,
        fontSize:25
    },
    mapLocalization:{
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        borderRightWidth: 10,
        borderRightColor: 'transparent',
        borderTopColor:colors.green,
        borderTopWidth: 10,
        marginTop:30,
        marginLeft:5.5,
        position:'absolute'
    },
    footerContainer: {
        flexDirection: 'row'
    },
    legend:{
        marginTop: 5,
        marginBottom: 10,
        textAlign: 'left', 
        fontSize: 14,
        fontFamily: fonts.complement
    },
});


