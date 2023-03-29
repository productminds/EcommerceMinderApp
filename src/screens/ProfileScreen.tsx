import {Text} from 'react-native-paper';
import {ScrollView} from 'react-native';
import React from 'react';
import {useAuth} from '../hooks/useAuth';

const ProfileScreen = (): JSX.Element => {
  const {signOut} = useAuth();

  signOut();

  return (
    <ScrollView>
      <Text>Oi</Text>
    </ScrollView>
  );
};

export default ProfileScreen;
