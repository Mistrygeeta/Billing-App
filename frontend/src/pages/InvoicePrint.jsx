import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';

const InvoicePrint = () => {
    const{id}= useParams();
    const [bill, setBill] = useState(null);

    useEffect(()=>{
     const savedBills = JSON.parse(localStorage.getItem("bills")) || [];
     setBill(savedBills[parseInt(id)]);
    },[id]);

    if(!bill){
        return <div className='flex justify-center items-center h-screen'>
         <h2 className='text-xl font-semibold'>Bill Not Found</h2>
         </div>
    }
  return (
    <div className='max-w-4xl mx-aut bg-white p-10'>
        <div className='text-center border-b-2 border-gray-300 pb-6'>
            <h1 className='text-4xl font-bold text-slate-900 mt-2'>BillPro Store</h1>
            <p className='text-gray-600'>123, Main Market, Bhopal, Madhya Pradesh</p>
            <p className='text-gray-600'>Phone: +91 9876543210</p>
            <p className='text-gray-600'>GSTIN: 23ABCDE12345F1Z5</p>
        </div>
        <div className='grid grid-cols-2 gap-8 mt-8'>
            <div>
                <h2 className='text-lg font-semibold border-b pb-2 mb-3'>Bill To</h2>
                <p><span className='font-medium'>Name: </span>{bill.customer.name}</p>
                <p><span className='font-medium'>Phone: </span>{bill.customer.phone}</p>
                <p><span className='font-medium'>Email: </span>{bill.customer.email}</p>
            </div>
            <div className='text-right'>
                <h2 className='text-lg font-semibold border-b pb-2 mb-3'>Invoice Details</h2>
                <p><span className='font-medium'>Invoice No.: </span>{" "}
                {bill.invoiceNumber}</p>
                <p><span className='font-medium'>Date: </span>{" "}
                {new Date(bill.customer.date).toLocaleDateString("en-IN")}</p>
                <p><span className='font-medium'>Payment: </span>{" "}
                {bill.customer.paymentStatus}</p>
            </div>
        </div>
            <div className='mt-10'>
                <table className='w-full border border-gray-300 border-collapse'>
                    <thead>
                        <tr className='bg-slate-900 text-white'>
                            <th className='border border-gray-300 px-4 py-3 text-left'>Product</th>
                            <th className='border border-gray-300 px-4 py-3 text-center'>Qty</th>
                            <th className='border border-gray-300 px-4 py-3 text-right'>Price</th>
                            <th className='border border-gray-300 px-4 py-3 text-right'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bill.products.map((product, index)=>(
                         <tr key={index}>
                            <td className='border border-gray-300 px-4 py-3'>{product.product}</td>
                            <td className='border border-gray-300 px-4 py-3 text-center'>{product.qty}</td>
                            <td className='border border-gray-300 px-4 py-3 text-right'>Rs.{Number(product.price).toFixed(2)}</td>
                            <td className='border border-gray-300 px-4 py-3 text-right'>Rs.{Number(product.qty)*Number(product.price).toFixed(2)}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
       
    </div>
  )
}

export default InvoicePrint;