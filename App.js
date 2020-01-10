import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import SendScreen from './src/screens/SendScreen';
import AmountToSendScreen from './src/screens/AmountToSendScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import HomeScreen from './src/screens/HomeScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import SettingScreen from './src/screens/SettingScreen';
import reducers from './src/reducers';
import { setNavigator } from './src/navigationRef/navigationRef';
import AutoLoginScreen from './src/screens/AutoLoginScreen';

const sendFlow = createStackNavigator({
  Send: SendScreen,
  Amount: AmountToSendScreen,
  Setting: SettingScreen
});

sendFlow.navigationOptions = {
  title: 'Send',
  tabBarIcon: <Feather name="send" size={25} />,
  tabBarOptions: {
    activeTintColor: 'green',
    inactiveTintColor: 'black'
  }
};

const switchNavigator = createSwitchNavigator(
  {
    AutoLogin: AutoLoginScreen,
    LoginFlow: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen
    }),
    MainAppFlow: createBottomTabNavigator(
      {
        Home: HomeScreen,
        sendFlow,
        Activity: ActivityScreen
      },
      {
        initialRouteName: 'sendFlow'
      }
    )
  },
  {
    initialRouteName: 'AutoLogin'
  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <App ref={navigator => setNavigator(navigator)} />
    </Provider>
  );
};
