import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Colors} from '../utils/constants/theme';
import ProductsManagementProvider from '../contexts/ProductsManagementContext';

type HomeNavigatorTabParamList = {
  Home: undefined;
  Profile: undefined;
};

const BottomTab = createMaterialBottomTabNavigator<HomeNavigatorTabParamList>();

const HomeNavigator = (): JSX.Element => {
  return (
    <ProductsManagementProvider>
      <BottomTab.Navigator activeColor={Colors.primary}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: 'face-woman-profile',
          }}
        />
      </BottomTab.Navigator>
    </ProductsManagementProvider>
  );
};

export default HomeNavigator;
