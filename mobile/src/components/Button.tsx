import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, View } from 'react-native';

import color from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}
/*Used the interface to change the content of component button */

export function Button({ title, ...rest }: ButtonProps) {
    return (       
        <View style={styles.container} {...rest}>
            <Text style={styles.text} >
                {title}
            </Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.green,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },

    text: {
        fontSize: 16,
        margin: 20,
        color: color.white,
        fontFamily: fonts.heading
    },
});
