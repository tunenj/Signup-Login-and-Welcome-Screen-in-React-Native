import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import SignupScreen from './src/screen/SignupScreen';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false, // This hides the header for all screens
        }}
      >
        <RootStack.Screen name={"HOME"} component={HomeScreen} />
        <RootStack.Screen name={"LOGIN"} component={LoginScreen} />
        <RootStack.Screen name={"SIGNUP"} component={SignupScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
