import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {TextInput, Button, TouchableRipple} from 'react-native-paper';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
// import Config from 'react-native-config';
import styles from './styles';
import {Colors} from '../../utils/constants/theme';
import {MainNavigatorStackParamList} from '../../navigators/MainNavigator';
import DefaultScreenLayout from '../../components/DefaultScreenLayout';

// import {useAuthContext} from '../../contexts/AuthContext';
// import {useAuth} from '../../hooks/useAuth';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useAuth} from '../../hooks/useAuth';

// import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type Props = NativeStackScreenProps<MainNavigatorStackParamList, 'Signin'>;

const SigninScreen = ({navigation}: Props): JSX.Element => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const {googleSignIn} = useAuth();

  // const {setUser} = useAuthContext();

  // const handleSignIn = async () => {
  //   console.log('Sign in');
  // };
  const handleSwitchToSignUp = () => {
    navigation.navigate('Signup');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password');
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '799762509157-c8t42andcmlpen4jfv5v96atussdvg37.apps.googleusercontent.com',
    });
  }, []);

  return (
    <DefaultScreenLayout>
      <View style={styles.subcontainer}>
        <View style={styles.logo} />
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
            onPress={googleSignIn}
            style={styles.signInButton}
            mode="contained">
            Sign in
          </Button>
        </View>
        <View style={styles.subcontainer}>
          <Text>Or continue with</Text>
          <TouchableRipple
            style={styles.googleContainer}
            onPress={googleSignIn}>
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
