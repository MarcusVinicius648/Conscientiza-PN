import { StyleSheet, Platform, StatusBar } from 'react-native';

const status_bar_height = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default StyleSheet.create({

    statusBar: {

        height: status_bar_height

    }

});