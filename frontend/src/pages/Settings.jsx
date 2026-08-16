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
                <div className='mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-6'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <h2 className='text-xl font-semibold text-slate-900'>Profile Setting</h2>
                      <p className='text-sm text-gray-500 mt-1'>Manage your personal information.</p>
                    </div>
                    <button className='border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition'>Edit</button>
                    </div>
                    <div className='grid grid-cols-3 gap-6 pt-6 border-t border-gray-200'>
                      <div>
                        <p className='text-sm text-gray-500'>Full Name</p>
                        <p className='mt-1 font-medium text-slate-900'>Geeta</p>
                      </div>
                      <div>
                        <p className='text-sm text-gray-500'>Email</p>
                        <p className='mt-1 font-medium text-slate-900'>geeta@geeta.com</p>
                      </div>
                      <div>
                        <p className='text-sm text-gray-500'>Phone Number</p>
                        <p className='mt-1 font-medium text-slate-900'>9876543210</p>
                      </div>
                    </div> 
                </div>
                <div className='mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-6'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <h2 className='text-xl font-semibold text-slate-900'>Security Settings</h2>
                      <p className='text-sm text-gray-500 mt-1'>Manage your account security</p>
                    </div>
                    <button className='border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition'>Change Password</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings;