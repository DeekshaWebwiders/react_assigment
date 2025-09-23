import React, { useEffect, useState } from 'react';
import { getCategoryById, updateCategory } from '../services/categoryService';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../../layouts/DashboardLayout';
import CategoryForm from '../components/CategoryForm';

const EditCategoryPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getCategoryById(id).then(setCategory);
    }
  }, [id]);

  const handleSubmit = async (data: any) => {
    if (!id) return;
    await updateCategory(id, data);
    navigate('/categories');
  };

  if (!category) return <DashboardLayout>Loading...</DashboardLayout>;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Category</h1>
      <CategoryForm initialValues={category} onSubmit={handleSubmit} />
    </DashboardLayout>
  );
};

export default EditCategoryPage;
