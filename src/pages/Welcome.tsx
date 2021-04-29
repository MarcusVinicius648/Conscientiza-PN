import React from 'react';
import {SafeAreaView,View,Text,StyleSheet,Image} from 'react-native';



import colors from '../styles/colors';

export function Welcome(){
    return(
        
        <SafeAreaView style={styles.container}>
             <View style={styles.contain}>
                <Text style={styles.title}>
                    Consciêntiza PN
                </Text>
             </View>
            
             

             <Text style={styles.subtitle}> 
                Utilize {"\n"}
                nossas funcionalidades {"\n"}
                para uma Ponte Nova melhor!
            </Text>

        </SafeAreaView>
        
       
    )
}

const styles = StyleSheet.create({
    
    /*Global -------------------------------------------- */
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    contain:{
        flex:1,
        alignItems:'center',
        justifyContent: 'space-around',
        padding:20
       
    },
    /*Titles and Subtitles -------------------------------------------- */
    title:{
        lineHeight: 34,
        fontSize: 28,
        fontWeight: 'bold',
        alignContent: 'center',
        marginTop: 30,
        color: colors.heading

    },

    subtitle:{
        textAlign:'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
})