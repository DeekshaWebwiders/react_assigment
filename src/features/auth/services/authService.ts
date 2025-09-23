import { apiCall } from './apiCall';

const API_BASE = '/api/auth';

export const authService = {
  login: (data: { email: string; password: string }) =>
    apiCall(`${API_BASE}/login`, 'post', data),

  register: (data: any) =>
    apiCall(`${API_BASE}/register`, 'post', data),

  forgotPassword: (data: { email: string }) =>
    apiCall(`${API_BASE}/forget-password`, 'post', data),

  resendVerification: (data: { email: string }) =>
    apiCall(`${API_BASE}/resend-verification`, 'post', data),

  verifyEmail: (params: { token: string }) =>
    apiCall(`${API_BASE}/verify-email?token=${params.token}`, 'get'),

  getUserById: (id: string) =>
    apiCall(`${API_BASE}/user/${id}`, 'get'),

  updateProfile: (id: string, data: any) =>
    apiCall(`${API_BASE}/update-profile/${id}`, 'put', data),

  changePassword: (id: string, data: { oldPassword: string; newPassword: string; confirmPassword: string }) =>
    apiCall(`${API_BASE}/change-password/${id}`, 'post', data),

  };
