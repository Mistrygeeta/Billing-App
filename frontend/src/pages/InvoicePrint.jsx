import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';

const InvoicePrint = () => {
    const{id}= useParams();
    const [bill, setBill] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
     const savedBills = JSON.parse(localStorage.getItem("bills")) || [];
     setBill(savedBills[parseInt(id)]);
    },[id]);

    useEffect(()=>{
        if(bill){
         const timer = setTimeout(()=>{
                window.print();
            },300);
            return()=> clearTimeout(timer);
        }
    },[bill]);

    useEffect(()=>{
        const handleAfterPrint = ()=>{
            navigate(`/view-bill/${id}`);
        };

        window.addEventListener("afterprint", handleAfterPrint);
        return()=>{
            window.removeEventListener("afterprint", handleAfterPrint)
        }
    },[ navigate, id]);

    useEffect(()=>{
        const oldTitle = document.title;
        document.title = "Invoice";

        return()=>{
            document.title = oldTitle;
        }
    },[]);

    if(!bill){
        return <div className='flex justify-center items-center h-screen'>
         <h2 className='text-xl font-semibold'>Bill Not Found</h2>
         </div>
    }
  return (
    <div className='max-w-4xl mx-auto bg-white p-10 shadow-lg rounded-lg'>
        <div className='flex justify-between items-center border-b-2 border-gray-300 pb-6'>
            <div className='flex items-center gap-4'>
                <img src="/logo.png" alt="BillPro Logo" className='w-16 h-16' />
            <div>
            <h1 className='text-3xl font-bold text-slate-900 mt-2'>BillPro Store</h1>
            <p className='text-gray-600'>123, Main Market, Bhopal, Madhya Pradesh</p>
            <p className='text-gray-600'>Phone: +91 9876543210</p>
            <p className='text-gray-600'>GSTIN: 23ABCDE12345F1Z5</p>
            </div>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-12 mt-8'>
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
                            <th className='border border-gray-300 px-4 py-4 text-left'>Product</th>
                            <th className='border border-gray-300 px-4 py-4 text-center'>Qty</th>
                            <th className='border border-gray-300 px-4 py-4 text-right'>Price</th>
                            <th className='border border-gray-300 px-4 py-4 text-right'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bill.products.map((product, index)=>(
                         <tr key={index}>
                            <td className='border border-gray-300 px-4 py-4'>{product.product}</td>
                            <td className='border border-gray-300 px-4 py-4 text-center'>{product.qty}</td>
                            <td className='border border-gray-300 px-4 py-4 text-right'>Rs.{Number(product.price).toFixed(2)}</td>
                            <td className='border border-gray-300 px-4 py-4 text-right'>Rs.{(Number(product.qty) * Number(product.price)).toFixed(2)}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>  
            <div className='flex justify-end mt-10'>
                <div className='w-80'>
                    <div className='flex justify-between py-2 border-b'>
                        <span>Subtotal</span>
                        <span>Rs.{bill.subtotal.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between py-2 border-b'>
                        <span>GST</span>
                        <span>Rs.{bill.gst.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between py-2 border-b'>
                        <span>Discount</span>
                        <span>Rs.{bill.discount.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between py-3 px-3 mt-2 bg-slate-900 text-white rounded-lg text-xl font-bold'>
                        <span>Grand Total</span>
                        <span>Rs.{bill.grandTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div className='mt-10 text-center text-gray-600'>
                <p className='text-lg font-semibold'>Thank You For Your Business!</p>
                <p className='text-sm mt-2'>We appreciate your trust in BillPro Store.</p>
            </div>
            <div className='flex justify-end mt-16'>
                <div className='text-center'>
                    <div className='border-t border-gray-500 w-48'></div>
                        <p className='mt-2 font-medium'>Authorized Signature</p> 
                </div>
            </div>
    </div>
  )
}

export default InvoicePrint;