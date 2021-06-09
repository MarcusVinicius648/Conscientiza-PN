import React, {useEffect,useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet,TouchableWithoutFeedback,Linking } from 'react-native';

import { Feather } from '@expo/vector-icons'; 
import { SideBar } from '../components/SideBar';
import { useNavigation } from '@react-navigation/core';

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


    const navigation = useNavigation();

     async function handleimg1() {
        
        await alert("A coleta residencial é feita em domicílio e abrange os resíduos domésticos, de pequeno e médio porte, como sacos de lixo e caixas. \n\nClique no link e selecione o mês atual para obter informações sobre a coleta em seu bairro.");
        
    }

     async function handleimg2() {
        
        await alert("A coleta seletiva consiste na separação e classificação dos resíduos para a reciclagem. \n\nClique no link e selecione o mês atual para obter informações sobre a coleta em seu bairro.");
        
    }

     async function handleimg3() {
        
        await alert("A coleta de volumosos é feita em domicílio e abrange resíduos de grande porte, como camas e sofás. \n\nClique no link e selecione o mês atual para obter informações.");
        
    }

     async function handleimg4() {
        
        await alert("A coleta na zona rural abrange as zonas rurais de Ponte Nova. \n\nClique no link, selecione a seção de download e, em seguida, o mês atual para obter informações.");
        
    }

    useEffect(() => {

        async function loadUserName() {
            const user = await AsyncStorage.getItem('@conscientizaPn:userName')
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
        
                        <Feather name="help-circle" size={19} color="#52665A" style ={styles.img1} onPress={handleimg1}  />
                        <Feather name="help-circle" size={19} color="#52665A" style = {styles.img2} onPress={handleimg2} />
                        <Feather name="help-circle" size={19} color="#52665A" style = {styles.img3} onPress={handleimg3} />
                        <Feather name="help-circle" size={19} color="#52665A" style = {styles.img4}  onPress={handleimg4} />
                            
                    </View>

                    <View style={styles.main}>
                        
                        <Text style={styles.list}> </Text>

                        <Text style={styles.address}>

                            <Text style={styles.addresstwo}>Coleta Residencial {'\n'}</Text>
                            Link {"\n"}
                            
                            {"\n"}

                            <Text style={styles.addresstwo}>Coleta Seletiva {'\n'}</Text>
                            Link {"\n"}
                            
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