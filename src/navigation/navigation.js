/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding/Onboarding';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import JobDetail from '../screens/JobDetail/JobDetail';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="JobDetail" component={JobDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
