import React from 'react';
import DashboardLayout from '../../../layouts/DashboardLayout';
import StatsCards from '../components/StatsCards';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <StatsCards />
      {/* Add more dashboard widgets/components here */}
    </DashboardLayout>
  );
};

export default DashboardPage;