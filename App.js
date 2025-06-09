import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false}}/>
      <Stack.Screen name='SignUp' component={SignupScreen} options={{ headerShown: false}}/>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name='Details' component={DetailsScreen} options={{ headerShown: false}}/>
        <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}