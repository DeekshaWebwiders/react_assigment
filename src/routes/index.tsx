import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import DashboardPage from '../features/dashboard/pages/DashboardPage';
import ProductPage from '../features/products/pages/ProductPage';
import AddProductPage from '../features/products/pages/AddProductPage';
import EditProductPage from '../features/products/pages/EditProductPage';
import CategoryListPage from '../features/categories/pages/CategoryListPage';
import AddCategoryPage from '../features/categories/pages/CreateCategoryPage';
import EditCategoryPage from '../features/categories/pages/EditCategoryPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/add" element={<AddProductPage />} />
      <Route path="/products/edit/:id" element={<EditProductPage />} />
      <Route path="/categories" element={<CategoryListPage />} />
      <Route path="/categories/add" element={<AddCategoryPage />} />
      <Route path="/categories/edit/:id" element={<EditCategoryPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
