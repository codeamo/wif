// eslint-disable-next-line quotes
const BASE_URL = `http://localhost:3002`;

export default {
  createUser(inputs) {
    return fetchRequest('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    });
  }
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
