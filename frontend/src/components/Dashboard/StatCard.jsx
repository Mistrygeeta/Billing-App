import React from 'react'

const StatCard = ({title, value, icon}) => {
  return (
    <div className='bg-white shadow-md rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-all duration-300 '>
      <div className='text-3xl text-blue-600'>{icon}</div>
      <div>
        <h3 className='text-gray-500 text-sm'>{title}</h3>
        <p className='text-2xl  font-bold text-gray-700'>{value}</p>
      </div>
    </div>
  )
}

export default StatCard;