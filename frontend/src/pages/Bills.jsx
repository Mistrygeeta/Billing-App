import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import {FaPlus} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Bills = () => {
  const navigate = useNavigate();
  const [bills, setBills] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBillIndex, setSelectedBillIndex] = useState(null);
  useEffect(()=>{
    const savedBills = JSON.parse(localStorage.getItem("bills")) || [];

    setBills(savedBills);
  },[]);
  return (
    <div className='flex min-h-screen bg-gray-100'>
        <Sidebar/>
        <div className='ml-60 flex flex-1 flex-col'>
            <Navbar/>
            <div className='p-8'>
                <h1 className='text-3xl font-bold text-slate-900'>Bills</h1>
                <p className='text-gray-500 mt-1'>Create and manage customer invoices.</p>
            </div>
            <div className='px-8 flex justify-end mt-2'>
              <button onClick={()=> navigate("/create-bill")}  className='flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-700 transition'>
                <FaPlus />
                <span>Create Bill</span>
              </button>
            </div>
            <div className='grid grid-cols-3 gap-6 px-8 mt-2'>
              <div className='bg-white rounded-2xl shadow-sm p-5 border border-gray-200 hover:shadow-md transition'>
                <div className='flex justify-between items-center'>
                  <div>
                  <p className='text-gray-500 text-sm'>Total Bills</p>
                  <h2 className='text-3xl font-bold text-slate-900 mt-2'>{bills.length}</h2>
                  <p className='text-xs terx-gray-400 mt-2'>Total invoices created </p>
                  </div>
                  <div className='w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center'>

                  </div>
                </div>             
              </div>
              <div className='bg-white rounded-2xl shadow-sm p-5 border border-gray-200 hover:shadow-md transition'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-gray-500 text-sm'>Revenue</p>
                    <h2 className='text-3xl font-bold mt-2 text-green-600'>Rs.{bills.reduce((sum, bill)=> sum+ bill.grandTotal, 0).toFixed(2)}</h2>
                    <p className='text-xs text-gray-400 mt-2'>Overall earning</p>
                  </div>
                  <div className='w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center'></div>
                </div>
              </div>
              <div className='bg-white rounded-2xl shadow-sm p-5 border border-gray-200 hover:shadow-md transition'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-gray-500 text-sm'>Pending Bills</p>
                    <h2 className='text-3xl font-bold mt-2 text-orange-500'>{bills.filter(bill => bill.customer.paymentStatus === "Pending").length}</h2>
                    <p className='text-xs text-gray-400 mt-2'>Awaiting payment</p>
                   </div>
                   <div className='w-12 h-12 roundd-xl bg-orange-100 flex items-center justify-center'></div>
                </div>
              </div>
            </div>
            
            <div className='px-8 mt-6'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <table className='w-full border-collapse'>
              <thead className='bg-gray-100'>
                <tr className='border-b'>
                  <th className='p-3 text-left font-semibold text-gray-700'>Bill No.</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Customer</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Date</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Amount</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Status</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Action</th>
                </tr>
              </thead>
              <tbody>
                {bills.length>0?(
                  bills.map((bill, index)=>(
                <tr key={index} className='border-b hover:bh-gray-50'>
                  <td className='p-3' >{bill.invoiceNumber}</td>
                  <td className='p-3'>{bill.customer.name.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</td>
                  <td className='p-3'>{bill.customer.date}</td>
                  <td className='p-3'>{bill.grandTotal.toFixed(2)}</td>
                  <td className='p-3'>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium
                      ${bill.customer.paymentStatus === "Paid"? "bg-green-100 text-green-700"
                        : bill.customer.paymentStatus === "Pending"?"bg-yellow-100 text-yellow-700"
                        :"bg-red-100 text-red-700"
                      }`}>{bill.customer.paymentStatus}</span>
                  </td>
                  <td className='p-3'>Delete</td>
                </tr>))
                ):(
                  <tr>
                    <td colSpan="6" className='text-center py-10 text-gray-500 font-medium'>No Bills Found</td>
                  </tr>
                )}
              </tbody>
            </table>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Bills;