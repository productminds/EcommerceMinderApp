import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Feather';

type HomeNavigatorTabParamList = {
  Home: undefined;
  Profile: undefined;
};

const BottomTab = createMaterialBottomTabNavigator<HomeNavigatorTabParamList>();

const generateHomeIcon = ({color}: {color: string}) => (
  <Icon name="home" color={color} size={26} />
);

const generateProfileIcon = ({color}: {color: string}) => (
  <Icon name="user" color={color} size={26} />
);

const HomeNavigator = (): JSX.Element => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: generateHomeIcon,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: generateProfileIcon,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default HomeNavigator;
