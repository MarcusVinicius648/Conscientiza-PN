import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { DataPage } from '../pages/DataPage';
import { Home } from '../pages/Home';
import { Coleta } from '../pages/Coleta';
import { Cidadao } from '../pages/Cidadao';
import { Ecoponto } from '../pages/Ecoponto';
import { Volumosos } from '../pages/Volumosos';
import { Residencial } from '../pages/Residencial';
import { Seletiva } from '../pages/Seletiva';
import { About } from '../pages/About';
import { Detail } from '../pages/Detail';

import color from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoute: React.FC = () => (
    <stackRoutes.Navigator 
        headerMode="none" 
        screenOptions={{ 
            cardStyle: { 
                backgroundColor: color.white 
            }, 
        }}
    >
        <stackRoutes.Screen 
            name="Welcome" 
            component={Welcome} 
        />

        <stackRoutes.Screen 
            name="DataPage" 
            component={DataPage} 
        />

        <stackRoutes.Screen 
            name="Home" 
            component={Home} 
        />

        <stackRoutes.Screen 
            name="About" 
            component={About} 
        />

        <stackRoutes.Screen 
            name="Coleta" 
            component={Coleta} 
        />

        <stackRoutes.Screen 
            name="Ecoponto" 
            component={Ecoponto} 
        />

        <stackRoutes.Screen 
            name="Cidadao" 
            component={Cidadao} 
        />

        <stackRoutes.Screen 
            name="Residencial" 
            component={Residencial} 
        />

        <stackRoutes.Screen 
            name="Volumosos" 
            component={Volumosos} 
        />

        <stackRoutes.Screen 
            name="Seletiva" 
            component={Seletiva} 
        />  

        <stackRoutes.Screen 
            name="Detail" 
            component={Detail} 
        />
    </stackRoutes.Navigator>
)

export default AppRoute;