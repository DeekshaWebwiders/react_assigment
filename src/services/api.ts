import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change to your backend URL
});

api.interceptors.request.use(config => {
  // Add auth token or other headers here
  return config;
});

export default api;
