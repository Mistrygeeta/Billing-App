import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import {FaIndianRupeeSign} from 'react-icons/fa6'
import { FaBoxOpen, FaFileInvoiceDollar, FaUsers } from 'react-icons/fa';
import {Bar, BarChart, CartesianGrid, Legend, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Pie, Cell} from 'recharts';

const Reports = () => {
    const [bills, setBills] = useState([]);

    const COLORS = ["#0f172a", "#3b82f6", "#f59e0b"];
    const months = ["Jan","Feb","Mar", "Apr","May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    useEffect(()=>{
        const savedBills = JSON.parse(localStorage.getItem("bills")) || [];
        setBills(savedBills);
    },[]);

     const paidRevenue = bills.filter((bill)=> bill.customer.paymentStatus === "Paid")
    .reduce((sum, bill)=> sum + bill.grandTotal, 0);
    const pendingRevenue = bills.filter((bill)=> bill.customer.paymentStatus === "Pending")
    .reduce((sum, bill)=> sum + bill.grandTotal, 0);
    const unpaidRevenue = bills.filter((bill)=> bill.customer.paymentStatus === "Unpaid")
    .reduce((sum, bill)=> sum + bill.grandTotal, 0);

    const revenueData = [
     { name: "Paid", value: paidRevenue },
     { name: "Pending", value: pendingRevenue },
     { name: "Unpaid", value: unpaidRevenue },
    ];

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
   
    const recentSales = bills.slice(-5).reverse();
    const productSales = {};

    bills.forEach((bill)=>{
        console.log(bill.products)
     bill.products.forEach((product)=>{
        if(productSales[product.product]){
            productSales[product.product] += Number(product.qty);
        }else{
            productSales[product.product] = Number(product.qty);
        }
     })
    });
    const topProducts = Object.entries(productSales).map(([name, sold])=>({
        name, sold,
    })).sort((a,b)=> b.sold-a.sold).slice(0, 5);

    const salesData = months.map((month, index)=>{
        const monthlySales = bills.filter((bill)=>{
            const billDate = new Date(bill.customer.date);
            return billDate.getMonth() === index;
        }).reduce((sum, bill)=> sum + bill.grandTotal, 0);
        return{
            month, sales: monthlySales,
        };
    });
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
    <div className='grid grid-cols-2 gap-6 mt-8'>
        <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
            <h2 className='text-xl font-bold text-slate-900 mb-5'>Recent Sales</h2>
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-b-gray-200 text-gray-500 text-sm'>
                            <th className="text-left pb-3">Invoice</th>
                            <th className="text-left pb-3">Customer</th>
                            <th className="text-left pb-3">Amount</th>
                            <th className="text-left pb-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentSales.map((sale, index)=>(
                        <tr key={index}
                        className='border-b border-gray-100 hover:bg-gray-100'>
                            <td className='py-4 font-medium'>{sale.invoiceNumber}</td>
                            <td>{sale.customer.name}</td>
                            <td className='py-4'>Rs.{sale.grandTotal}</td>
                            <td className='py-4'>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                    ${
                                        sale.customer.paymentStatus === "Paid"? "bg-green-100 text-green-700"
                                        : sale.customer.paymentStatus === "Pending"? "bg-yellow-100 text-yellow-700"
                                        :"bg-red-100 text-red-700"
                                    }`}>{sale.customer.paymentStatus}</span>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
            <h2 className='text-xl font-bold text-slate-900 mb-5'>Top Selling Products</h2>
            <div className='space-y-5'>
                {topProducts.map((product, index)=>(
                <div key={index}>
                    <div className='flex justify-between mb-2'>
                        <span className='font-medium'>{product.name}</span>
                        <span className='text-gray-500'>{product.sold}</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-2'>
                        <div className='bg-slate-900 h-2 rounded-full'
                        style={{width:topProducts.length > 0 ? `${(product.sold / topProducts[0].sold)* 100}%`:"0%"}}></div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Reports;