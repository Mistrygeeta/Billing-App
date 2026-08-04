import React from 'react'

const RecentBills = () => {
  return (
    <div className='bg-white shadow-md p-6 rounded-xl'>
      <h2 className='text-xl font-semibold mb-4'>Recent Bills</h2>
      <table className='w-full'>
        <thead className='bg-gray-50'>
          <tr className='border-b' >
            <th className='text-left py-3 text-gray-500'>Invoice No</th>
            <th className='text-left py-3  text-gray-500'>Customer</th>
            <th className='text-left py-3  text-gray-500'>Amount</th>
            <th className='text-left py-3  text-gray-500'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b hover:bg-gray-50'>
            <td className='py-3'>INV001</td>
            <td className='py-3'>Rahul</td>
            <td className='py-3'>INR 500</td>
            <td className='py-3'>
              <span className='bg-green-100 text-green-700 rounded-full py-1 px-3 text-sm font-medium'>Paid</span>
              </td>
          </tr>
          <tr className='border-b hover:bg-gray-50'>
            <td className='py-3'>INV002</td>
            <td className='py-3'>Aman</td>
            <td className='py-3'>INR 200</td>
            <td className='py-3'>
              <span className='bg-yellow-100 text-yellow-700 rounded-full py-1 px-3 text-sm font-medium'>Pending</span>
              </td>
          </tr>
          <tr className='border-b hover:bg-gray-50'>
            <td className='py-3'>INV003</td>
            <td className='py-3'>Mukesh</td>
            <td className='py-3'>INR 1200</td>
            <td className='py-3'>
              <span className='bg-red-100 text-red-700 rounded-full py-1 px-3 text-sm font-medium'>Unpaid</span>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecentBills;