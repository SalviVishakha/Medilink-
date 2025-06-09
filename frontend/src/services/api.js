import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/v1', // Points to your Express backend
});

// Add JWT token to requests (after login)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;