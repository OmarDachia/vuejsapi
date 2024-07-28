import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  }
});

export default axiosInstance;