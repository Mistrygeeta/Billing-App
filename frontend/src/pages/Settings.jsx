import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

const Settings = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
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
                      <h2 className='text-xl font-semibold text-slate-900'>Profile Settings</h2>
                      <p className='text-sm text-gray-500 mt-1'>Manage your personal information.</p>
                    </div>
                    {isEditingProfile ?(
                      <div className='flex gap-2'>
                        <button className='bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition'>Save</button>
                        <button onClick={()=> setIsEditingProfile(false)}
                          className='border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100  transition'>Cancel</button>
                      </div>
                    ):(
                      <button onClick={()=> setIsEditingProfile(true)} 
                    className='border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition'>Edit</button>
                    )}
                    
                    </div>
                    <div className='grid grid-cols-3 gap-6 pt-6 border-t border-gray-200'>
                      <div>
                        <p className='text-sm text-gray-500'>Full Name</p>
                        {isEditingProfile ? (
                          <input type="text" defaultValue="Geeta" 
                          className='mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 outline-none'/>
                        ):(
                          <p className='mt-1 font-medium text-slate-900'>Geeta</p>
                        )}                        
                      </div>
                      <div>
                        <p className='text-sm text-gray-500'>Email</p>
                        {isEditingProfile ?(
                          <input type="email" defaultValue="geeta@geeta.com"
                          className='mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 outline-none'/>
                        ):(
                         <p className='mt-1 font-medium text-slate-900'>geeta@geeta.com</p>
                        )}
                      </div>
                      <div>
                        <p className='text-sm text-gray-500'>Phone Number</p>
                        {isEditingProfile ? (
                          <input type="text" defaultValue="9876543210" 
                          className='mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 outline-none'/>
                        ):(
                          <p className='mt-1 font-medium text-slate-900'>9876543210</p>
                        )}                        
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
                <div className='mt-6 bg-white border border-gray-200 shadow-sm rounded-2xl p-6'>
                  <div>
                    <h2 className='text-xl font-semibold text-slate-900'>Notification Settings</h2>
                    <p className='text-sm text-gray-500 mt-1'>Manage your notification preferences.</p>
                  </div>
                  <div className='mt-6 space-y-4'>
                    <div className='flex justify-between items-center'>
                      <div>
                        <p className='font-medium text-slate-900'>Payment Reminders</p>
                        <p className='text-sm text-gray-500'>Get reminders for pending payments.</p>
                      </div>
                      <input type="checkbox" className='w-5 h-5'/>
                    </div>
                    <div className='flex justify-between items-center'>
                      <div>
                        <p className='font-medium text-slate-900'>New Bill Notifications</p>
                        <p className='text-sm text-gray-500'>Get notified when a new bill is created.</p>
                      </div>
                      <input type="checkbox" className='w-4 h-4'/>
                    </div>
                    <div className='flex justify-between items-center'>
                      <div>
                        <p className='font-medium text-slate-900'>Low Stock Alerts</p>
                        <p className='text-sm text-gray-500'>Get alerts when product stock is low</p>
                      </div>
                      <input type="checkbox" className='w-4 h-4'/>
                    </div>
                  </div>
                  </div>
                  <div className='mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-6'>
                    <div>
                      <h2 className='text-xl font-semibold text-slate-900'>Appearance Settings</h2>
                      <p className='text-sm text-gray-500 mt-1'>Customize how BillPro looks and works.</p>
                    </div>
                    <div className='mt-6 flex justify-between items-center'>
                      <div>
                        <p className='font-medium text-slate-900'>Theme</p>
                        <p className='text-sm text-gray-500'>Choose your preferred theme.</p>
                      </div>
                      <select className='border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300'>
                        <option>Light</option>
                        <option>Dark</option>
                      </select>
                    </div>
                    <div className='mt-5 flex justify-between items-center'>
                      <div>
                        <p className='font-medium text-slate-900'>Language</p>
                        <p className='text-sm text-gray-500'>Choose your preferred language.</p>
                      </div>
                      <select className='border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300'>
                        <option>English</option>
                        <option>Hindi</option>
                      </select>
                    </div>
                  </div>
                  <div className='mt-6 bg-white rounded-2xl border border-red-200 shadow-sm p-6'>
                    <div className='flex justify-between items-center'>
                      <div>
                        <h2 className='text-xl font-semibold text-red-600'>Danger Zone</h2>
                        <p className='text-xm text-gray-500 mt-1'>Manage sensitive account actions.</p>
                      </div>
                    </div>
                    <div className='mt-6 pt-5 border-t border-gray-200 flex justify-between items-center'>
                      <div>
                        <p className='font-medium text-slate-900'>Delete Account</p>
                        <p className='text-sm text-gray-500'>Permanently delete your BillPro account and all associated data.</p>
                      </div>
                      <button className='border border-red-300 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition'>Delete Account</button>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Settings;