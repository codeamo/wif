import { useEffect } from 'react';
import autoSignin from '../actions/userActions';

const AutoLoginScreen = () => {
  useEffect(() => {
    autoSignin();
  }, []);
  // Todo: make sure this returns the company logo
  return null;
};

export default AutoLoginScreen;
