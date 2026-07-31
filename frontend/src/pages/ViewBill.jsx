import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const ViewBill = () => {
    const {id} = useParams();
    const [bill, setBill] = useState(null);
    useEffect(()=>{
      const savedBills = JSON.parse(localStorage.getItem("bills")) || [];
      
      setBill(savedBills[parseInt(id)]);
    },[id]);

    if(!bill){
        return(
            <div className='flex justify-center items-center h-screen'>
                <h2 className='text-xl font-semibold text-gray-500'>Bill Not Found</h2>
            </div>
        )
    };
  return (
    <div className='flex min-h-screen bg-gray-100'>
        <Sidebar/>
        <div className='ml-60 flex-1'>
            <Navbar/>
            <div className='p-8'>
                <h1 className='text-3xl font-bold text-slate-900'>Bill Details</h1>
                <p className='text-gray-500 mt-1'>View customer invoice details.</p>
                <div className='bg-white rounded-xl shadow-sm border border-gray-200 mt-6 p-8'>
                        <div className='flex justify-between items-start border-b border-gray-200 pb-6'>
                            <div>
                                <h2 className='text-2xl font-bold text-slate-900'>Invoice # {bill.invoiceNumber}</h2>
                                <p className='text-gray-500 mt-2'>Date: {new Date(bill.customer.date).toLocaleDateString("en-IN")}</p>
                            </div>
                            <span className={`px-4 py-2 rounded-full text-sm font-semibold 
                                ${bill.customer.paymentStatus === "Paid"?
                                    "bg-green-100 text-green-700":
                                    bill.customer.paymentStatus === "Pending"?
                                    "bg-yellow-100 text-yellow-700"
                                    :"bg-red-100 text-red-700"
                                }`}>{bill.customer.paymentStatus}</span>
                        </div>
                        <div className='grid grid-cols-2 gap-6 mt-6'>
                            <div className='bg-slate-50 rounded-xl p-5 border border-gray-200'>
                                <h3 className='text-lg font-semibold text-slate-900 mb-4'>Customer Details</h3>
                                <div className='space-y-2 text-gray-700'>
                                <p><span className='font-medium'>Name:</span>{bill.customer.name}</p>
                                <p><span className='font-medium'>Phone:</span>{bill.customer.phone}</p>
                                <p><span className='font-medium'>Email:</span>{bill.customer.email}</p>
                                </div>
                            </div>
                            <div className='bg-slate-50 rounded-xl p-5 border border-gray-200'>
                                <h3 className='text-lg font-semibold text-slate-900 mb-4'>Invoice Summary</h3>
                                <div className='space-y-2 text-gray-700'>
                                <p><span className='font-medium'>Total Items: </span>{bill.products.length}</p>
                                <p><span className='font-medium'>Subtotal: </span>RS.{bill.grandTotal.toFixed(2)}</p>
                                <p><span className='font-medium'>GST: </span>RS.{bill.gst.toFixed(2)}</p>
                                <p><span className='font-medium'>Discount: </span>Rs.{bill.discount.toFixed(2)}</p>
                                 <hr className='my-2' />
                                 <p className='text-lg font-bold text-slate-900'>Grand Total: Rs.{bill.grandTotal.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ViewBill;