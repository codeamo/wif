import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UserProfile from '../components/UserProfile';
import RecentUsers from '../components/RecentUsers';
import Contacts from '../components/Contacts';

const SendScreen = ({ navigation }) => {
  return (
    <View>
      <RecentUsers />
      <TouchableOpacity onPress={() => navigation.navigate('Amount')}>
        <Contacts />
      </TouchableOpacity>
    </View>
  );
};

SendScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <UserProfile />
        </TouchableOpacity>
      );
    }
  };
};

const Styles = StyleSheet.create({});

export default SendScreen;
