import { useCallback } from 'react';
import { authService } from '../services/authService';

export function useAuth() {
  const login = useCallback(async (email: string, password: string) => {
    const result = await authService.login({ email, password });
    // handle token, user data, etc.
    return result;
  }, []);

  const register = useCallback(async (data: { name: string; email: string; password: string; confirmPassword: string }) => {
    const result = await authService.register(data);
    // handle registration response, etc.
    return result;
  }, []);

  const forgotPassword = useCallback(async (email: string) => {
    const result = await authService.forgotPassword({ email });
    // handle forgot password response, etc.
    return result;
  }, []);

  return { login, register, forgotPassword };
}
