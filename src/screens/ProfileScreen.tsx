import {Text} from 'react-native-paper';
import {ScrollView} from 'react-native';
import React, {useEffect} from 'react';

import {HomeNavigatorTabParamList} from '../navigators/HomeNavigator';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';
import {CompositeScreenProps, useIsFocused} from '@react-navigation/native';
import {MainNavigatorStackParamList} from '../navigators/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useAuth} from '../hooks/useAuth';

type Props = CompositeScreenProps<
  MaterialBottomTabScreenProps<HomeNavigatorTabParamList, 'Profile'>,
  NativeStackScreenProps<MainNavigatorStackParamList>
>;

const ProfileScreen = ({navigation}: Props): JSX.Element => {
  const {signOut} = useAuth();
  const isFocused = useIsFocused();

  useEffect(() => {
    const logout = () => {
      signOut();
      navigation.navigate('Signin');
    };

    if (isFocused) {
      logout();
    }
  }, [signOut, navigation, isFocused]);

  return (
    <ScrollView>
      <Text>Oi</Text>
    </ScrollView>
  );
};

export default ProfileScreen;
