import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';

import { SideBar } from '../components/SideBar';

export function Ecoponto() {  
    return (      
        <SafeAreaView style={styles.container}>
            <SideBar title={"Ponto de Coleta Voluntária"}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',    
    },
});

