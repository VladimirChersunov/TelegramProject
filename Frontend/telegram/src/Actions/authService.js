import axios from 'axios';

const authService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const login = async (username, password) => {
    try {
      const response = await authService.post('/login', { username, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };
  
  export const register = async (username, email, password) => {
    try {
      const response = await authService.post('/register', { username, email, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };
  