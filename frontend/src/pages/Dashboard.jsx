import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Navbar />
      <div className='p-6'>
        <h1 className="text-3xl font-bold text-blue-600">
        Welcome to BillPro 
      </h1>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;