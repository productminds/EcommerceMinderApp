import React from 'react';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import { TextInput, Button, TouchableRipple } from 'react-native-paper';
import { COLORS } from '../utils/constants/theme';
import stylesAuth from '../styles/auth.style';
import stylesContainer from '../styles/container.style';
import {MainNavigatorStackParamList} from '../navigators/MainNavigator';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<MainNavigatorStackParamList, 'Signin'>;

const SigninScreen = ({ navigation }: Props): JSX.Element => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = () => {
    console.log("Sign in")
  }

  const handleGoogleSignIn = () => {
    console.log("Google sign in")
  }

  const handleSwitchToSignUp = () => {
    // navigate to SignInScreen
    navigation.navigate("Signup")
  }

  const handleForgotPassword = () => {
    console.log("Forgot Password")
  }

  return (
    <SafeAreaView>
      <ScrollView style={stylesContainer.container}>
        <View style={stylesContainer.subcontainer}>
          <View style={stylesAuth.logo}></View>
          <Text style={stylesAuth.title}>Welcome back</Text>
        </View>
        <View  style={stylesContainer.subcontainer}>
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={stylesAuth.input}
            outlineStyle={stylesAuth.borderInput}
            selectionColor={COLORS.primary}
            activeOutlineColor={COLORS.primary}
          />
          <TextInput
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry
            right={<TextInput.Icon icon="eye" iconColor={COLORS.primary}/>}
            style={stylesAuth.input}
            outlineStyle={stylesAuth.borderInput}
            activeOutlineColor={COLORS.primary}
            selectionColor={COLORS.primary}
          />
          <TouchableRipple style={stylesAuth.forgotPassword} onPress={handleForgotPassword}>
            <Text style={stylesAuth.primaryColorText}>Forgot Password</Text>
          </TouchableRipple>
        </View>
        <View  style={stylesContainer.subcontainer}>
          <Button style={stylesAuth.signInButton} textColor={COLORS.white} onPress={handleSignIn}>
            Sign In
          </Button>
          <View style={stylesContainer.subcontainer}>
            <Text>Or continue with</Text>
            <TouchableRipple style={stylesAuth.googleContainer} onPress={handleGoogleSignIn}>
              <Image source={require('../utils/assets/icons/google.png')} style={stylesAuth.googleLogo}/>
            </TouchableRipple>
          </View>
        </View>
        <View style={stylesContainer.subcontainer}>
          <View style={stylesContainer.subcontainerHorizontal}>
              <Text>Don't have an account?</Text>
              <TouchableRipple onPress={handleSwitchToSignUp}>
                <Text style={stylesAuth.primaryColorText}>Sign up here</Text>
              </TouchableRipple>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default SigninScreen;
