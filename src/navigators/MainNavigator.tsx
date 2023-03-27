import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigator from './HomeNavigator';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

export type MainNavigatorStackParamList = {
  HomeNavigator: undefined;
  Signin: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<MainNavigatorStackParamList>();

const MainNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeNavigator'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
