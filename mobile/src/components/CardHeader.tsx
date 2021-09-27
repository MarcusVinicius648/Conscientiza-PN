import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface CardHeaderProps extends TouchableOpacityProps {
    title: string;
    page: string;
}

export function CardHeader({ title, page }: CardHeaderProps){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
            
            <View style={styles.icon}>
                <TouchableOpacity onPress={() => navigation.navigate(page)}>
                    <Icon 
                        name="help-circle" 
                        size={28} 
                        color={colors.white} 
                    />
                </TouchableOpacity> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 38,
        backgroundColor: colors.green_dark,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        justifyContent: 'center',
        marginLeft: 10
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: colors.white
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
});