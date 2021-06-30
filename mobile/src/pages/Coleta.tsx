import React, {useEffect,useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet,TouchableWithoutFeedback,Linking, TouchableOpacity} from 'react-native';

import { Feather } from '@expo/vector-icons'; 
import { SideBar } from '../components/SideBar';
import { useNavigation } from '@react-navigation/core';
import api from '../server/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Coleta() {
    
    const [userName, setUserName] = useState<string>();

    const [userCep, setUserCep] = useState<string>();

    const [userRua, setUserRua] = useState<string>();
    const [userBairro, setUserBairro] = useState<string>();
    const [userLocalidade, setUserLocalidade] = useState<string>();
    const [userUf, setUserUf] = useState<string>();

    const [data, setData] = useState<Data[]>([]);
    const [tipo, setTipo] = useState(0);

    interface Params {
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
    
    function getDiaSemana(dia: number){
        switch(dia){
            case 0: return 'Domingo';
            case 1: return 'Segunda-Feira';
            case 2: return 'Terça-Feira';
            case 3: return 'Quarta-Feira';
            case 4: return 'Quinta-Feira';
            case 5: return 'Sexta-Feira';
            case 6: return 'Sábado';
        }
    }
    
    useEffect(() => {
        api.get(`coletas/${userBairro}`).then(response => {
            setData(response.data);
        }); 
    }, []);

    const navigation = useNavigation();

        function handleResidencial() {
        
            navigation.navigate('Residencial') 

        }

        function handleSeletiva() {

            navigation.navigate('Seletiva') 

        }

        function handleVolumosos() {
            
            navigation.navigate('Volumosos') 

        }

        useEffect(() => {

            async function loadUserName() {
                let user = await AsyncStorage.getItem('@conscientizaPn:userName')
                setUserName(user || '')
                
            }
    
            async function loadUserCEP() {
                const userCep = await AsyncStorage.getItem('@conscientizaPn:cep')
                setUserCep(userCep || '')
            }
    
            async function loadUserAddres() {
                const rua = await AsyncStorage.getItem('@conscientizaPn:rua')
                setUserRua(rua || '')
    
                const bairro = await AsyncStorage.getItem('@conscientizaPn:bairro')
                setUserBairro(bairro || '')
    
                const localidade = await AsyncStorage.getItem('@conscientizaPn:localidade')
                setUserLocalidade(localidade || '')
    
                const uf = await AsyncStorage.getItem('@conscientizaPn:uf')
                setUserUf(uf || '')
    
            }
            
    
            loadUserAddres();
            loadUserName();
            loadUserCEP();
            
            
        }, []);

    return (


        <SafeAreaView>

            <View style={styles.container}>

                <SideBar title={"Coleta de Lixo"}/>

                    <View style={styles.header}>
                        
                        <Text style={styles.cep}> CEP: {userCep} {"\n"}  </Text>
                        
                    </View>
                    
                    <View style={styles.header}>

                        <Text style={styles.bairro}>{userBairro} </Text>

                        
                        <View style = {styles.header2}>
                        
                            <TouchableOpacity 
                                style={styles.buttom}
                                activeOpacity={0.7}
                                onPress={handleResidencial}
                            >
                            <Text style = {styles.text}>
                                ?
                            </Text>

                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.buttom}
                                activeOpacity={0.7}
                                onPress={handleResidencial}
                            >
                            <Text style = {styles.text}>
                                ?
                            </Text>

                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.buttom}
                                activeOpacity={0.7}
                                onPress={handleSeletiva}
                            >
                            <Text style = {styles.text}>
                                ?
                            </Text>

                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.buttom}
                                activeOpacity={0.7}
                                onPress={handleVolumosos}
                            >
                            <Text style = {styles.text}>
                                ?
                            </Text>

                            </TouchableOpacity>

                       </View>

                    </View>

                    <View style={styles.main}>
                        
                        <Text style={styles.list}> </Text>

                        <Text style={styles.address}>

                            <Text style={styles.addresstwo}>Coleta Residencial {'\n'}</Text>
                            {data.filter(coleta => coleta.tipo == 1).map(coleta => (
                                <View key={String(coleta.codigo)}>
                                    <Text style = {styles.addresstwo}>                        
                                        {getDiaSemana(coleta.dia_semana)} - {coleta.periodo} - {coleta.horario} horas
                                    </Text>                    
                                </View>
                            ))}
                            
                            {"\n"}

                            <Text style={styles.addresstwo}>Coleta Seletiva {'\n'}</Text>
                            {data.filter(coleta => coleta.tipo == 2).map(coleta => (
                                <View key={String(coleta.codigo)}>
                                    {coleta.tipo == 2 && (
                                        <Text style = {styles.addresstwo}>                        
                                            {getDiaSemana(coleta.dia_semana)} - {coleta.periodo} - {coleta.horario} horas
                                        </Text>
                                    )}                    
                                </View>
                            ))}
                            {"\n"}

                            <Text style={styles.addresstwo}>Coleta Volumosos {'\n'}</Text>
                                <Text style={styles.link} onPress={()=>{Linking.openURL('https://abre.ai/volumosos');}} > 
                                    Link para a coleta de volumosos!{'\n'}
                                </Text> 

                            {"\n"}

                            <Text style={styles.addresstwo}>Coleta Zona Rural {'\n'}</Text>
                                <Text style={styles.link} onPress={()=>{Linking.openURL( 'https://abre.ai/zonarural');}}> 
                                    Link para a coleta na zona rural!{"\n"}
                                </Text>

                        </Text>

                </View>

            
             
            </View>

        </SafeAreaView>

    )

    

}

