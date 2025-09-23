import React from 'react';

const StatsCards: React.FC = () => (
  <div className="grid grid-cols-3 gap-4 mb-8">
    <div className="bg-white shadow rounded p-4">
      <div className="text-lg font-semibold">Users</div>
      <div className="text-2xl">0</div>
    </div>
    <div className="bg-white shadow rounded p-4">
      <div className="text-lg font-semibold">Products</div>
      <div className="text-2xl">0</div>
    </div>
    <div className="bg-white shadow rounded p-4">
      <div className="text-lg font-semibold">Categories</div>
      <div className="text-2xl">0</div>
    </div>
  </div>
);

export default StatsCards;
