import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { DataPage } from '../pages/DataPage';
import { Home } from '../pages/Home';
import { Coleta } from '../pages/Coleta';
import { Ecoponto } from '../pages/EcoPonto';
import { Cidadao } from '../pages/Cidadao';


import color from '../styles/colors';


const stackRoutes = createStackNavigator();

const AppRoute: React.FC = () => (

    <stackRoutes.Navigator headerMode='none' screenOptions={{ cardStyle: { backgroundColor: color.white }, }}>

        <stackRoutes.Screen name='Welcome' component={Welcome} />
        <stackRoutes.Screen name='DataPage' component={DataPage} />
        <stackRoutes.Screen name='Home' component={Home} />
        <stackRoutes.Screen name='Coleta' component={Coleta} />
        <stackRoutes.Screen name='Ecoponto' component={Ecoponto} />
        <stackRoutes.Screen name='Cidadao' component={Cidadao} />


    </stackRoutes.Navigator>

)
export default AppRoute;