import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import {FaPlus } from 'react-icons/fa';

const Bills = () => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
        <Sidebar/>
        <div className='flex flex-1 flex-col'>
            <Navbar/>
            <div className='p-8'>
                <h1 className='text-3xl font-bold text-slate-900'>Bills</h1>
                <p className='text-gray-500 mt-1'>Create and manage customer invoices.</p>
            </div>
            <div className='px-8 flex justify-end mt-2'>
              <button className='flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-700 transition'>
                <FaPlus />
                <span>Create Bill</span>
              </button>
            </div>
            <div className='px-8 mt-6'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <table className='w-full border-collapse'>
              <thead className='bg-gray-100'>
                <tr className='border-b'>
                  <th className='p-3 text-left font-semibold text-gray-700'>Bill No</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Customer</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Date</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Amount</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Status</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className='text-center py-10 text-gray-500 font-medium'>NO Bills Found</td>
                </tr>
              </tbody>
            </table>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Bills;