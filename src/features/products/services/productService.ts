import axios from '../../../services/api';

export async function fetchProducts() {
  const res = await axios.get('/products');
  return res.data;
}

export async function createProduct(data: any) {
  const res = await axios.post('/products', data);
  return res.data;
}

export async function getProductById(id: string) {
  const res = await axios.get(`/products/${id}`);
  return res.data;
}

export async function updateProduct(id: string, data: any) {
  const res = await axios.put(`/products/${id}`, data);
  return res.data;
}

// ...add more product API functions as needed...
