import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://spiceback.vercel.app/', // Node.js API endpoint
  // baseURL: 'http://localhost:7890/',

});

export default axiosInstance;