/* eslint-disable quotes */
import { AsyncStorage } from 'react-native';

const BASE_URL = `http://localhost:3000`;

export const register = user => {
  return fetchRequest(`/signUp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }).then(data => {
    AsyncStorage.setItem('token', data.token);
  });
};

export const signIn = user => {
  const { email, password } = user;

  return fetchRequest(`/singIn`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic${btoa(`${email}:${password}`)}`
    },
    body: JSON.stringify({ email, password })
  }).then(data => {
    AsyncStorage.setItem('token', data.token);
  });
};

const fetchRequest = (url, options) => {
  return fetch(`${BASE_URL}${url}`, options)
    .then(res => (res.status <= 404 ? res : Promise.reject(res)))
    .then(res => res.json())
    .catch(e => {
      // eslint-disable-next-line no-console
      console.log(`${e.message} while fetching ${url}`);
    });
};

export default {
  register,
  signIn
};
