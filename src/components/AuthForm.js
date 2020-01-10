/* eslint-disable no-console */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

const AuthForm = () => {
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
        onPress={() => onSubmit({ ...email, ...password })}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  spacer: {
    margin: 10
  }
});

export default AuthForm;
