import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNavigatorParams} from '../utils/navigation';

type MainNavigatorStackParamList = {
  Home: undefined;
  Signin: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<MainNavigatorStackParamList>();

const MainNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        {...createNavigatorParams<MainNavigatorStackParamList>('Home')}
      />
      <Stack.Screen
        {...createNavigatorParams<MainNavigatorStackParamList>('Signin')}
      />
      <Stack.Screen
        {...createNavigatorParams<MainNavigatorStackParamList>('Signup')}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
