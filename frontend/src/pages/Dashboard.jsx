import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className='flex-1 p-6'>
        <h1 className="text-5xl font-bold text-blue-600">
        Welcome to BillPro 
      </h1></div>
    </div>
  );
};

export default Dashboard;