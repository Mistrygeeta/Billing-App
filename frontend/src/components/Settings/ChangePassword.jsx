import React, { useState } from 'react'

const ChangePassword = ({onCancel}) => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault()

        if(!currentPassword || !newPassword || !confirmPassword){
            alert ("please fill all fields")
            return
        }
        if(newPassword !== confirmPassword){
            alert("new password and confirm password do not match")
            return
        }
        console.log({
            currentPassword,
            newPassword,
            confirmPassword
        });
        onCancel();
    }
  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
        <div className='bg-white w-full max-w-md rounded-2xl shadow-xl p-6'>
            <div className='flex justify-between items-center'>
                <div>
                <h3 className='text-lg font-semibold text-slate-900'>Change Password</h3>
                <p className='text-sm text-gray-500 mt-1'>Update your password.</p>
                </div>
                <button onClick={onCancel}
                className='text-gray-500 hover:text-gray-900 text-xl'>✕</button>
            </div>
            <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
                <div>
                    <label className='block text-sm font-medium text-slate-700 mb-1'>Current Password</label>
                    <input type="password" value={currentPassword}
                    onChange={(e)=> setCurrentPassword(e.target.value)} placeholder='Enter Current Password' 
                    className='w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>
                <div>
                    <label className='block text-sm font-medium text-slate-700 mb-1'>New Password</label>
                    <input type="password" value={newPassword}
                    onChange={(e)=> setNewPassword(e.target.value)} placeholder='Enter New Password'
                    className='w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>
                <div>
                    <label className='block text-sm font-medium text-slate-700 mb-1'>Confirm Password</label>
                    <input type="password" value={confirmPassword}
                    onChange={(e)=> setConfirmPassword(e.target.value)} placeholder='Enter Confirm Password'
                    className='w-full border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <div className='flex justify-end items-center gap-3 pt-3'>
                    <button type='button' onClick={onCancel}
                    className='px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100'>Cancel</button>
                    <button type='submit' className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700'>Update Password</button>
                </div>
            </form>
        </div>
    </div>
    
  )
}

export default ChangePassword;