const styles = StyleSheet.create({

    buttom: {
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        height: 19,
        width: 19,
        borderRadius: 16,
        marginBottom: 27,
        borderWidth: 1,
        borderColor: colors.heading,

        
    },

    header2: {
        position: 'absolute',
        flex: 1,
        marginLeft: 255,
        marginTop: 255,
        flexDirection: 'column',
    },

    buttonIcon: {
        color: colors.white,
        fontSize: 23,
        fontWeight: 'bold'
    },

    text:{
        color: colors.heading,
        fontSize:12,

    },

    container:{

        flex: 1,
        width: '100%',
    
    },

    img1: {
        
        marginLeft: 250, 
        marginTop: -45,
    
    },

    img2: {
    
        width:20,
        height:20,
        marginLeft: 250, 
        marginTop: 25,
    
    },

    img3: {
    
        width:20,
        height:20,
        marginLeft: 250, 
        marginTop: 29,
    
    },

    img4: {
    
        width:20,
        height:20,
        marginLeft: 250, 
        marginTop: 25,
    
    },


    address:{
    
        lineHeight:15,
        fontSize:14,
        fontFamily: fonts.text,
        color: colors.heading,
        
    },

    addresstwo:{
    
        lineHeight:15,
        fontSize:14,
        fontFamily: fonts.heading,
        color: colors.heading,

    },
    
    header:{
        
        flex: 1,
        marginLeft: 37, 
        
    },

    main:{
        
        flex:1,
        marginBottom:130,
        marginTop:-40,
        marginLeft: 37, 
    
    },

    bairro:{

        marginTop: 100,
        fontSize: 20,
        fontFamily: fonts.heading,
        lineHeight: 200,     
        color: colors.heading,
       marginLeft:-30,
        textAlign: 'center',

    },

    cep:{
        
        marginTop: 35,
        fontSize: 20,
        fontFamily: fonts.heading,
        lineHeight: 200,     
        color: colors.heading,

    },

    list:{

        marginBottom:34,
        marginTop: 35,
        fontSize: 20,
        fontFamily: fonts.heading,
        lineHeight: 230,
        color: colors.heading,

    },
    link:{
        color:colors.green,
        
    },
    
    
});