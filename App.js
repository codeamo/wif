import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import SendScreen from './src/screens/SendScreen';
import AmountToSendScreen from './src/screens/AmountToSendScreen';
import ActivityScreen from './src/screens/ActivityScreen';

const TapNavigator = createBottomTabNavigator(
  {
    Send: SendScreen,
    Amount: AmountToSendScreen,
    Activity: ActivityScreen
  },
  {
    initialRouteName: 'Send',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Feather;
        let IconName;
        if (routeName === 'Send') {
          IconName = 'send';
        } else if (routeName === 'Amount') {
          IconName = 'dollar-sign';
        } else if (routeName === 'Activity') {
          IconName = 'activity';
        }
        return <IconComponent name={IconName} size={25} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'black'
      }
    })
  }
);

export default createAppContainer(TapNavigator);
