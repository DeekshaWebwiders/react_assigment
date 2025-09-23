import React, { useEffect, useState } from 'react';
import { fetchCategories, deleteCategory } from '../services/categoryService';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../layouts/DashboardLayout';

const CategoryListPage: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const handleDelete = async (id: string) => {
    await deleteCategory(id);
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <button
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => navigate('/categories/create')}
      >
        Add Category
      </button>
      <ul>
        {categories.map(cat => (
          <li key={cat.id} className="mb-2 flex justify-between items-center">
            <span>{cat.name}</span>
            <div>
              <button
                className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => navigate(`/categories/edit/${cat.id}`)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(cat.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </DashboardLayout>
  );
};

export default CategoryListPage;
