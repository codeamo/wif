import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import signUp from '../actions/userActions';

// Todo Make sure to ease the duplication of signIn and signUp screens with a component;
const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Styles.spacer}>
      <Input
        style={Styles.spacer}
        label="email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={text => setEmail({ email: text })}
      />
      <Input
        secureTextEntry
        style={Styles.spacer}
        label="password"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={pin => setPassword({ password: pin })}
      />
      <Button
        style={Styles.spacer}
        title="Signup"
        onPress={() => signUp({ ...email, ...password })}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={Styles.link}>Already have an account? Sign in instead!</Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = {
  title: 'Signup'
};

const Styles = StyleSheet.create({
  spacer: {
    margin: 10
  },
  link: {
    color: 'blue'
  }
});

export default SignupScreen;
