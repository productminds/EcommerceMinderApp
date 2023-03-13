import React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import { TextInput, Button, TouchableRipple } from 'react-native-paper';
import { COLORS } from '../utils/constants/theme';
import stylesAuth from '../styles/auth.style';
import stylesContainer from '../styles/container.style';

const SignupScreen = (): JSX.Element => {

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    console.log("Sign in")
  }

  const handleGoogleSignUp = () => {
    console.log("Google sign up")
  }

  const handlewitchToSignIn = () => {
    // navigate to SignInScreen
  }

  return (
    <SafeAreaView>
      <ScrollView style={stylesContainer.container}>
        <View style={stylesContainer.subcontainer}>
          <View style={stylesAuth.logo}></View>
          <Text style={stylesAuth.title}>Welcome</Text>
        </View>
        <View  style={stylesContainer.subcontainer}>
          <TextInput
              mode="outlined"
              label="First Name"
              value={firstName}
              onChangeText={(firstName) => setFirstName(firstName)}
              style={stylesAuth.input}
              outlineStyle={stylesAuth.borderInput}
              selectionColor={COLORS.primary}
              activeOutlineColor={COLORS.primary}
          />
          <TextInput
              mode="outlined"
              label="Last Name"
              value={lastName}
              onChangeText={(lastName) => setLastName(lastName)}
              style={stylesAuth.input}
              outlineStyle={stylesAuth.borderInput}
              selectionColor={COLORS.primary}
              activeOutlineColor={COLORS.primary}
          />
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
        </View>
        <View  style={stylesContainer.subcontainer}>
          <Button style={stylesAuth.signInButton} textColor={COLORS.white} onPress={handleSignUp}>
            Sign Up
          </Button>
          <View style={stylesContainer.subcontainer}>
            <Text>Or continue with</Text>
            <TouchableRipple style={stylesAuth.googleContainer} onPress={handleGoogleSignUp}>
              <Image source={require('../utils/assets/icons/google.png')} style={stylesAuth.googleLogo}/>
            </TouchableRipple>
          </View>
        </View>
        <View style={stylesContainer.subcontainer}>
          <View style={stylesContainer.subcontainerHorizontal}>
              <Text>Already have an account?</Text>
              <TouchableRipple onPress={handlewitchToSignIn}>
                <Text style={stylesAuth.primaryColorText}>Sign in here</Text>
              </TouchableRipple>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default SignupScreen;
