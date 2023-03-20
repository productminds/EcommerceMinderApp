import React from 'react';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import {TextInput, Button, TouchableRipple} from 'react-native-paper';
import styles from './styles';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Colors} from '../../utils/constants/theme';
import {MainNavigatorStackParamList} from '../../navigators/MainNavigator';

type Props = NativeStackScreenProps<MainNavigatorStackParamList, 'Signup'>;

const SignupScreen = ({navigation}: Props): JSX.Element => {

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    console.log("Sign up");
  }

  const handleGoogleSignUp = () => {
    console.log("Google sign up");
  }

  const handlewitchToSignIn = () => {
    navigation.navigate("Signin");
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.subcontainer}>
          <View style={styles.logo}></View>
          <Text style={styles.title}>Welcome</Text>
        </View>
        <View  style={styles.subcontainer}>
          <TextInput
              mode="outlined"
              label="First Name"
              value={firstName}
              onChangeText={(firstName) => setFirstName(firstName)}
              style={styles.input}
              textAlignVertical = "center"
              outlineStyle={styles.borderInput}
              selectionColor={Colors.primary}
              activeOutlineColor={Colors.primary}
          />
          <TextInput
              mode="outlined"
              label="Last Name"
              value={lastName}
              onChangeText={(lastName) => setLastName(lastName)}
              style={styles.input}
              outlineStyle={styles.borderInput}
              selectionColor={Colors.primary}
              activeOutlineColor={Colors.primary}
          />
          <TextInput
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.input}
            outlineStyle={styles.borderInput}
            selectionColor={Colors.primary}
            activeOutlineColor={Colors.primary}
          />
          <TextInput
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry
            right={<TextInput.Icon icon="eye" iconColor={Colors.primary}/>}
            style={styles.input}
            outlineStyle={styles.borderInput}
            activeOutlineColor={Colors.primary}
            selectionColor={Colors.primary}
          />
        </View>
        <View  style={styles.subcontainer}>
            <View style={styles.buttonContainer}>
                <Button style={styles.signUpButton} textColor={Colors.white} onPress={handleSignUp}>
                    Sign Up
                </Button>
            </View>
          <View style={styles.subcontainer}>
            <Text style={styles.text}>Or continue with</Text>
            <TouchableRipple style={styles.googleContainer} onPress={handleGoogleSignUp}>
              <Image source={require('../../utils/assets/icons/google.png')} style={styles.googleLogo}/>
            </TouchableRipple>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <View style={styles.subcontainerHorizontal}>
              <Text style={styles.text}>Already have an account?</Text>
              <TouchableRipple onPress={handlewitchToSignIn}>
                <Text style={styles.primaryColorText}>Sign in here</Text>
              </TouchableRipple>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default SignupScreen;
