import axios, { AxiosRequestConfig } from 'axios';

export async function apiCall<T = any>(url: string, method: AxiosRequestConfig['method'], data?: any, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response = await axios({ url, method, data, ...config });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
}
