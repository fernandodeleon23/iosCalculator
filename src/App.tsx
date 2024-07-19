/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
*/

import React from 'react';
import {
    StatusBar,
    Text,
    View,
} from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { style } from './config/theme/app-theme';


function App() {

    return (
        <View style={ style.backgound }>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'black'}
            />
            
            <CalculatorScreen></CalculatorScreen>
        </View>
    );
}

export default App;
