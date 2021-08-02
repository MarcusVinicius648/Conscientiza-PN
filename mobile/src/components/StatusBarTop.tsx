import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
    title: string;
    activeIconBack: boolean;
    activeIconAbout: boolean;
}
/*Used the interface to change the content of component button */

export function StatusBarTop({ title, activeIconBack, activeIconAbout, ...rest }: Params) {
    const navigation = useNavigation();

    return (       
        <View style={styles.container}>
            <View style={styles.iconBack}>
                { activeIconBack && 
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon 
                            name="arrow-left" 
                            size={20} 
                            color={colors.white}
                        />
                    </TouchableOpacity>  
                }                               
            </View>

            <View style={styles.titleRegion}>
                <Text style={styles.text}> {title} </Text>
            </View> 

            <View style={styles.iconHelp}>
                { activeIconAbout && 
                    <TouchableOpacity onPress={() => navigation.navigate('About')}>
                        <Icon 
                            name="help-circle" 
                            size={28} 
                            color={colors.white} 
                        />
                    </TouchableOpacity>  
                } 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.green,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    iconBack: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: 60
    },
    titleRegion: {
        height: 46,
        marginRight:300
    },
    iconHelp: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: 60
    },
    text: {
        position: 'absolute',
        paddingRight:80,
        marginTop: 16,
        fontFamily: fonts.text,
        //fontWeight: '500',
        fontSize: 20,
        color: colors.white
    },
});