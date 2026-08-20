import React from 'react'
import { Link } from 'react-router-dom';
const RecentBills = () => {
  return (
    <div className='bg-white border border-gray-200 shadow-sm p-6 rounded-xl'>
      <div className='flex justify-between items-center mb-5'>
        <div>
         <h2 className='text-xl font-semibold text-slate-900'>Recent Bills</h2>
         <p className='text-sm text-gray-500 mt-1'>Latest invoices and payment status</p>
        </div>
        <Link to="/bills" className='px-4 py-2 text-sm font-medium text-slate-700 border border-gray-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition'>View All</Link>
      </div>  
      
      <table className='w-full'>
        <thead className='bg-slate-50'>
          <tr className='border-b' >
            <th className='text-left px-3 py-3 text-sm font-semibold text-gray-600'>Invoice No</th>
            <th className='text-left px-3 py-3 text-sm font-semibold text-gray-600'>Customer</th>
            <th className='text-left px-3 py-3 text-sm font-semibold text-gray-600'>Amount</th>
            <th className='text-left px-3 py-3 text-sm font-semibold text-gray-600'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b border-gray-100 hover:bg-gray-50 transition'>
            <td className='px-3 py-4 text-sm font-medium text-slate-900'>INV001</td>
            <td className='px-3 py-4 text-sm text-gray-700'>Rahul</td>
            <td className='px-3 py-4 text-sm text-gray-700'>INR 500</td>
            <td className='px-3 py-4 text-sm text-gray-700'>
              <span className='bg-green-100 text-green-700 rounded-full py-1 px-3 text-sm font-medium'>Paid</span>
              </td>
          </tr>
          <tr className='border-b border-gray-100 hover:bg-gray-50 transition'>
            <td className='px-3 py-4 text-sm font-medium text-slate-900'>INV002</td>
            <td className='px-3 py-4 text-sm text-gray-700'>Aman</td>
            <td className='px-3 py-4 text-sm text-gray-700'>INR 200</td>
            <td className='px-3 py-4 text-sm text-gray-700'>
              <span className='bg-yellow-100 text-yellow-700 rounded-full py-1 px-3 text-sm font-medium'>Pending</span>
              </td>
          </tr>
          <tr className='border-b border-gray-100 hover:bg-gray-50 transition'>
            <td className='px-3 py-4 text-sm font-medium text-slate-900'>INV003</td>
            <td className='px-3 py-4 text-sm text-gray-700'>Mukesh</td>
            <td className='px-3 py-4 text-sm text-gray-700'>INR 1200</td>
            <td className='px-3 py-4 text-sm text-gray-700'>
              <span className='bg-red-100 text-red-700 rounded-full py-1 px-3 text-sm font-medium'>Unpaid</span>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecentBills;