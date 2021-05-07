import React from 'react';
import {View} from 'react-native'

import Routes from './src/routes';

import AppLoading from 'expo-app-loading';



import{
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from './src/styles/colors';


export default function App() {
  const [ fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  
  
  if(!fontsLoaded)
    return <AppLoading/>
  
  

  return (

      <Routes/>
  )
}



