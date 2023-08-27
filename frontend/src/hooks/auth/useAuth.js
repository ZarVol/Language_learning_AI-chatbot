import { useState, useEffect } from 'react';
import { login as loginApiCall } from '../../api/api';

const useAuth = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Get the token from local storage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (email, password) => {
    const token = await loginApiCall(email, password);
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logout = async () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return { token, login, logout };
};

export default useAuth;
