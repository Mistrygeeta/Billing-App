import React from 'react'
import { FaFileInvoiceDollar, FaRupeeSign,FaUser } from 'react-icons/fa';

const RecentActivity = ({search}) => {

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
    ];

    const filteredActivities = activities.filter((activity) =>
      activity.title.toLowerCase().includes(search.toLowerCase()) ||
      activity.type.toLowerCase().includes(search.toLowerCase())
     );
  return (
    <div className='bg-white border border-gray-200 shadow-sm rounded-xl p-6 h-full'>
            <div>
             <h2 className='text-xl font-semibold text-slate-900'>Recent Activity</h2>
             <p className='text-sm text-gray-500 mt-1'>Latest account activities</p>
            </div>
        <div className='space-y-4'>
        {filteredActivities.map((activity)=>(
        <div key={activity.type} 
        className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition'>
              {activity.type === "invoice" &&(
            <div className='bg-blue-100 rounded-full p-3'>
                <FaFileInvoiceDollar className='text-blue-600 text-lg' />
            </div>
            )}
            {activity.type === "customer" &&(
              <div className='bg-purple-100 rounded-full p-3'>
                <FaUser className='text-purple-600 text-lg'/>
              </div>
            )}
            {activity.type === "payment" &&(
              <div className='bg-green-100 rounded-full p-3'>
                <FaRupeeSign className='text-green-600 text-lg'/>
              </div>
            )}
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