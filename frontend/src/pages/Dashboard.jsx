import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar';
import StatCard from '../components/Dashboard/StatCard';
import { FaBox,FaUsers, FaFileInvoiceDollar, FaRupeeSign } from 'react-icons/fa';
import RecentBills from '../components/Dashboard/RecentBills';
import RecentActivity from '../components/Dashboard/RecentActivity';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className='ml-60 flex-1 flex flex-col'>
        <Navbar />
      <div className='p-6'>
       <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold text-gray-800 '>Dashboard Overview</h1>
          <p className='text-gray-500 mt-1'>Welcome back Geeta</p>
        </div>
        <button className='bg-slate-900 text-white px-3 py-2 rounded-lg hover:bg-slate-700'>
          + New Invoice
        </button>
       </div>
       <div className='grid grid-cols-4 gap-4 mt-3' >
          <StatCard title= "Products" value="120" icon ={<FaBox/>}/>
          <StatCard title="Customers" value= "30" icon={<FaUsers />} />
          <StatCard title="Bills" value ="500" icon ={<FaFileInvoiceDollar />} />
          <StatCard  title="Revenue" value= "INR 50,000" icon= {<FaRupeeSign />} />
        </div>
        <div className='grid grid-cols-3 gap-6 mt-6 '>
          <div className='col-span-2'>
            <RecentBills />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;