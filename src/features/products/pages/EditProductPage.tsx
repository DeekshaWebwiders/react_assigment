import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../layouts/DashboardLayout';
import ProductForm from '../components/ProductForm';
import { getProductById, updateProduct } from '../services/productService';
import { useNavigate, useParams } from 'react-router-dom';

const EditProductPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    }
  }, [id]);

  const handleSubmit = async (data: any) => {
    if (!id) return; // Ensure id is present
    await updateProduct(id, data);
    navigate('/products');
  };

  if (!product) return <DashboardLayout>Loading...</DashboardLayout>;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <ProductForm initialValues={product} onSubmit={handleSubmit} />
    </DashboardLayout>
  );
};

export default EditProductPage;
