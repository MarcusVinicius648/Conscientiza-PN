import React, {useState,useEffect }from 'react';

import { Alert, SafeAreaView, StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import { SideBar } from '../components/SideBar';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';
import * as Location from 'expo-location';

import fonts from '../styles/fonts';
import colors from '../styles/colors';
import { StatusBarTop } from '../components/StatusBarTop';


interface Params {
    cep: string;
    bairro: string;
}

export function Ecoponto() {  
    const route = useRoute();
    const { cep, bairro } = route.params as Params;

    const[initialPositions, setInicialPositions] = useState<[number,number]>([0,0]);

    useEffect(()=>{
        async function loadPosition(){
            const {status} = await Location.requestPermissionsAsync();

            if (status !== 'granted') {
                Alert.alert('Precisamos de sua permissão para obter a localização');
                return;
            }
            const location = await Location.getCurrentPositionAsync();
            const {latitude, longitude} = location.coords;
            console.log(latitude, longitude);
            setInicialPositions([
                latitude,
                longitude
            ])
        }
        loadPosition();
    },[]);
    return (      
        <SafeAreaView style={styles.container}>
            <StatusBarTop 
                title={'Ponto de Coleta Voluntária'} 
                activeIconBack={true} 
                activeIconAbout={false}
            />

            <Text style={styles.title}>
                 Selecione o Ecoponto para mais informações!
            </Text>
            <View style={styles.itemsFilter}>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                >
                    <TouchableOpacity
                         activeOpacity={0.6}
                         style={styles.cardFilter}
                    >
                        <Text style={styles.titleFilter}>
                            Plástico
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                         activeOpacity={0.6}
                         style={styles.cardFilter}
                    >
                        <Text style={styles.titleFilter}>
                            Papel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                         activeOpacity={0.6}
                         style={styles.cardFilter}
                    >
                        <Text style={styles.titleFilter}>
                            Pilhas
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                         activeOpacity={0.6}
                         style={styles.cardFilter}
                    >
                        <Text style={styles.titleFilter}>
                            Óleo
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>


            <View style={styles.mapContainer}>
                <MapView 
                    style={styles.map}
                    initialRegion={{
                        latitude:initialPositions[0],
                        longitude:initialPositions[1],
                        latitudeDelta: 0.014,
                        longitudeDelta: 0.014,
                    }}
                >

                </MapView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',    
    },
    title:{
       marginLeft:15,
       marginTop:15,
       textAlign:'left', 
       fontSize:14,
       fontFamily:fonts.complement
        
    },
    mapContainer:{
        width: '98%',
        height:'65%',
        borderRadius: 10,
        overflow: 'hidden',
        marginLeft:3.5,
        marginBottom:20,
        
    },
    map:{
        width: '100%',
        height: '100%',
    },
    itemsFilter:{
        flexDirection: 'row',
    },
    cardFilter:{
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 50,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 13,
        paddingBottom: 16,
        marginRight: 8,
        marginTop:20,
        marginBottom:10,
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    selectedItem: {
        borderColor: colors.green,
        borderWidth: 2,
      },
    titleFilter:{
        fontSize:15,
        fontFamily:fonts.text
    },
});

