import React from 'react';

const ProductTable = ({
  products,
  onEdit,
}: {
  products: any[];
  onEdit: (id: number) => void;
}) => (
  <table className="min-w-full bg-white">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">ID</th>
        <th className="py-2 px-4 border-b">Name</th>
        <th className="py-2 px-4 border-b">Category</th>
        <th className="py-2 px-4 border-b">Price</th>
        <th className="py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product.id}>
          <td className="py-2 px-4 border-b">{product.id}</td>
          <td className="py-2 px-4 border-b">{product.name}</td>
          <td className="py-2 px-4 border-b">{product.category}</td>
          <td className="py-2 px-4 border-b">{product.price}</td>
          <td className="py-2 px-4 border-b">
            <button
              className="mr-2 text-blue-500"
              onClick={() => onEdit(product.id)}
            >
              Edit
            </button>
            <button className="text-red-500">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProductTable;
