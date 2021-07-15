import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login';
import Home from '../Screens/Home/';
import Profile from '../Screens/Profile';

const Stack = createStackNavigator();

const Navigator = (props) => {

    return (
        <NavigationContainer initialRoutName={'Login'} >
            <Stack.Navigator>
                <Stack.Screen 
                name='Login' 
                component={Login} 
                options={{headerTitle:'Login screen'}} 
                />
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default Navigator;