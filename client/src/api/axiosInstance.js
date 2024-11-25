// File: src/api/axiosInstance.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // Base URL from .env
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors here if needed
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
