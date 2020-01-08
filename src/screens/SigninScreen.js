import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Signin Screen</Text>
      <Button
        title="Go To SingUp Screen"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

const Styles = StyleSheet.create({});

export default SigninScreen;
