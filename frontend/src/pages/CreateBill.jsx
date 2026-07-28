import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

const CreateBill = () => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar/>
      <div className='ml-60 flex-1 flex flex-col'>
        <Navbar/>
        <div className='p-8'>
          <h1 className='text-3xl font-bold text-slate-900'>Create New Bill</h1>
          <p className='text-gray-500 mt-1'>Create invoice for your customer.</p>
          <div className='mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
            <h2 className='text-xl font-semibold text-slate-900'>Customer & Invoice Information</h2>
            <p className='text-sm text-gray-500 mt-1'>Enter customer and invoice details</p>
             <div className='grid grid-cols-3 gap-6 mt-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Customer Name</label>
                <input type="text" placeholder='Enter customer name'
                className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                <input type="text" placeholder='Enter phone number'
                className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Invoice Date</label>
                <input type="date" className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900'/>
              </div>
              <div>
                <label className='block text-sm font-medium mb-2 text-gray-700'>Email</label>
                <input type="email" placeholder='Enter email'
                className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900'/>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Payment Status</label>
                <select className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900'>
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>Overdue</option>
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Invoice No.</label>
                <input type="text" value="INV-001" readOnly 
                className='w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2.5 '/>
              </div>
             </div>
             </div>
             <div className='mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
              <div className='flex justify-between items-center'>
                <div>
                  <h2 className='text-xl font-semibold text-slate-900'>Products</h2>
                  <p className='text-sm text-gray-500 mt-1'>Add Products to this invoice.</p>
                </div>
                <button className='bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-700 transition'>+ Add Product</button>
              </div>
              <div className='mt-6 overflow-x-auto'>
                <table className='w-full border-collapse'>
                  <thead>
                    <tr className='bg-gray-100 border-b'>
                      <th className='p-3 text-left text-sm font-semibold'>Product</th>
                      <th className='p-3 text-left text-sm font-semibold'>Qty</th>
                      <th className='p-3 text-left text-sm font-semibold'>Price</th>
                      <th className='p-3 text-left text-sm font-semibold'>Discount</th>
                      <th className='p-3 text-left text-sm font-semibold'>Total</th>
                      <th className='p-3 text-left text-sm font-semibold'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <td colSpan="6" className='text-center py-8 text-gray-400'>No Product yet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div className='mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
                <h2 className='text-xl font-semibold text-slate-900 mb-6'>Bill Summary</h2>
                <div className='max-w-sm ml-auto space-y-4 '>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Subtotal</span>
                    <span className='font-medium'>Rs.0.00</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Discount</span>
                    <span className='font-medium'>Rs.0.00</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>GST (18%)</span>
                    <span className='font-medium'>Rs.0.00</span>
                  </div>
                  <hr />
                  <div className='flex justify-between text-xl font-bold text-slate-900'>
                    <span>Grand Total</span>
                    <span>Rs.0.00</span>
                  </div>
                </div>
                <div className='flex justify-end gap-4 mt-6 mb-8'>
                  <button className='px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition'>Cancel</button>
                  <button className='px-8 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition'>Save Bill</button>
                </div>
              </div>
             </div>
          </div>
          </div>
  )
}

export default CreateBill;