import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { FaPlus, FaSearch } from 'react-icons/fa';

const Customers = () => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar/>
      <div className='flex-1'>
        <Navbar/>
        <div className='p-8'>
          <h2 className='text-3xl font-bold text-slate-900'>Customers</h2>
          <p className='text-gray-500 mt-1'>Manage all your customers here.</p>
          <div className='flex justify-between items-center mt-8'>
            <div className='relative'>
              <FaSearch className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'/>
                <input type="text" placeholder='Search Customer'
                className='border border-gray-300 py-2 pl-10 pr-4 w-80 rounded-lg outline-none' />
            </div>
            <div>
              <button className='bg-slate-900 text-white rounded-lg px-5 py-2 cursor-pointer flex items-center gap-2 hover:bg-slate-700 transition'>
                <FaPlus/>
                <span>Add Customer</span>
              </button>
            </div>
          </div>
          <div className='mt-8 bg-white rounded-lg shadow-md overflow-hidden'>
            <table className='w-full border-collapse'>
              <thead className='bg-gray-100'>
                <tr className='border-b'>
                  <th className='p-3 text-left font-semibol text-gray-700'>Customer Name</th>
                  <th className='p-3 text-left font-semibol text-gray-700'>Phone</th>
                  <th className='p-3 text-left font-semibol text-gray-700'>Email</th>
                  <th className='p-3 text-left font-semibol text-gray-700'>Address</th>
                  <th className='p-3 text-left font-semibol text-gray-700'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b'>
                  <td>Rahul Sharma</td>
                  <td>9876512340</td>
                  <td>rahul123@gmail.com</td>
                  <td>New Delhi</td>
                  <td>Edit Delete</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers;