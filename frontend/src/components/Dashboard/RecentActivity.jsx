import React from 'react'
import { FaFileInvoiceDollar, FaRupeeSign, FaUser } from 'react-icons/fa';

const RecentActivity = () => {

    const activities = [
        {
      title: "Invoice Created",
      time: "2 minutes ago",
      type: "invoice",
    },
    {
      title: "New Customer Added",
      time: "10 minutes ago",
      type: "customer",
    },
    {
      title: "Payment Received",
      time: "25 minutes ago",
      type: "payment",
    },
    ]
  return (
    <div className='bg-white border border-gray-200 shadow-sm rounded-xl p-6 h-full'>
            <div>
             <h2 className='text-xl font-semibold text-slate-900'>Recent Activity</h2>
             <p className='text-sm text-gray-500 mt-1'>Latest account activities</p>
            </div>
        <div className='space-y-4'>
        {activities.map((activity)=>(
        <div key={activity.type} 
        className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition'>
            <div className='bg-blue-100 rounded-full p-3'>
                <FaFileInvoiceDollar className='text-blue-600 text-lg' />
            </div>
            <div className='flex-1'>
                <h3 className='font-medium text-gray-800'>{activity.title}</h3>
                <p className='text-sm text-gray-500 mt-1'>{activity.time}</p>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default RecentActivity;