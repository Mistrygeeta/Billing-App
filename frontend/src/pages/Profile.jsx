import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar  from '../components/Navbar/Navbar'
const Profile = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState("Geeta Mistry");
  const [email, setEmail] = useState("geeta@geeta.com");
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);

  return (
    <div className='min-h-screen bg-gray-100 flex'>
        <Sidebar/>
        <div className='ml-60 flex-1'>
            <Navbar/>
            <div className='p-6'>
                <h1 className='text-3xl font-bold text-slate-900'>My Profile</h1>
                <p className='text-gray-500 mt-1'>Manage your profile information</p>
               <div className='bg-white border border-gray-200 rounded-xl shadow-sm p-6 mt-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-5'>
                    <div className='w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center'>
                      <span className='text-3xl font-semibold'>G</span>
                    </div>
                    <div>
                      <h2 className='text-2xl font-semibold text-slate-900'>{name}</h2>
                      <p className='text-gray-500 mt-1'>Admin</p>
                      <p className='text-sm text-gray-400 mt-1'>{email}</p>
                    </div>
                  </div>
                  <button onClick={()=> {setEditName(name);
                  setEditEmail(email);
                  setShowEdit(true)}} className='px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition'>Edit Profile</button>
                </div>
               </div>
               <div className='bg-white border border-gray-200 rounded-xl shadow-sm p-6 mt-6'>
                <h2 className='text-xl font-semibold text-slate-900'>Personal Information</h2>
                <p className='text-sm text-gray-500 mt-1'>your basic account information</p>
                <div className='grid grid-cols-2 gap-6 mt-6'>
                  <div>
                    <label className='text-sm font-medium text-gray-600'>Full Name</label>
                    <p className='mt-2 text-slate-900 font-medium'>{name}</p>
                  </div>
                  <div>
                    <label className='text-sm font-medium text-gray-600'>Email Address</label>
                    <p className='mt-2 text-slate-900 font-medium'>{email}</p>
                  </div>
                  <div>
                    <label className='text-sm font-medium text-gray-600'>Role</label>
                    <p className='mt-2 text-slate-900 font-medium'>Admin</p>
                  </div>

                </div>
               </div>
               <div className='bg-white border border-gray-200 rounded-xl shadow-sm p-6 mt-6'>
                <h2 className='text-xl font-semibold text-slate-900'>Account Information</h2>
                <p className='text-sm text-gray-500 mt-1'>Information about your account</p>
                <div className='grid grid-cols-2 gap-6 mt-6'>
                  <div>
                    <label className='text-sm font-medium text-gray-600'>Account Type</label>
                    <p className='mt-2 text-slate-900 font-medium'>Admin</p>
                  </div>
                  <div>
                    <label className='text-sm font-medium text-gray-600'>Account Status</label>
                    <p className='mt-2 w-fit px-3 py-1 rounded-full text-sm text-green-700 bg-green-100 font-medium'>Active</p>
                  </div>
                  <div>
                    <label className='text-sm font-medium text-gray-600'>Member Since</label>
                    <p className='mt-2 text-slate-900 font-medium'>August 2026</p>
                  </div>
                  <div>
                    <label className='text-sm font-medium text-gray-600'>Last Login</label>
                    <p className='mt-2 text-slate-900 font-medium'>Today</p>
                  </div>
                </div>
               </div>
                {showEdit && (
            <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
              <div className='bg-white w-full max-w-md rounded-xl shadow-xl p-6'>

                <div className='flex justify-between items-center mb-6'>
                  <div>
                    <h2 className='text-xl font-semibold text-slate-900'>
                      Edit Profile
                    </h2>
                    <p className='text-sm text-gray-500 mt-1'>
                      Update your profile information
                    </p>
                  </div>

                  <button
                    onClick={() => setShowEdit(false)}
                    className='text-gray-400 hover:text-gray-700 text-xl'
                  >
                    ✕
                  </button>
                </div>

                <div className='space-y-4'>
                  <div>
                    <label className='text-sm font-medium text-gray-600'>
                      Full Name
                    </label>

                    <input
                      type='text'
                      value={editName}
                      onChange={(e)=> setEditName(e.target.value)}
                      className='w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-slate-300'
                    />
                  </div>

                  <div>
                    <label className='text-sm font-medium text-gray-600'>
                      Email Address
                    </label>

                    <input
                      type='email'
                      value={editEmail}
                      onChange={(e)=> setEditEmail(e.target.value)}
                      className='w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-slate-300'
                    />
                  </div>
                </div>

                <div className='flex justify-end gap-3 mt-6'>
                  <button
                    onClick={() =>setShowEdit(false)}
                    className='px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50'
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() =>{setName(editName);
                    setEmail(editEmail); 
                    setShowEdit(false)}}
                    className='px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700'
                  >
                    Save Changes
                  </button>
                </div>

              </div>
            </div>
          )}
            </div>
        </div>
    </div>
  )
}

export default Profile;