import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Inicial/Welcome';
import { DataPage } from '../pages/Inicial/DataPage';
import { Home } from '../pages/Inicial/Home';
import { Coleta } from '../pages/Coleta/Coleta';
import { Cidadao } from '../pages/Cidadao/Cidadao';
import { Registro } from '../pages/Cidadao/Registro';
import { Detalhes } from '../pages/Cidadao/Detalhes';
import { Ecoponto } from '../pages/EcoPonto/Ecoponto';
import { Volumosos } from '../pages/Coleta/Volumosos';
import { Residencial } from '../pages/Coleta/Residencial';
import { Seletiva } from '../pages/Coleta/Seletiva';
import { About } from '../pages/Inicial/About';
import { Detail } from '../pages/EcoPonto/Detail';
import { Rural } from '../pages/Coleta/Rural';
import { CameraPage } from '../pages/Cidadao/CameraPage';
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
            name="Rural" 
            component={Rural} 
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
        <stackRoutes.Screen 
            name="Registro" 
            component={Registro} 
        />
        <stackRoutes.Screen 
            name="Detalhes" 
            component={Detalhes} 
        />
        <stackRoutes.Screen 
            name="CameraPage" 
            component={CameraPage} 
        />
    </stackRoutes.Navigator>
)

export default AppRoute;