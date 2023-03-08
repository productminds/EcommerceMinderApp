import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNavigatorParams} from '../utils/navigation';

type HomeNavigatorTabParamList = {
  Home: undefined;
  Profile: undefined;
};

const BottomTab = createBottomTabNavigator<HomeNavigatorTabParamList>();

const HomeNavigator = (): JSX.Element => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        {...createNavigatorParams<HomeNavigatorTabParamList>('Home')}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        {...createNavigatorParams<HomeNavigatorTabParamList>('Profile')}
      />
    </BottomTab.Navigator>
  );
};

export default HomeNavigator;
