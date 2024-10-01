import axios, { AxiosInstance } from 'axios';

const apiAuth: AxiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiPost: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
export { apiAuth, apiPost };
