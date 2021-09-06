import React, {useState,useEffect }from 'react';
import { Alert, Image, SafeAreaView, StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import { SideBar } from '../../components/SideBar';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation, useRoute } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';
import * as Location from 'expo-location';
import api from '../../server/api';

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
                            <View style={styles.arrowDown}></View>   
                            <View style={styles.mapMarkerContainer}>
                                <Text style={styles.mapMarkerTitle}>
                                    ?
                                </Text>   
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
});

