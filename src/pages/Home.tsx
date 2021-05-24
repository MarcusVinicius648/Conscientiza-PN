import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {SideBar} from '../components/SideBar';
import {Button} from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home(){
    const[userName, setUserName] = useState<string>();
    const[userCep,setUserCep] = useState<string>();
    
    useEffect(() => {

        async function loadUserName() {
            const user = await AsyncStorage.getItem('@conscientizaPn:userName')
            setUserName(user || '')
        }

        async function loadUserCEP() {
            const userCep = await AsyncStorage.getItem('@conscientizaPn:cep')
            setUserCep(userCep || '')
        }

        loadUserName();
        loadUserCEP();
    },[]);

    return(
        <SafeAreaView style={styles.container}>
            <SideBar/>

            <View style={styles.header}>
                <Text style={styles.meeting}>
                    Bem vindo(a),
                </Text>
                <Text style={styles.userName}>
                    {userName}!
                </Text>
            </View>

            <View style={styles.main}>
                <Text style={styles.cep}> CEP: {userCep}</Text>

                <Text style={styles.address}>
                    Rua João Alves de Oliveira {"\n"}
                    Bairro: Triângulo Novo {"\n"}
                    Ponte Nova - MG
                </Text>
            </View>

            <View style={styles.footer}>
                <Button title={"+  Atualizar CEP"}/>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    //Header ------------------------------------------------------------
    header:{
        flex: 1,
        marginLeft: 37, 
    },

    meeting:{
        fontSize: 20,
        fontFamily: fonts.heading,
        lineHeight: 24,
        color: colors.heading,
    },

    userName:{
        fontSize: 24,
        fontFamily: fonts.heading,
        color:colors.heading,
    },

    //Address------------------------------------------------------------
    main:{
        flex:1,
        marginBottom:130,
        marginTop:-40,
        marginLeft: 37, 
    },

    cep:{
        marginBottom:34,
        marginTop: 35,

        fontSize:18,
        fontFamily: fonts.heading,
        color: colors.heading
    },

    address:{
        lineHeight:34,
        fontSize:20,
        fontFamily: fonts.heading,
        color: colors.heading
    },

    //New address------------------------------------------------------------
    footer:{
        marginBottom: 50,
        marginLeft:86,
        flex:1,
        
        width: 189,
    },
});