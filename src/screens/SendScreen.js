import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import UserProfile from '../components/UserProfile';
import RecentUsers from '../components/RecentUsers';
import Contacts from '../components/Contacts';

const SendScreen = () => {
  return (
    <View>
      <Header
        containerStyle={{
          backgroundColor: '#fff'
        }}
        rightComponent={<UserProfile />}
      />
      <RecentUsers />
      <Contacts />
    </View>
  );
};

SendScreen.navigationOptions = {};

const Styles = StyleSheet.create({});

export default SendScreen;
