import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import {FaIndianRupeeSign} from 'react-icons/fa6'
import { FaBoxOpen, FaFileInvoiceDollar, FaUsers } from 'react-icons/fa';
import {Bar, BarChart, CartesianGrid, Legend, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Pie, Cell} from 'recharts';

const Reports = () => {
    const [bills, setBills] = useState([]);
    const salesData= [
        {month: "Jan", sales: 12000},
        {month: "Feb", sales: 18000},
        {month: "Mar", sales: 15000},
        {month: "Apr", sales: 22000},
        {month: "May", sales: 28000},
        {month: "Jun", sales: 25000}
    ];

    const revenueData = [
        {name: "Products", value: 55},
        {name: "Services", value: 25},
        {name: "Others", value: 20},
    ];

    const COLORS = ["#0f172a", "#3b82f6", "#f59e0b"];
    
    const recentSales = [
        {
    invoice: "INV-101",
    customer: "Rahul Sharma",
    amount: 2500,
    status: "Paid",
  },
  {
    invoice: "INV-102",
    customer: "Priya Verma",
    amount: 1800,
    status: "Pending",
  },
  {
    invoice: "INV-103",
    customer: "Amit Singh",
    amount: 3200,
    status: "Paid",
  },
  {
    invoice: "INV-104",
    customer: "Neha Patel",
    amount: 1450,
    status: "Unpaid",
  },
];

    useEffect(()=>{
        const savedBills = JSON.parse(localStorage.getItem("bills")) || [];
        setBills(savedBills);
    },[]);

    const totalRevenue = bills.reduce(
        (sum, bill) => sum + bill.grandTotal,
        0
    );

    const totalBills = bills.length;
    const totalCustomers = new Set(
        bills.map((bill)=> bill.customer.phone)
    ).size;
    const totalProducts = bills.reduce(
        (sum, bill)=> sum + bill.products.length,
        0
    );
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
                        <h2 className='text-3xl font-bold text-slate-900'>RS{totalRevenue.toFixed(2)}</h2>
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
                          <h2 className='text-3xl font-bold text-slate-900'>{totalBills}</h2>
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
                          <h2 className='text-3xl font-bold text-slate-900'>{totalCustomers}</h2>
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
                     <h2 className='text-3xl font-bold text-slate-900'>{totalProducts}</h2>
                     <p className='text-orange-600 text-sm mt-2'>Available Products</p>
                    </div>
                    <div className='w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center'>
                      <FaBoxOpen className='text-orange-600 text-2xl'/>
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
                        <BarChart data={salesData}
                        barCategoryGap="30%">
                            <CartesianGrid stroke='#e5e7eb'
                            strokeDasharray="2 2"
                            vertical={false}/>
                            <XAxis dataKey="month"
                            axisLine={false}
                            tickLine={false}/>
                            <YAxis axisLine ={false}
                            tickLine={false}/>
                            <Tooltip cursor={{
                                fill: "transparent",
                                stroke: "#cbd5e1",
                                strokeWidth: 1,
                            }}/>
                            <Bar
                            dataKey="sales"
                            fill='#0f172a'
                            radius={[8, 8, 0, 0]}
                            barSize={40}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
                <h2 className='text-xl font-bold text-slate-900 mb-6'>Revenue Distribution</h2>
                <div className='h-80'>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={revenueData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label ={false}>
                            {revenueData.map((entry, index)=>(
                                <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip/>
                        <Legend/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Reports;