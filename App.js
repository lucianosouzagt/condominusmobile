import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StateProvider } from './src/contexts/StateContext';

import AuthStack from './src/stacks/AuthStack';

export default () => {
    return (
        <StateProvider>
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>
        </StateProvider>    
    );
}