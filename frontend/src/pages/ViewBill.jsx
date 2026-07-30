import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const ViewBill = () => {
    const {id} = useParams();
    const [bill, setBill] = useState(null);
    useEffect(()=>{
      const savedBills = JSON.parse(localStorage.getItem("bills")) || [];
      setBill(savedBills[parseInt[id]]);
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
                    <h2 className='text-xl font-semibold'>Invoice Preview</h2>
                    <p className='text-gray-500 mt-2'>Bill Details will appear here.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBill;