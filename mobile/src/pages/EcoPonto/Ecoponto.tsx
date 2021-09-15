import React, {useState,useEffect }from 'react';
import { Alert, SafeAreaView, StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';
import * as Location from 'expo-location';
import api from '../../server/api';
import { Feather as Icon } from '@expo/vector-icons';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { StatusBarTop } from '../../components/StatusBarTop';

interface Item{
    id:number;
    title:string;
}

interface Point{
    id:number;
    latitude:number;
    longitude:number
}

interface Params {
    cep: string;
    bairro: string;
}

export function Ecoponto() {  

    const[items,setItems] = useState<Item[]>([]);
    const[selectedItems, setSelectedItems] = useState<number[]>([]);
    const[points, setPoints] = useState<Point[]>([]);
    const[initialPositions, setInicialPositions] = useState<[number,number]>([0,0,]);
    const navigation = useNavigation();
    const route = useRoute();
    const { cep, bairro } = route.params as Params;
    
    useEffect(()=>{
        async function loadPosition(){

            const {status} = await Location.requestForegroundPermissionsAsync();
            
            if (status !== 'granted'){
                Alert.alert('Precisamos de sua permissão para obter a localização');
                return;
            }

            let location;

            try {
                location = await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.BestForNavigation,
                    mayShowUserSettingsDialog: true,
                    
                });
            } catch {
                location = await Location.getLastKnownPositionAsync({
                    maxAge: 5000,
                    requiredAccuracy: 5000
                });                              
            }

            if (location !== null){
                setInicialPositions([
                    location.coords.latitude, 
                    location.coords.longitude
                ]);
            } else {
                setInicialPositions([
                    -20.409795983395213, 
                    -42.89450318166993
                ]);
            }
        }
        loadPosition();
    },[]);

    useEffect(()=>{
        api.get('items').then(response =>{
            setItems(response.data);
        })
    },[]);

    useEffect(()=>{
        api.get('points',{
            params:{
                items:selectedItems
            }
        }).then(response =>{
            setPoints(response.data)
        })
        
    },[selectedItems])

    function handleNavigateToDetail(id: number) {
        navigation.navigate('Detail', { point_id: id });
    }
    
    function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.findIndex(item => item === id);
        
        if (alreadySelected >= 0) {
          const filteredItems = selectedItems.filter(item => item !== id);
          setSelectedItems(filteredItems);
        } else {
          setSelectedItems([ ...selectedItems, id ]);
        }
    }

    return (      
        <SafeAreaView style={styles.container}>
            <StatusBarTop 
                title={'Ponto de Coleta Voluntária'} 
                activeIconBack={true} 
                activeIconAbout={false}
            />

            <View style={styles.filterContainer}>
                <Text style={styles.title}>
                    Selecione o Ecoponto para mais informações!
                </Text>
                
                <View style={styles.itemsFilter}>
                    <ScrollView 
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                    >
                    {items.map(item =>(
                            <TouchableOpacity
                                key={String(item.id)}
                                activeOpacity={0.6}
                                style={[
                                    styles.cardFilter,
                                    selectedItems.includes(item.id) ? styles.selectedItem : {}
                                ]}
                                onPress={()=> handleSelectItem(item.id)}
                            >
                                <Text style={styles.titleFilter}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                    ))}
                    </ScrollView>
                </View>

                { points.length > 0 && (
                    <View style={styles.footerContainer}>
                        <View style={styles.marker}>
                            <View style={styles.mapLocalization}></View> 
                            <View style={styles.mapLocalizationRegion}>
                                <Icon
                                    name="trash-2" 
                                    size={24} 
                                    color={colors.white} 
                                />    
                            </View>
                        </View>
                        <Text style={styles.legend}>
                            Clique nos pontos sinalizados por este {'\n'} 
                            ícone para saber mais detalhes.
                        </Text>
                    </View>
                )}                
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
                            key={String(0)}
                            coordinate={{ 
                                latitude:initialPositions[0],
                                longitude:initialPositions[1], 
                            }}
                            style={styles.marker}
                        />

                        {points.map((point)=>(
                            <Marker
                                key={String(point.id)}
                                coordinate={{ 
                                    latitude: point.latitude,
                                    longitude:point.longitude, 
                                }}
                                style={styles.marker} 
                                onPress={()=>handleNavigateToDetail(point.id)}
                            >
                                <View style={styles.mapLocalization}></View> 
                                <View style={styles.mapLocalizationRegion}>
                                    <Icon
                                        name="trash-2" 
                                        size={24} 
                                        color={colors.white} 
                                    />    
                                </View>
                            </Marker>
                        ))}
                    </MapView>
                ) }
            </View>

             
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,        
        backgroundColor: colors.background 
    },
    filterContainer: {
        marginLeft: 10,
        marginTop: 15
    },
    footerContainer: {
        flexDirection: 'row'
    },
    legend:{
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'left', 
        fontSize: 14,
        fontFamily: fonts.complement
    },
    title:{
       textAlign: 'left', 
       fontSize: 14,
       fontFamily: fonts.complement
    },
    mapContainer:{
        flex: 1,
        overflow: 'hidden',
        margin: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8        
    },
    map:{
        width: '100%',
        height: '100%',
        margin: 20
    },
    itemsFilter:{
        flexDirection: 'row',
    },
    cardFilter:{
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#eee',
        height: 50,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 13,
        paddingBottom: 5,
        marginRight: 8,
        marginTop:10,
        marginBottom:8,
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    selectedItem: {
        backgroundColor: '#eee',
        borderColor: colors.green,
        borderWidth: 3,
    },
    titleFilter:{
        fontSize:15,
        fontFamily:fonts.text
    },
    marker:{
        width: 60,
        height: 60,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    mapLocalizationRegion:{
        width: 32,
        height: 32,
        backgroundColor: colors.green,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapLocalization:{
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        borderRightWidth: 10,
        borderRightColor: 'transparent',
        borderTopColor:colors.green,
        borderTopWidth: 10
    }
});

