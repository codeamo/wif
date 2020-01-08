import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <AuthForm />
    </View>
  );
};

SignupScreen.navigationOptions = {
  title: 'Signup'
};

const Styles = StyleSheet.create({});

export default SignupScreen;
