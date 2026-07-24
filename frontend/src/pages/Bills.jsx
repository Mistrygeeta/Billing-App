import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

const Bills = () => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
        <Sidebar/>
        <div className='flex-1 flex-col flex'>
            <Navbar/>
            <div className='p-8'>
                <h2 className='text-3xl font-bold text-slate-900'>Bills</h2>
                <p>Manage all your bills here.</p>
            </div>
            <div className='flex justify-between items-center mt-8'>
                <div>
                    <input type="text" placeholder='Search' />
                </div>
                <button>Create Bill</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Bill No.</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BILL001</td>
                            <td>Rahul Sharma</td>
                            <td>24 Jul 2026</td>
                            <td>₹1450</td>
                            <td>Paid</td>
                            <td>
                                <button>View</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Bills;