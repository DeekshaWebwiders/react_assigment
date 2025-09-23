import React from 'react';
import DashboardLayout from '../../../layouts/DashboardLayout';
import ProductForm from '../components/ProductForm';
import { createProduct } from '../services/productService';
import { useNavigate } from 'react-router-dom';

const AddProductPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    await createProduct(data);
    navigate('/products');
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </DashboardLayout>
  );
};

export default AddProductPage;
