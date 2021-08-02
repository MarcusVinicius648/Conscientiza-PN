import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { StatusBarTop } from '../components/StatusBarTop';

import ImgColeta from '../assets/garbage-truck.png';
import ImgPEV from '../assets/recycling.png';
import ImgCidadaoFiscal from '../assets/olho.png'
import ImgCep from '../assets/updated.png';

export function Home() {
    const [userName, setUserName] = useState<string>();
    const [userCep, setUserCep] = useState<string>();
    const [userRua, setUserRua] = useState<string>();
    const [userBairro, setUserBairro] = useState<string>();
    const [userLocalidade, setUserLocalidade] = useState<string>();
    const [userUf, setUserUf] = useState<string>();

    const navigation = useNavigation();

    useEffect(() => {
        async function loadUserName() {
            let user = await AsyncStorage.getItem('@conscientizaPn:userName');
            setUserName(user || '');            
        }

        async function loadUserCEP() {
            const userCep = await AsyncStorage.getItem('@conscientizaPn:cep');
            setUserCep(userCep || '');
        }

        async function loadUserAddres() {
            const rua = await AsyncStorage.getItem('@conscientizaPn:rua');
            setUserRua(rua || '');

            const bairro = await AsyncStorage.getItem('@conscientizaPn:bairro');
            setUserBairro(bairro || '');

            const localidade = await AsyncStorage.getItem('@conscientizaPn:localidade');
            setUserLocalidade(localidade || '');

            const uf = await AsyncStorage.getItem('@conscientizaPn:uf');
            setUserUf(uf || '');
        }        

        loadUserAddres();
        loadUserName();
        loadUserCEP(); 
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.green_dark}/>  

            <StatusBarTop 
                title={'Conscientiza PN'} 
                activeIconBack={false} 
                activeIconAbout={true}
            />

            <View style={styles.header}>
                <Text style={styles.meeting}>
                    Bem vindo(a),
                </Text>
                <Text style={styles.userName}>
                    {userName}!
                </Text>
            </View>

            <View style={styles.main}>
                <Text style={styles.cep}>CEP: {userCep}</Text>

                <Text style={styles.address}>
                    {userRua} {"\n"}
                    Bairro: {userBairro} {"\n"}
                    {userLocalidade} - {userUf}
                </Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity 
                    activeOpacity={0.5} 
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('Coleta', {cep: userCep, bairro: userBairro})}
                >
                    <Image 
                        source={ImgColeta} 
                        style={styles.menuItemImage}
                    />
                    <Text style={styles.menuItemText}>
                        Coletas
                    </Text>
                </TouchableOpacity> 

                <TouchableOpacity 
                    activeOpacity={0.5} 
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('Ecoponto', {cep: userCep, bairro: userBairro})}
                >
                    <Image 
                        source={ImgPEV} 
                        style={styles.menuItemImage}
                    />
                    <Text style={styles.menuItemText}>
                        PEV
                    </Text>
                </TouchableOpacity> 

                <TouchableOpacity activeOpacity={0.5} style={styles.menuItem}>
                    <Image 
                        source={ImgCidadaoFiscal} 
                        style={styles.menuItemImage}
                    />
                    <Text style={styles.menuItemText}>
                        Cidadão {'\n'} 
                        Fiscal
                    </Text>
                </TouchableOpacity> 

                <TouchableOpacity 
                    activeOpacity={0.5} 
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('DataPage')}
                >
                    <Image 
                        source={ImgCep} 
                        style={styles.menuItemImage}
                    />
                    <Text style={styles.menuItemText}>
                        Atualizar {'\n'} 
                        CEP
                    </Text>
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
    //Header ------------------------------------------------------------
    header: {
        flex: 1,
        marginLeft: 27,
        marginTop: 20,
        //height: '10%',
        //backgroundColor: colors.red
    },
    meeting: {
        fontSize: 20,
        fontFamily: fonts.heading,
        lineHeight: 24,
        color: colors.heading,
    },
    userName: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
    },
    //Address------------------------------------------------------------
    main: {
        flex: 3,
        //marginBottom: 130,
        //marginTop: -40,
        marginLeft: 27,
        //height: '60%'
        //backgroundColor: colors.red
    },
    cep: {
        marginBottom: 25,
        marginTop: 25,
        fontSize: 20,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    address: {  
        //lineHeight: 44,
        fontSize: 18,
        fontFamily: fonts.heading,
        color: colors.heading
    },
    //New address------------------------------------------------------------
    footer: {
        //marginBottom: 50,
        //marginLeft: 86,
        flex: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        //width: 189,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: colors.gray
    },
    menuItem: {
        backgroundColor: colors.gray_light,
        height: 125,
        width: 125,
        margin: '1%',
        alignItems: 'center',
        justifyContent: 'center',        
        borderRadius: 16
    },
    menuItemText: {
        fontSize: 14,
        margin: 6,
        color: '#7E7E7E',
        fontFamily: fonts.heading,
        //textTransform: 'uppercase',
        lineHeight: 16,
        textAlign: 'center'
    },
    menuItemImage: {
        height: 65,
        width: 65
    }
});
