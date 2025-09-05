import React from 'react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <nav>Sidebar</nav>
    <main>{children}</main>
  </div>
);

export default DashboardLayout;
