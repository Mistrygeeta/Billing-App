import React from 'react'
import { FaFileInvoiceDollar, FaRupeeSign, FaUser } from 'react-icons/fa';

const RecentActivity = () => {
  return (
    <div className='bg-white border border-gray-200 shadow-sm rounded-xl p-6 h-full'>
            <div>
             <h2 className='text-xl font-semibold text-slate-900'>Recent Activity</h2>
             <p className='text-sm text-gray-500 mt-1'>Latest account activities</p>
            </div>
        <div className='space-y-4'>
        <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition'>
            <div className='bg-blue-100 rounded-full p-3'>
                <FaFileInvoiceDollar className='text-blue-600 text-lg' />
            </div>
            <div className='flex-1'>
                <h3 className='font-medium text-gray-800'>Invoice Created</h3>
                <p className='text-sm text-gray-500 mt-1'>2 minutes ago</p>
            </div>
        </div>
        <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition'>
            <div className='bg-purple-100 p-3 rounded-full'>
                <FaUser className='text-purple-600 text-lg' />
            </div>
            <div className='flex-1'>
                <h3 className='font-medium text-gray-800'>New Customer Added</h3>
                <p className='text-sm text-gray-500 mt-1'>10 minutes ago</p>
            </div>
        </div>
        <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition'>
            <div className='bg-green-100 p-3 rounded-full '>
                <FaRupeeSign className='text-green-600 text-lg' />
            </div>
            <div className='flex-1'>
                <h3 className='font-medium text-gray-800'>Payment Received</h3>
                <p className='text-sm text-gray-500 mt-1'>25 minutes ago</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default RecentActivity;