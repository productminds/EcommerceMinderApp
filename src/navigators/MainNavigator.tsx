import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNavigator, {HomeNavigatorTabParamList} from './HomeNavigator';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import {useAuthContext} from '../contexts/AuthContext';
import SplashScreen from '../screens/SplashScreen';
import {NavigatorScreenParams} from '@react-navigation/native';

export type MainNavigatorStackParamList = {
  HomeNavigator: NavigatorScreenParams<HomeNavigatorTabParamList>;
  Signin: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<MainNavigatorStackParamList>();

const MainNavigator = (): JSX.Element => {
  const {loginStatus} = useAuthContext();

  if (loginStatus === 'unknown') {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName={loginStatus === 'logged' ? 'HomeNavigator' : 'Signin'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
