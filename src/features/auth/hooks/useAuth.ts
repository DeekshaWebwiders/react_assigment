import { useState } from 'react';
import { loginUser, registerUser } from '../services/authService';

export function useAuth() {
  const [user, setUser] = useState(null);

  async function login(email: string, password: string) {
    const userData = await loginUser(email, password);
    setUser(userData);
  }

  async function register(email: string, password: string) {
    await registerUser(email, password);
  }

  function logout() {
    setUser(null);
  }

  return { user, login, logout, register };
}
