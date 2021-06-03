import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image, Button, TouchableOpacity, TouchableOpacityProps, } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import logoSideBar from '../assets/logoSideBar.png';
import iconSideBar from '../assets/iconSideBar.png';
import iconSideBarSelected from '../assets/iconSideBarSelected.png';

import GeneralStatusBarColor from '../components/GeneralStatusBarColor'; /*This import is useful for change the notification bar´s color */

import { useNavigation } from '@react-navigation/core'
import { Coleta } from '../pages/Coleta';
import { Entypo } from '@expo/vector-icons';

interface SideBarProps extends TouchableOpacityProps {
    title: string
}

export function SideBar({ title, ...rest }: SideBarProps) {

    const navigation = useNavigation();
    
    function handleColeta(){
        navigation.navigate('Coleta')
    }

    function handleHome(){
        navigation.navigate('Home')
    }
    
    function handleEcoponto(){
        navigation.navigate('Ecoponto')
    }

    function handleCidadao(){
        navigation.navigate('Cidadao')
    }

    //This function gonna make the side´s bar appear and desappear
    const [sideBar, setSideBar] = useState(false)
    const showSideBar = () => setSideBar(!sideBar)




    //this function goona make the color of selected route
    const [selectedHomeRoutes, setSelectedHomeRoutes] = useState(true ? title == "Home" : false)
    const [selectedEcoPontoRoutes, setSelectedEcoPontoRoutes] = useState(true ? title == "EcoPonto" : false)
    const [selectedFiscalRoutes, setSelectedFiscalRoutes] = useState(true ? title == "Cidadão Fiscal" : false)
    const [selectedColetaRoutes, setSelectedColetaRoutes] = useState(true ? title == "Coleta de Lixo" : false)


    // all of this Ifs is for only select one for time
    const selectHome = () => {
        if (selectedHomeRoutes == false) {
            setSelectedHomeRoutes(!selectedHomeRoutes)

            if (selectedEcoPontoRoutes == true) {
                setSelectedEcoPontoRoutes(!selectedEcoPontoRoutes)
            }
            if (selectedFiscalRoutes == true) {
                setSelectedFiscalRoutes(!selectedFiscalRoutes)
            }
            if (selectedColetaRoutes == true) {
                setSelectedColetaRoutes(!selectedColetaRoutes)
            }
        }
    }

    const selectEcoPonto = () => {
        if (selectedEcoPontoRoutes == false) {
            setSelectedEcoPontoRoutes(!selectedEcoPontoRoutes)

            if (selectedHomeRoutes == true) {
                setSelectedHomeRoutes(!selectedHomeRoutes)
            }
            if (selectedFiscalRoutes == true) {
                setSelectedFiscalRoutes(!selectedFiscalRoutes)
            }
            if (selectedColetaRoutes == true) {
                setSelectedColetaRoutes(!selectedColetaRoutes)
            }
        }
    }

    const selectFiscal = () => {
        if (selectedFiscalRoutes == false) {
            setSelectedFiscalRoutes(!selectedFiscalRoutes)

            if (selectedEcoPontoRoutes == true) {
                setSelectedEcoPontoRoutes(!selectedEcoPontoRoutes)
            }
            if (selectedHomeRoutes == true) {
                setSelectedHomeRoutes(!selectedHomeRoutes)
            }
            if (selectedColetaRoutes == true) {
                setSelectedColetaRoutes(!selectedColetaRoutes)
            }
        }
    }

    const selectColeta = () => {
        if (selectedColetaRoutes == false) {
            setSelectedColetaRoutes(!selectedColetaRoutes)

            if (selectedEcoPontoRoutes == true) {
                setSelectedEcoPontoRoutes(!selectedEcoPontoRoutes)
            }
            if (selectedFiscalRoutes == true) {
                setSelectedFiscalRoutes(!selectedFiscalRoutes)
            }
            if (selectedHomeRoutes == true) {
                setSelectedHomeRoutes(!selectedHomeRoutes)
            }
        }
    }



    return (
        <SafeAreaView style={styles.all}>
            <View style={styles.container}>

                <GeneralStatusBarColor backgroundColor="#32B768" />

                <TouchableOpacity>
                    <Text>
                        <Entypo name="list" style={styles.icon} onPress={showSideBar} />
                    </Text>
                </TouchableOpacity>

                <Text style={styles.nameBar}>
                    {title}
                </Text>
            </View>

            {/*Start the Side´s bar part --------------------------------------------*/}

            <View style={sideBar ? styles.activeSideMenu : styles.sideMenu} >

                <Text style={styles.positionIcon}>
                    <Entypo name="chevron-small-left" style={styles.sideIcon} onPress={showSideBar} />
                </Text>

                <Image source={logoSideBar} style={styles.sideImg} resizeMode="contain" />


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
                        <Text style={selectedHomeRoutes ? styles.activeNameWay : styles.nameWay} onPress={selectHome}></Text>
                        <Text style={selectedHomeRoutes ? styles.activeNameWay : styles.nameWay} onPress={handleHome}>Home</Text>
                </View>

                    <View style={selectedEcoPontoRoutes ? styles.activeComponentWay : styles.componentWay}>
                        <Image source={selectedEcoPontoRoutes ? iconSideBarSelected : iconSideBar} resizeMode="contain" />
                        <Text style={selectedEcoPontoRoutes ? styles.activeNameWay : styles.nameWay} onPress={selectEcoPonto}></Text>
                        <Text style={selectedEcoPontoRoutes ? styles.activeNameWay : styles.nameWay} onPress={handleEcoponto}>Ecoponto</Text>
                    </View>

                    <View style={selectedFiscalRoutes ? styles.activeComponentWay : styles.componentWay}>
                        <Image source={selectedFiscalRoutes ? iconSideBarSelected : iconSideBar} resizeMode="contain" />
                        <Text style={selectedFiscalRoutes ? styles.activeNameWay : styles.nameWay} onPress={selectFiscal}></Text>
                        <Text style={selectedFiscalRoutes ? styles.activeNameWay : styles.nameWay} onPress={handleCidadao}>Cidadão Fiscal</Text>
                    </View>

                    <View  style={selectedColetaRoutes ? styles.activeComponentWay : styles.componentWay }>
                        <Image source={selectedColetaRoutes ? iconSideBarSelected : iconSideBar} resizeMode="contain"/>
                        <Text style={selectedColetaRoutes ? styles.activeNameWay : styles.nameWay} onPress={selectColeta}></Text>
                        <Text style={selectedColetaRoutes ? styles.activeNameWay : styles.nameWay} onPress={handleColeta}>Coleta de Lixo</Text>
                    </View>


                </View>
            </View>





        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    all: {
        flex: 1,
        alignItems: 'center',
    },

    /*TopBar--------------------------------------------------- */
    container: {
        flex: 1,
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

    icon: {
        position: 'absolute',
        marginHorizontal: 19,
        marginTop: -9,
        marginLeft: -10,

        fontSize: 24,
        lineHeight: 20,
        color: colors.white,
    },

    nameBar: {
        position: 'absolute',
        marginLeft: 72,

        fontFamily: fonts.text,
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 24,
        color: colors.white

    },
    /*SideBar--------------------------------------------------- */
    sideMenu: {

        backgroundColor: colors.white,

        position: 'absolute',
        top: 0,
        right: 0,
        height: 640,
        width: 0,
        marginRight: 85,
        overflow: 'hidden', //Aqui téra que haver algo que deixe a barra invisivel
    },

    activeSideMenu: {
        backgroundColor: colors.white,

        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 10,
        height: 640,
        width: 280,
        marginRight: 85,
        overflow: 'hidden',
    },

    title: {
        position: 'absolute',
        textAlign: 'right',
        marginTop: 135,
        marginLeft: 16,

        fontSize: 20,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 24
    },

    subtitle: {
        position: 'absolute',
        textAlign: 'right',
        marginTop: 175,
        marginLeft: 16,

        fontSize: 14,
        fontFamily: fonts.complement,
        color: colors.heading
    },

    sideImg: {
        position: 'absolute',
        marginTop: 64,
        marginLeft: 16,
        height: 55,
        width: 55,

        alignContent: 'space-between'
    },

    positionIcon: {
        position: 'absolute',
        textAlign: 'right',
        marginTop: 70,
        marginLeft: '65%',
    },

    sideIcon: {
        fontSize: 34,
        color: colors.heading
    },

    /*App Ways--------------------------------------------------- */

    ways: {
        position: 'absolute',
        marginTop: 210,
        borderTopColor: colors.gray,
        borderTopWidth: 1,

        width: '100%',
        flexDirection: 'column'

    },

    componentWay: {
        paddingLeft: 15,
        paddingTop: 13,
        paddingBottom: 5,
        flexDirection: 'row',

    },

    activeComponentWay: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 5,
        flexDirection: 'row',

        backgroundColor: colors.backgroundSelected
    },

    nameWay: {
        marginLeft: 5,
        marginTop: 4,

        fontFamily: fonts.text,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.heading
    },

    activeNameWay: {
        marginLeft: 5,
        marginTop: 4,

        fontFamily: fonts.text,
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.green
    },
});