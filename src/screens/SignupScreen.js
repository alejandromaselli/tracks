import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import {Input, Button, Text} from 'react-native-elements';
import Spacer from "../components/Spacer";


const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <View style={styles.container}>
    <Spacer><Text h3>Sign Up for Tracker</Text></Spacer>
    <Input
      label="Email"
      onChangeText={setEmail}
      value={email}
      autoCapitalize="none"
      autoCorrect={false}
    />
    <Spacer/>
    <Input
      label="Password"
      onChangeText={setPassword}
      value={password}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry
    />
    <Spacer>
      <Button title="Sign Up"/>
    </Spacer>
  </View>
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignupScreen;