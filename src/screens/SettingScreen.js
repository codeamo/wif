import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import signOut from '../actions/userActions';

const SettingScreen = () => {
  return (
    <View>
      <Button onPress={signOut} title="Sign Out" />
    </View>
  );
};

const Styles = StyleSheet.create({});

export default SettingScreen;
