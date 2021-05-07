import React, { useState } from 'react';
import {SafeAreaView,View, StyleSheet,Text, Image, Button, TouchableOpacity,} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import logoSideBar from '../assets/logoSideBar.png';
import iconSideBar from '../assets/iconSideBar.png'

import GeneralStatusBarColor from '../components/GeneralStatusBarColor'; /*This import is useful for change the notification bar´s color */


import {Entypo} from '@expo/vector-icons';



export function SideBar(){
    
    function HandleOpen(){
        
    }
    
    
    
    
    return(
       <SafeAreaView style={styles.all}>
            <View style={styles.container}>
                
                <GeneralStatusBarColor backgroundColor= "#32B768"/>
        
                <TouchableOpacity>
                    <Entypo name="list" style={styles.icon} onPress={HandleOpen}/>
                </TouchableOpacity>

                <Text style={styles.nameBar}>
                    Home
                </Text>
            </View>
            

            <View style={styles.sideMenu}>
                
                 <Entypo name="chevron-small-left" style={styles.sideIcon} />

                <Image source={logoSideBar} style={styles.sideImg} resizeMode="contain"/>


                <Text style={styles.title}>
                    Conscientiza PN 
                </Text>

                <Text style={styles.subtitle}>
                    Opções
                </Text>

                <View style={styles.ways}>

                    <View style={styles.componentWay}>
                        <Image source={iconSideBar} resizeMode="contain"/>
                        <Text style={styles.nameWay}>Home</Text>
                    </View>

                    <View style={styles.componentWay}>
                        <Image source={iconSideBar} resizeMode="contain"/>
                        <Text style={styles.nameWay}>Ecoponto</Text>
                    </View>

                    <View style={styles.componentWay}>
                        <Image source={iconSideBar} resizeMode="contain"/>
                        <Text style={styles.nameWay}>Cidadão Fiscal</Text>
                    </View>

                    <View style={styles.componentWay}>
                        <Image source={iconSideBar} resizeMode="contain"/>
                        <Text style={styles.nameWay}>Coleta de Lixo</Text>
                    </View>


                </View>
             </View>

            
        
             
             
       </SafeAreaView>
      
    )
}

const styles = StyleSheet.create({
    
    all:{
        flex:1,
        alignItems:'center',
    },
    
    /*TopBar--------------------------------------------------- */
    container:{
        flex:1,
        position: 'absolute',
        textAlign: 'left',
        justifyContent: 'center',
        width: '100%',
        height: 56,
        marginTop: 24,
        backgroundColor: colors.green,
        paddingLeft: 19,
        paddingBottom: 24
        
        
    },

    icon:{
        position: 'absolute',
        marginHorizontal: 19,
        marginTop: -9,
        marginLeft: -10,
       
        fontSize:24,
        lineHeight: 20,
        color:colors.white,
    },

    nameBar:{
        position: 'absolute',
        marginLeft: 72,

        fontFamily: fonts.text,
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 24,
        color: colors.white

    },
     /*TopBar--------------------------------------------------- */
     sideMenu:{
       
        backgroundColor: colors.white,

        position: 'absolute',
        top:0,
        right:0,
        height: 640,
        width:280,
        marginRight: -100,
        overflow: 'hidden',
     },

     title:{
        position: 'absolute',
        textAlign: 'right',
        marginTop: 135,
        marginLeft: 16,
        
        fontSize:20,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 24
     },

     subtitle:{
        position:'absolute',
        textAlign: 'right',
        marginTop: 175,
        marginLeft: 16,

        fontSize:14,
        fontFamily: fonts.complement,
        color: colors.heading
     },

     sideImg:{
        position:'absolute',
        marginTop: 64,
        marginLeft: 16,
        height: 55,
        width: 55,

        alignContent: 'space-between'
     },

     sideIcon:{
        position: 'absolute',
        textAlign: 'right',
        marginTop: 70,
        marginLeft: '65%',

       fontSize: 34,
       color: colors.heading
     },

    /*App Ways--------------------------------------------------- */

    ways:{
        position: 'absolute',
        marginTop: 210,
        borderTopColor: colors.gray,
        borderTopWidth: 1,
        
        width: '100%',
        flexDirection: 'column'

    },

    componentWay:{
        paddingLeft: 15,
        paddingTop: 10,
        flexDirection: 'row',
        
    },

    nameWay:{
        marginLeft: 5,
        marginTop: 4,

        fontFamily: fonts.text,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.heading
    },
});