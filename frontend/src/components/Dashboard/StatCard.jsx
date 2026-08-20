import React from 'react'

const StatCard = ({ title, value, icon, change }) => {
  return (
    <div className='bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300'>
      
      <div className='flex justify-between items-start'>
        
        <div>
          <p className='text-sm font-medium text-gray-500'>
            {title}
          </p>

          <h3 className='text-2xl font-bold text-slate-900 mt-2'>
            {value}
          </h3>
        </div>

        <div className='w-11 h-11 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 text-xl'>
          {icon}
        </div>

      </div>

      <div className='mt-4 flex items-center gap-2'>
        <span className='text-sm font-medium text-green-600'>
          {change}
        </span>
        <span className='text-xs text-gray-500'>
          from last month
        </span>
      </div>

    </div>
  )
}

export default StatCard