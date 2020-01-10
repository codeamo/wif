import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import logIn from '../actions/userActions';

// Todo Make sure to ease the duplication of signIn and signUp screens with a component;
const SigninScreen = ({ navigation }) => {
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
        onPress={() => logIn({ ...email, ...password })}
      />
      <Button title="sign in" onPress={() => navigation.navigate('Signup')} />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={Styles.link}>do not have an account? Sign up instead!</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  spacer: {
    margin: 10
  },
  link: {
    color: 'blue'
  }
});

export default SigninScreen;
