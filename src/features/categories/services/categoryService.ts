import axios from '../../../services/api';

// Fetch all categories
export async function fetchCategories() {
  const res = await axios.get('/categories');
  return res.data;
}

// Create a new category
export async function createCategory(data: any) {
  const res = await axios.post('/categories', data);
  return res.data;
}

// Get a category by ID
export async function getCategoryById(id: string) {
  const res = await axios.get(`/categories/${id}`);
  return res.data;
}

// Update a category by ID
export async function updateCategory(id: string, data: any) {
  const res = await axios.put(`/categories/${id}`, data);
  return res.data;
}

// Delete a category by ID
export async function deleteCategory(id: string) {
  const res = await axios.delete(`/categories/${id}`);
  return res.data;
}
