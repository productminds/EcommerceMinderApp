import {Button, Text} from 'react-native-paper';
import {ScrollView} from 'react-native';
import React from 'react';
import { useAuth } from '../hooks/useAuth';

const ProfileScreen = (): JSX.Element => {

  const {signOut} = useAuth();

  return (
    <ScrollView>
      <Text>Oi</Text>
      <Button
            // textColor={Colors.white}
            onPress={signOut}
            // style={styles.signInButton}
            mode="contained">
            Sign out
          </Button>
    </ScrollView>
  );
};

export default ProfileScreen;
