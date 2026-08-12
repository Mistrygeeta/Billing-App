import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

const Settings = () => {
  return (
    <div className='flex min-h-screen bg-gray-100 '>
        <Sidebar/>
        <div className='ml-60 flex flex-1 flex-col'>
            <Navbar/>
            <div className='p-8'>
                <div>
                <h1 className='text-3xl font-bold text-slate-900'>Settings</h1>
                <p className='text-gray-500 mt-1'>Manage Your BillPro settings and preferences.</p>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Settings;