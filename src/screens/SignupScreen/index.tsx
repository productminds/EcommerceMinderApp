import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {TextInput, Button, TouchableRipple} from 'react-native-paper';

import styles from './styles';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Colors} from '../../utils/constants/theme';
import {MainNavigatorStackParamList} from '../../navigators/MainNavigator';

import { useAuth } from '../../hooks/useAuth';
import useBraze from '../../hooks/useBraze';
import {useAmplitude} from '../../hooks/useAmplitude';

type Props = NativeStackScreenProps<MainNavigatorStackParamList, 'Signup'>;

const SignupScreen = ({navigation}: Props): JSX.Element => {

  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const {signUp} = useAuth();
  const {setBrazeUser} = useBraze();
  const {setAmplitudeUser} = useAmplitude();

  const handleSignUp = async () => {
    const user = await signUp(email, password);
    setBrazeUser(user);
    setAmplitudeUser(user, "Email/Password");
    navigation.navigate("HomeNavigator",{});
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
                <Button 
                  onPress={handleSignUp}
                  style={styles.signUpButton} 
                  textColor={Colors.white}>
                    Sign Up
                </Button>
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
