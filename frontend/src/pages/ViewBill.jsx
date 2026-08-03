import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';

const ViewBill = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [bill, setBill] = useState(null);

    useEffect(()=>{
      const savedBills = JSON.parse(localStorage.getItem("bills")) || [];
      
      const selectedBill=savedBills[parseInt(id)];
      setBill(selectedBill);
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
            <div className='p-6'>
                <div className='flex justify-between items-center'>
                    <div>
                     <h1 className='text-3xl font-bold text-slate-900'>Bill Details</h1>
                     <p className='text-gray-500 mt-1'>View customer invoice details.</p>
                    </div>
                    <div className='flex gap-3'>
                        <button onClick={()=> navigate("/bills")}
                        className='px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition'    >Back</button>
                        <button onClick={()=>navigate(`/print-bill/${id}`)} className='px-5 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition'>Print</button>
                    </div>
                </div>
                
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
                            <div className='bg-slate-50 rounded-xl p-4 border border-gray-200'>
                                <h3 className='text-lg font-semibold text-slate-900 mb-3'>Customer Details</h3>
                                <div className='space-y-2 text-gray-700'>
                                <p><span className='font-medium mr-2'>Name: </span>{bill.customer.name}</p>
                                <p><span className='font-medium mr-2'>Phone: </span>{bill.customer.phone}</p>
                                <p><span className='font-medium mr-2'>Email: </span>{bill.customer.email}</p>
                                </div>
                            </div>
                            <div className='bg-slate-50 rounded-xl p-5 border border-gray-200'>
                                <h3 className='text-lg font-semibold text-slate-900 mb-4'>Invoice Summary</h3>
                                <div className='space-y-3 text-gray-700'>
                                <div className='flex justify-between'>
                                    <span>Total Items</span>
                                    <span>{bill.products.length}</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span>Subtotal</span>
                                        <span>Rs.{bill.subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span>GST</span>
                                        <span>Rs.{bill.gst.toFixed(2)}</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span>Discount</span>
                                        <span>Rs.{bill.discount.toFixed(2)}</span>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between text-lg font-bold text-slate-900'>
                                        <span>Grand Total</span>
                                        <span>Rs.{bill.grandTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <h3 className='text-lg font-semibold text-slate-900 mb-4'>Products</h3>
                            <div className='overflow-hidden rounded-xl border border-gray-200'>
                                <table className='w-full border-collapse'>
                                    <thead className='bg-slate-900 text-white'>
                                        <tr>
                                            <th className='px-4 py-4 text-left'>Product</th>
                                            <th className='px-4 py-4 text-center'>Qty</th>
                                            <th className='px-4 py-4 text-right'>Price</th>
                                            <th className='px-4 py-4 text-right'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bill.products.map((product, index)=>(
                                        <tr key={index} className='border-t border-gray-200 hover:bg-gray-50'>
                                            <td className='px-4 py-4'>{product.product}</td>
                                            <td className='px-4 py-4 text-center'>{product.qty}</td>
                                            <td className='px-4 py-4 text-right'>Rs.{Number(product.price).toFixed(2)}</td>
                                            <td className='px-4 py-4 text-right font-medium'>Rs. {(Number(product.qty)*Number(product.price)).toFixed(2)}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </div>
    </div>  
  )
}

export default ViewBill;