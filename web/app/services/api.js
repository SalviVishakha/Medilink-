import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getGreeting = async () => {
  try {
    const response = await api.get('/api/greeting');
    return response.data;
  } catch (error) {
    console.error('Error fetching greeting:', error);
    throw error;
  }
};

export default api; 