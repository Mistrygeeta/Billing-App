import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import {FaPlus, FaTimes } from 'react-icons/fa';

const Bills = () => {
  const [showModal, setShowModal] = useState(false);
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
              <button onClick={()=> setShowModal(true)} className='flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-700 transition'>
                <FaPlus />
                <span>Create Bill</span>
              </button>
            </div>
            <div className='px-8 mt-6'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <table className='w-full border-collapse'>
              <thead className='bg-gray-100'>
                <tr className='border-b'>
                  <th className='p-3 text-left font-semibold text-gray-700'>Bill No.</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Customer</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Date</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Amount</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Status</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className='text-center py-10 text-gray-500 font-medium'>No Bills Found</td>
                </tr>
              </tbody>
            </table>
             </div>
            </div>
        </div>
        {showModal && (
          <div className='fixed inset-0 bg-black/40 flex justify-center items-center'>
            <div className='bg-white rounded-xl max-w-3xl w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto'>
              <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold text-slate-900'>Create New Bill</h2>
                <button onClick={()=> setShowModal(false)} className='text-2xl text-gray-500 hover:text-red-500'>
                  <FaTimes/>
                  </button>
              </div>
              <p className='text-gray-500 mt-2'>
                Create a new invoice for your customer.
              </p>
              <div className='grid grid-cols-2 gap-5 mt-6' >
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Customer Name</label>
                  <input type="text" placeholder='Enter customer name' 
                  className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-slate-900'/>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                  <input type="text" placeholder='Enter phone number'
                  className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-slate-900' />
                </div>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg font-semibold text-slate-900'>Products</h3>
                <p className='text-sm text-gray-500 mt-1'>Add Products to this invoice.</p>
              </div>
              <div className='grid grid-cols-5 gap-5 mt-5 '>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Product</label>
                  <input type="text" placeholder='Product name' 
                  className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-slate-900'/>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Qty</label>
                  <input type="number" placeholder='1'
                  className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-slate-900' />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Price</label>
                  <input type="number" min="0" placeholder='0'
                  className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-slate-900' />
                </div>
                <div>
                  <label className='block text-sm font-medium mb-2 text-gray-700'>Total</label>
                  <input type="text"  value="Rs. 0" readOnly
                  className='w-full border border-gray-300 bg-gray-100 px-4 py-2 rounded-lg outline-none focus:border-slate-900'/>
                </div>
                <div className='flex items-end'>
                  <button className='w-full h-[42px] bg-slate-900 text-white rounded-lg py-2 hover:bg-slate-700 transition'>Add</button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Bills;