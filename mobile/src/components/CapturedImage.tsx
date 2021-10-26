import React from 'react';
import { ImageBackground, View } from 'react-native';

import color from '../styles/colors';
import fonts from '../styles/fonts';

export function CapturedImage ({photo}: any) {
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ImageBackground
          source={{uri: photo && photo.uri}}
          style={{
            flex: 1
          }}
        />
      </View>
    )
  }