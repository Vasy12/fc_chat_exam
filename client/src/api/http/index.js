import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '../../constants';
import history from '../../history';

const http = axios.create({
  baseURL: 'http://localhost:3000/api',
});
/*
 * REQUEST INTERCEPTOR SET AUTHORIZATION HEADER
 * */
http.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${ sessionStorage.getItem(
      ACCESS_TOKEN_KEY) }`;
    return Promise.resolve(config);
  });
/*
 * RESPONSE ERROR INTERCEPTOR REDIRECT ON 401 STATUS
 * */
http.interceptors.response.use(
  response => Promise.resolve(response),
  error => {

    const { response: { status } } = error;

    if (status === 401) {
      //redirect to login page
      history.push('/login');
    }
    return Promise.reject(error);
  });

export default http;