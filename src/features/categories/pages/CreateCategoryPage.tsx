import React from 'react';
import { createCategory } from '../services/categoryService';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../layouts/DashboardLayout';
import CategoryForm from '../components/CategoryForm';

const CreateCategoryPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    await createCategory(data);
    navigate('/categories');
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Add Category</h1>
      <CategoryForm onSubmit={handleSubmit} />
    </DashboardLayout>
  );
};

export default CreateCategoryPage;
