import React, {useEffect,useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet,Alert, TouchableOpacity } from 'react-native';
import {StatusBarTop} from '../../components/StatusBarTop';
import { useNavigation } from '@react-navigation/core';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {Button} from '../../components/Button';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export function Cidadao() {

    const[initialPositions, setInicialPositions] = useState<[number,number]>([0,0,]);
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
    return (
        <SafeAreaView style={styles.container}>
            <StatusBarTop 
                title={'Cidadão Fiscal'} 
                activeIconAbout={false} 
                activeIconBack={true}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Selecione uma ocorrência para ver mais detalhes!
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
                        <Marker
                            coordinate={{ 
                                latitude:-20.410735550013100, 
                                longitude:-42.89270396080260, 
                            }}
                            style={styles.marker} 
                        >
                            <View style={[styles.arrowDown,styles.mapMarkerArrowRed]}></View>   
                            <View style={[styles.mapMarkerContainer,styles.mapMarkerContainerRed]}>
                                <Text style={styles.mapMarkerTitle}>
                                    !
                                </Text>   
                            </View>
                        </Marker>
                    </MapView>
            )}
            </View>

            <TouchableOpacity 
                style={styles.buttonContainer}
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
        marginTop:15,
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
        width: '70%'
    },
    marker:{
        width: 60,
        height: 60,
    },
    mapMarkerContainer:{
        width: 50,
        height: 40,
        backgroundColor: colors.green,
        flexDirection: 'column',
        borderRadius: 4,
        overflow: 'hidden',
        alignItems: 'center'
    },
    arrowDown:{
        position: 'absolute',
        marginLeft: 19,
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
    mapMarkerContainerRed:{
        backgroundColor:colors.red,
    },
    mapMarkerArrowRed:{
        borderTopColor:colors.red,
    },
});

