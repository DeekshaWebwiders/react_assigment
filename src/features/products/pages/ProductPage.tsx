import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../layouts/DashboardLayout';
import ProductTable from '../components/ProductTable';
import { fetchProducts } from '../services/productService';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleAddProduct = () => {
    navigate('/products/add');
  };

  const handleEditProduct = (id: number) => {
    navigate(`/products/edit/${id}`);
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleAddProduct}
      >
        Add Product
      </button>
      <ProductTable products={products} onEdit={handleEditProduct} />
      {/* ...existing code... */}
    </DashboardLayout>
  );
};

export default ProductPage;