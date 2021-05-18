import React, { useState } from 'react';
import {SafeAreaView,View, StyleSheet,Text, Image, Button, TouchableOpacity,} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import logoSideBar from '../assets/logoSideBar.png';
import iconSideBar from '../assets/iconSideBar.png';
import iconSideBarSelected from '../assets/iconSideBarSelected.png';

import GeneralStatusBarColor from '../components/GeneralStatusBarColor'; /*This import is useful for change the notification bar´s color */


import {Entypo} from '@expo/vector-icons';



export function SideBar(){
    
    //This function gonna make the side´s bar appear and desappear
    const [sideBar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sideBar)

    //this function goona make the color of selected route
    const[selectedHomeRoutes, setSelectedHomeRoutes] = useState(false)
    const[selectedEcoPontoRoutes, setSelectedEcoPontoRoutes] = useState(false)
    const[selectedFiscalRoutes, setSelectedFiscalRoutes] = useState(false)
    const[selectedColetaRoutes, setSelectedColetaRoutes] = useState(false)

    // all of this Ifs is for only select one for time

    const selectHome = () => {
        if(selectedHomeRoutes == true){
            setSelectedHomeRoutes(!selectedHomeRoutes)
        }
        if(selectedHomeRoutes== false){
            if(selectedEcoPontoRoutes == false && selectedFiscalRoutes == false && selectedColetaRoutes ==false ){
                setSelectedHomeRoutes(!selectedHomeRoutes)
            }

        }
    }

    const selectEcoPonto = () => {
        if(selectedEcoPontoRoutes == true){
            setSelectedEcoPontoRoutes(!selectedEcoPontoRoutes)
        }
        if(selectedEcoPontoRoutes== false){
            if(selectedHomeRoutes == false && selectedFiscalRoutes == false && selectedColetaRoutes ==false ){
                setSelectedEcoPontoRoutes(!selectedEcoPontoRoutes)
            }
        }
    }

    const selectFiscal = () => {
        if(selectedFiscalRoutes == true){
            setSelectedFiscalRoutes(!selectedFiscalRoutes)
        }
        if(selectedFiscalRoutes== false){
            if(selectedHomeRoutes == false && selectedEcoPontoRoutes == false && selectedColetaRoutes ==false ){
                setSelectedFiscalRoutes(!selectedFiscalRoutes)
            }
        }
    }
    
    const selectColeta = () => {
        if(selectedColetaRoutes == true){
            setSelectedColetaRoutes(!selectedColetaRoutes)
        }
        if(selectedColetaRoutes== false){
            if(selectedHomeRoutes == false && selectedEcoPontoRoutes == false && selectedFiscalRoutes ==false ){
                setSelectedColetaRoutes(!selectedColetaRoutes)
            }
        }
    }

    
    
    return(
       <SafeAreaView style={styles.all}>
            <View style={styles.container}>
                
                <GeneralStatusBarColor backgroundColor= "#32B768"/>
        
                <TouchableOpacity>
                   <Text>
                    <Entypo name="list" style={styles.icon} onPress={showSideBar}/>
                   </Text>
                </TouchableOpacity>

                <Text style={styles.nameBar}>
                    Home
                </Text>
            </View>
            
{/*Start the Side´s bar part --------------------------------------------*/}
            
            <View style={sideBar ? styles.activeSideMenu : styles.sideMenu} >
                
                <Text style={styles.positionIcon}>
                 <Entypo name="chevron-small-left" style={styles.sideIcon} onPress={showSideBar}/>
                </Text>
                 
                <Image source={logoSideBar} style={styles.sideImg} resizeMode="contain"/>


                <Text style={styles.title}>
                    Conscientiza PN 
                </Text>

                <Text style={styles.subtitle}>
                    Opções
                </Text>

{/*Side´s bar routes --------------------------------------------------- */}

                <View style={styles.ways}>

                    <View style={selectedHomeRoutes ? styles.activeComponentWay : styles.componentWay } >
                        <Image source={selectedHomeRoutes ? iconSideBarSelected : iconSideBar} resizeMode="contain"/>
                        <Text style={selectedHomeRoutes ? styles.activeNameWay : styles.nameWay} onPress={selectHome}>Home</Text>
                    </View>

                    <View  style={selectedEcoPontoRoutes ? styles.activeComponentWay : styles.componentWay }>
                        <Image source={selectedEcoPontoRoutes ? iconSideBarSelected : iconSideBar} resizeMode="contain"/>
                        <Text style={selectedEcoPontoRoutes ? styles.activeNameWay : styles.nameWay} onPress={selectEcoPonto}>Ecoponto</Text>
                    </View>

                    <View  style={selectedFiscalRoutes ? styles.activeComponentWay : styles.componentWay }>
                        <Image source={selectedFiscalRoutes ? iconSideBarSelected : iconSideBar} resizeMode="contain"/>
                        <Text style={selectedFiscalRoutes ? styles.activeNameWay : styles.nameWay} onPress={selectFiscal}>Cidadão Fiscal</Text>
                    </View>

                    <View  style={selectedColetaRoutes ? styles.activeComponentWay : styles.componentWay }>
                        <Image source={selectedColetaRoutes ? iconSideBarSelected : iconSideBar} resizeMode="contain"/>
                        <Text style={selectedColetaRoutes ? styles.activeNameWay : styles.nameWay} onPress={selectColeta}>Coleta de Lixo</Text>
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
     /*SideBar--------------------------------------------------- */
     sideMenu:{
       
        backgroundColor: colors.white,

        position: 'absolute',
        top:0,
        right:0,
        height: 640,
        width:0,
        marginRight: -100,
        overflow: 'hidden', //Aqui téra que haver algo que deixe a barra invisivel
     },

     activeSideMenu:{
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

     positionIcon:{
        position: 'absolute',
        textAlign: 'right',
        marginTop: 70,
        marginLeft: '65%',
     },

     sideIcon:{
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
        paddingTop: 13,
        paddingBottom: 5,
        flexDirection: 'row',
        
    },

    activeComponentWay:{
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 5,
        flexDirection: 'row',

        backgroundColor: colors.backgroundSelected
    },

    nameWay:{
        marginLeft: 5,
        marginTop: 4,

        fontFamily: fonts.text,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.heading
    },

    activeNameWay:{
        marginLeft: 5,
        marginTop: 4,

        fontFamily: fonts.text,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.green
    },
});