import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';

const ActivityScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Transaction Screen</Text>
    </View>
  );
};

ActivityScreen.navigationOptions = {
  title: 'Activity',
  tabBarIcon: <Feather name="activity" size={25} />,
  tabBarOptions: {
    activeTintColor: 'green',
    inactiveTintColor: 'black'
  }
};

const Styles = StyleSheet.create({});

export default ActivityScreen;
