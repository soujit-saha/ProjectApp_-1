import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/main/Home';
import Singup from '../screens/auth/Singup';

export default function Stack() {
  const StackNav = createStackNavigator();
  return (
    <NavigationContainer>
      <StackNav.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Singup">
        <StackNav.Screen name="Signup" component={Singup} />
        <StackNav.Screen name="Home" component={Home} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}
