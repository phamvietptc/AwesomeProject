import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements/dist/icons/Icon";
import Login from "./login";
import Login1 from "./login1";
import Home from "./home";
import Profile from "./profile";
import Setting from "./setting";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => (<Icon size={24} color="blue" name="home" />)}} />
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => (<Icon size={24} color="blue" name="user" />)}} />
        <Tab.Screen name="Setting" component={Setting} options={{tabBarIcon: () => (<Icon size={24} color="blue" name="setting" />)}} />
      </Tab.Navigator>
    );
  }

export default RootComponent = function() {
    return(  
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Login1" component={Login1} />
                <Stack.Screen name="HomeTabs" component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}