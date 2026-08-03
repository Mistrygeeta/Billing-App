import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import {FaIndianRupeeSign} from 'react-icons/fa6'
import { FaBoxOpen, FaFileInvoiceDollar, FaUsers } from 'react-icons/fa';
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const Reports = () => {
    const salesData= [
        {month: "Jan", sales: 12000},
        {month: "Feb", sales: 18000},
        {month: "Mar", sales: 15000},
        {month: "Apr", sales: 22000},
        {month: "May", sales: 28000},
        {month: "Jun", sales: 25000}
    ]
  return (
    <div className='flex min-h-screen bg-gray-100'>
        <Sidebar/>
        <div className='ml-60 flex-1'>
            <Navbar/>
            <div className='p-6'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-3xl font-bold text-slate-900'>Reports & Analytics</h1>
                        <p className='text-gray-500 mt-1'>Analyze your business performance.</p>
                    </div>
                    <button className='bg-slate-900 text-white rounded-lg px-5 py-2 hover:bg-slate-800 transition'>Export Report</button>
                </div>
            <div className='grid grid-cols-4 gap-6 mt-8'>
                <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
                   <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-gray-500 text-sm'>Total Revenue</p>
                        <h2 className='text-3xl font-bold text-slate-900'>RS.0</h2>
                        <p className='text-green-600 text-sm mt-2'>Overall Sales</p>
                    </div>
                    <div className='w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center'>
                        <FaIndianRupeeSign className='text-green-600 text-2xl'/>
                    </div>
                    </div> 
                </div>
                <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
                    <div className='flex items-center justify-between'>
                        <div>
                          <p className='text-gray-500 text-sm'>Total Bills</p>
                          <h2 className='text-3xl font-bold text-slate-900'>0</h2>
                          <p className='text-blue-600 text-sm mt-2'>Invoices Created</p>
                        </div>
                        <div className='w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center'>
                            <FaFileInvoiceDollar className='text-blue-600 text-2xl'/>
                        </div>
                    </div> 
                </div>
                <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
                    <div className='flex justify-between items-center'>
                        <div>
                          <p className='text-gray-500 text-sm'>Customers</p>
                          <h2 className='text-3xl font-bold text-slate-900'>0</h2>
                          <p className='text-purple-600 text-sm mt-2'>Registered Customers</p>
                        </div>
                        <div className='w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center'>
                         <FaUsers className='text-purple-600 text-2xl'/>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
                   <div className='flex items-center justify-between'>
                    <div>
                     <p className='text-gray-500 text-sm'>Products</p>
                     <h2 className='text-3xl font-bold text-slate-900'>0</h2>
                     <p className='text-orange-600 text-sm mt-2'>Available Products</p>
                    </div>
                    <div className='w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center'>
                      <FaBoxOpen className='text-orange-600 text-2xl'/>
                    </div>
                   </div>
                    
                </div>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-6 mt-8'>
            <div className='col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='text-xl font-bold text-slate-900'>Sales Overview</h2>
                    <select className='border border-gray-300 rounded-lg px-3 py-2 text-sm'>
                        <option value="">This Month</option>
                        <option value="">Last Month</option>
                        <option value="">This Year</option>
                    </select>
                </div>
                <div className='h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="month"/>
                            <YAxis/>
                            <Tooltip/>
                            <Bar
                            dataKey="sales"
                            fill='#0f172a'
                            radius={[8, 8, 0, 0]}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='bg-white rounded-xl shadow-sm border border-gray-200'>
                <h2 className='text-xl font-bold text-slate-900 mb-6'>Revenue Distribution</h2>
                <div className='h-80 flex items-center justify-center text-gray-400'>Pie Chart Here</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Reports;