import React from 'react'
import { CartesianGrid, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line } from 'recharts'

const RevenueChart = () => {
    const data = [
        {month: "Jan", revenue: 12000},
        {month: "Feb", revenue: 18000},
        {month: "Mar", revenue: 15000},
        {month: "Apr", revenue: 10000},
        {month: "May", revenue: 22000},
        {month: "Jun", revenue: 20000},
    ]
  return (
    <div className='bg-white rounded-xl border border-gray-200 shadow-sm p-6'>
        <div className='flex justify-between items-center mb-5'>
            <div>
                <h2 className='text-lg font-semibold text-slate-900'>Revenue Overview</h2>
                <p className='text-sm text-gray-500'>Monthly revenue performance</p>
            </div>
            <select className='border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none'>
                <option>Last 6 Months</option>
                <option>This Year</option>
            </select>
        </div>
        <div className='w-full h-60'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="month"
                    axisLine={false}
                    tickLine={false}/>
                    <YAxis axisLine={false}
                    tickLine={false}/>
                    <Tooltip/>
                    <Line type="monotone"
                    dataKey="revenue"
                    strokeWidth={3}
                    dot={{ r: 4}}
                    activeDot={{r: 6}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default RevenueChart