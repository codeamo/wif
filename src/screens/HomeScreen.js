import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import UserProfile from '../components/UserProfile';

const HomeScreen = ({ navigation }) => {
  const profile = (
    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
      <UserProfile />
    </TouchableOpacity>
  );

  return (
    <View>
      <Header
        containerStyle={{
          backgroundColor: '#fff'
        }}
        rightComponent={profile}
      />
      <Text>Home Screen</Text>
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home',
  tabBarIcon: <Feather name="home" size={25} />,
  tabBarOptions: {
    activeTintColor: 'green',
    inactiveTintColor: 'black'
  }
};

const Styles = StyleSheet.create({});

export default HomeScreen;
