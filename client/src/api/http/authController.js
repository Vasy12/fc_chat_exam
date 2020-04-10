import {ACCESS_TOKEN_KEY} from '../../constants';
import http from './index.js';

export const signUpUser = data => http.post('/sign_up', data, {
  headers: {
    'Content-type': 'multipart/form-data',
  },
}).then(saveAccessToken);

export const loginUser = data => http.post('/login', data, {
  headers: {'Content-type': 'application/json'},
}).then(saveAccessToken);

export const refreshAuth = () => http.post('/refresh_auth');

function saveAccessToken (response) {
  localStorage.setItem(ACCESS_TOKEN_KEY, response.data.token);
  return response;
}
