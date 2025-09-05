import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

api.interceptors.request.use(config => {
  // Add auth token or other headers here
  return config;
});

export default api;
