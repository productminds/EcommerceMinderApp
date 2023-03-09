import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigator from './HomeNavigator';
import SigninScreen from '../screens/SigninScreen';

type MainNavigatorStackParamList = {
  Main: undefined;
  Signin: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<MainNavigatorStackParamList>();

const MainNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={'Main'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={HomeNavigator} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SigninScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
