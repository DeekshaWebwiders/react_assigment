import axios from 'axios';

export async function registerUser(email: string, password: string) {
  // Replace with your actual API endpoint
  const response = await axios.post('/api/register', { email, password });
  return response.data;
}
