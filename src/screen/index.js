import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./login";
import Login1 from "./login1";
import Home from "./home";
import Setting from "./setting";

const Stack = createNativeStackNavigator();


export default RootComponent = function() {
    return(  
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Login1" component={Login1} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Setting" component={Setting} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}