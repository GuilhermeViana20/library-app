import axios from 'axios';

const tokenType = localStorage.getItem('token_type');
const accessToken = localStorage.getItem('access_token');

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000,
  headers: {
    Authorization: tokenType && accessToken ? `${tokenType} ${accessToken}` : ''
  }
});

export default instance;