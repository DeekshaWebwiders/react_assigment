import React, { useState } from 'react';

interface CategoryFormProps {
  initialValues?: any;
  onSubmit: (data: any) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ initialValues = {}, onSubmit }) => {
  const [name, setName] = useState(initialValues.name || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-2">Name</label>
      <input
        className="border p-2 mb-4 w-full"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
};

export default CategoryForm;
