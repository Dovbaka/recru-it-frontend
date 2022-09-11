import axios from 'axios';
import store from '../store/store';
import { actions } from '../store/auth/actions';
import AuthService from '../services/AuthService';

const API = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/',
});

//request interceptor to add the auth token header to requests
API.interceptors.request.use(
  config => {
    const localData = localStorage.getItem('userInfo');
    let accessToken;
    if (localData) accessToken = JSON.parse(localData)?.access;
    if (accessToken && config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

//Interceptor to refresh token on receiving token expired error
API.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    const originalRequest = error.config; //Original request
    const refreshToken = store.getState().AuthReducer.token.refresh; //Get refresh token form store
    if (error.response.status === 401 && originalRequest.url === '/accounts/token/refresh/') {
      API.post('auth/logout');
      store.dispatch(actions.logOut()); //Logout if refreshToken failed
    }
    if (refreshToken && error.response.status === 401 && !originalRequest.__retry) {
      //if error = 401 and it's first retry
      originalRequest.__retry = true; //Set retry to true
      return AuthService.refreshToken(refreshToken).then(res => {
        //refresh tokens request
        if (res.status === 200) {
          localStorage.setItem('userInfo', JSON.stringify({ access: res.data.access, refresh: refreshToken })); //Set new tokens in localStore
          store.dispatch(actions.refreshToken({ access: res.data.access, refresh: refreshToken })); //Set new tokens in state
          originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
          return axios(originalRequest); //Repeat original request
        }
      });
    }
    return Promise.reject(error);
  },
);

export default API;
