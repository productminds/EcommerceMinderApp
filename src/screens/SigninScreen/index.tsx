import React from 'react';
import {Text, View, Image} from 'react-native';
import {TextInput, Button, TouchableRipple, Avatar} from 'react-native-paper';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './styles';
import {Colors} from '../../utils/constants/theme';
import {MainNavigatorStackParamList} from '../../navigators/MainNavigator';
import DefaultScreenLayout from '../../components/DefaultScreenLayout';

import {useAuth} from '../../hooks/useAuth';
import useBraze from '../../hooks/useBraze';
import {useAmplitude} from '../../hooks/useAmplitude';

type Props = NativeStackScreenProps<MainNavigatorStackParamList, 'Signin'>;

const SigninScreen = ({navigation}: Props): JSX.Element => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const {setBrazeUser} = useBraze();
  const {setAmplitudeUser} = useAmplitude();
  const {googleSignIn, signIn} = useAuth();

  const handleSwitchToSignUp = () => {
    navigation.navigate('Signup');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password');
  };

  const handleSignIn = async () => {
    const user = await signIn(email, password);
    setBrazeUser(user);
    setAmplitudeUser(user, 'Email/Password');
    navigation.navigate('HomeNavigator', {screen: 'Home'});
  };

  const handleGoogleSignIn = async () => {
    const user = await googleSignIn();
    setBrazeUser(user);
    setAmplitudeUser(user, 'Google');
    navigation.navigate('HomeNavigator', {screen: 'Home'});
  };

  return (
    <DefaultScreenLayout>
      <View style={styles.subcontainer}>
        <Avatar.Image style={styles.logo} size={100} source={require("../../utils/assets/icons/icon.png")}/>
        <Text style={styles.title}>Welcome back</Text>
      </View>
      <View style={styles.subcontainer}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={e => setEmail(e)}
          style={styles.input}
          outlineStyle={styles.borderInput}
          selectionColor={Colors.primary}
          activeOutlineColor={Colors.primary}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={p => setPassword(p)}
          secureTextEntry
          right={<TextInput.Icon icon="eye" iconColor={Colors.primary} />}
          style={styles.input}
          outlineStyle={styles.borderInput}
          activeOutlineColor={Colors.primary}
          selectionColor={Colors.primary}
        />
        <TouchableRipple
          style={styles.forgotPassword}
          onPress={handleForgotPassword}>
          <Text style={styles.primaryColorText}>Forgot Password</Text>
        </TouchableRipple>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.buttonContainer}>
          <Button
            textColor={Colors.white}
            onPress={handleSignIn}
            style={styles.signInButton}
            mode="contained">
            Sign in
          </Button>
        </View>
        <View style={styles.subcontainer}>
          <Text>Or continue with</Text>
          <TouchableRipple
            style={styles.googleContainer}
            onPress={handleGoogleSignIn}>
            <Image
              source={require('../../utils/assets/icons/google.png')}
              style={styles.googleLogo}
            />
          </TouchableRipple>
        </View>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.subcontainerHorizontal}>
          <Text>Don't have an account?</Text>
          <TouchableRipple onPress={handleSwitchToSignUp}>
            <Text style={styles.primaryColorText}>Sign up here</Text>
          </TouchableRipple>
        </View>
      </View>
    </DefaultScreenLayout>
  );
};

export default SigninScreen;
