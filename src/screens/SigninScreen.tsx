import React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import { TextInput, Button, TouchableRipple } from 'react-native-paper';
import { COLORS } from '../utils/constants/theme';
import stylesAuth from '../styles/auth.style';
import stylesContainer from '../styles/container.style';

const SigninScreen = (): JSX.Element => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = () => {
    console.log("Sign in")
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
          <TouchableRipple style={stylesAuth.forgotPassword} onPress={() => console.log("Forgot password")}>
            <Text style={stylesAuth.primaryColorText}>Forgot Password</Text>
          </TouchableRipple>
        </View>
        <View  style={stylesContainer.subcontainer}>
          <Button style={stylesAuth.signInButton} textColor={COLORS.white} onPress={handleSignIn}>
            Sign In
          </Button>
          <View style={stylesContainer.subcontainer}>
            <Text>Or continue with</Text>
            <TouchableRipple style={stylesAuth.googleContainer} onPress={() => console.log("Google sign in")}>
              <Image source={require('../utils/assets/icons/google.png')} style={stylesAuth.googleLogo}/>
            </TouchableRipple>
          </View>
        </View>
        <View style={stylesContainer.subcontainer}>
          <View style={stylesContainer.subcontainerHorizontal}>
              <Text>Don't have an account?</Text>
              <TouchableRipple onPress={() => console.log("Sign Up here")}>
                <Text style={stylesAuth.primaryColorText}>Sign up here</Text>
              </TouchableRipple>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default SigninScreen;
