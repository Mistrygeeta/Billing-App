import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar  from '../components/Navbar/Navbar'
const Profile = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex'>
        <Sidebar/>
        <div className='ml-60 flex-1'>
            <Navbar/>
            <div className='p-6'>
                <h1 className='text-3xl font-bold text-slate-900'>My Profile</h1>
                <p className='text-gray-500 mt-1'>Manage your profile information</p>
            </div>
        </div>
    </div>
  )
}

export default Profile;