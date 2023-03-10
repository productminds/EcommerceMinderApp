import React from 'react';
import { Alert } from 'react-native';
import {SafeAreaView, ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import { TextInput, Button, TouchableRipple } from 'react-native-paper';
import { COLORS, SIZES, FONTS } from '../utils/constants/theme';

const SigninScreen = (): JSX.Element => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = () => {
    console.log("Sign in")
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.subcontainer}>
          <View style={styles.logo}></View>
          <Text style={styles.title}>Welcome back</Text>
        </View>
        <View  style={styles.subcontainer}>
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.input}
            outlineStyle={styles.borderInput}
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
            style={styles.input}
            outlineStyle={styles.borderInput}
            activeOutlineColor={COLORS.primary}
            selectionColor={COLORS.primary}
          />
          <TouchableRipple style={styles.forgotPassword} onPress={() => console.log("Forgot password")}>
            <Text style={styles.primaryColorText}>Forgot Password</Text>
          </TouchableRipple>
        </View>
        <View  style={styles.subcontainer}>
          <Button style={styles.signInButton} textColor={COLORS.white} onPress={handleSignIn}>
            Sign In
          </Button>
          <View style={styles.subcontainer}>
            <Text>Or continue with</Text>
            <TouchableRipple style={styles.googleContainer} onPress={() => console.log("Google sign in")}>
              <Image source={require('../utils/assets/icons/google.png')} style={styles.googleLogo}/>
            </TouchableRipple>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <View style={styles.subcontainerHorizontal}>
              <Text>Don't have an account?</Text>
              <TouchableRipple onPress={() => console.log("Sign Up here")}>
                <Text style={styles.primaryColorText}>Sign up here</Text>
              </TouchableRipple>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.white,
  },
  subcontainer: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    margin: SIZES.margin
  },
  subcontainerHorizontal: {
    width: "100%",
    margin: SIZES.margin,
    flexDirection:"row",
    backgroundColor: COLORS.white,
    justifyContent: "space-evenly"
  },
  title: {
    margin: 2 * SIZES.margin,
    ...FONTS.h2
  },
  logo: {
    borderRadius: 100,
    margin: 2 * SIZES.margin,
    height: 100,
    width: 100,
    backgroundColor: COLORS.primary
  },
  input: {
    width: "80%",
    marginBottom: SIZES.margin2
  },
  borderInput: {
    borderColor: COLORS.primary,
    borderRadius: 15,
    borderWidth: 1
  },
  primaryColorText: {
    color:COLORS.primary,
    fontWeight: "bold",
  },
  forgotPassword: {
    width:"80%",
    alignItems:"flex-end"
  },
  signInButton: {
    width:"80%",
    height: 60,
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    marginBottom: SIZES.margin
  },
  googleLogo: {
    height: 30,
    width: 30,
  },
  googleContainer: {
    marginTop: SIZES.margin,
    padding:SIZES.margin / 2,
    backgroundColor: COLORS.gray,
    borderRadius: 12
  }
});

export default SigninScreen;
