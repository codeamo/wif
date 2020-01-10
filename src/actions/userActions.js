import { AsyncStorage } from 'react-native';
import { LOGIN_USER, LOG_USER_OUT, ADD_ERROR } from '../constants';
import { register, signIn } from '../api/apiUser';
import navigate from '../navigationRef/navigationRef';

// Todo: are we going to only get back the token here? what about user id?
const autoSignin = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch(loginUser(token));
      navigator('MainAppFlow');
    } else {
      navigator('LoginFlow');
    }
  };
};

const signUp = user => {
  return dispatch => {
    register(user).then(
      data => {
        dispatch(loginUser(data));
        navigate('MainAppFlow');
      },
      error => {
        dispatch(addError(error));
      }
    );
  };
};

const logIn = user => {
  return async dispatch => {
    try {
      const data = await signIn(user);
      await dispatch(loginUser(data));

      navigate('MainAppFlow');
    } catch (error) {
      dispatch(addError(error));
    }
  };
};

const signOut = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('token');
    dispatch(logoutUser());

    navigate('LoginFlow');
  };
};

const loginUser = userObj => ({
  type: LOGIN_USER,
  payload: userObj
});

const logoutUser = () => ({
  type: LOG_USER_OUT
});

const addError = error => ({
  type: ADD_ERROR,
  payload: error.message
});

export default {
  signUp,
  logIn,
  signOut,
  autoSignin
};
