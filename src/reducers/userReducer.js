/* eslint-disable indent */
import { LOGIN_USER, ADD_ERROR, LOG_USER_OUT } from '../constants';

const initialState = {
  token: null,
  error_message: '',
  id: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        id: action.payload.id
      };
    case LOG_USER_OUT:
      return {
        token: null,
        error_message: '',
        id: null
      };
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default {
  userReducer
};
