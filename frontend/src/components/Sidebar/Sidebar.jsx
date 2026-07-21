import {FaBox,FaUsers,FaFileInvoiceDollar,FaChartBar,FaCog, FaSignOutAlt} from 'react-icons/fa'
import { MdDashboard } from "react-icons/md";
import {Link} from "react-router-dom"
const Sidebar = () => {
  return (
    <div className='w-60 h-screen bg-slate-900 text-white flex flex-col'>
        <div className='p-6 border-b border-slate-600'>
            <h1 className='text-2xl font-bold'>BillPro</h1>
            <p className='text-sm text-slate-300'>Bill Management System</p>
        </div>
        <div className='px-3 font-medium'>
            <ul >
                <li >
                    <Link to="/dashboard" className='flex items-center gap-2 mt-4  px-4 py-3 hover:bg-slate-700 cursor-pointer rounded-lg '>
                    <MdDashboard />
                    Dashboard
                    </Link>
                </li>
                <li >
                    <Link to="/products" className='flex items-center gap-2  px-4 py-3 hover:bg-slate-700 cursor-pointer rounded-lg'>
                    <FaBox />
                    Products
                    </Link>
                </li>
                <li>
                    <Link to="/customers" className='flex items-center gap-2 px-4 py-3 hover:bg-slate-700 cursor-pointer rounded-lg'>
                    <FaUsers />
                    Customers
                    </Link>
                </li>
                <li className='flex items-center gap-2 px-4 py-3 hover:bg-slate-700 cursor-pointer rounded-lg'>
                    <FaFileInvoiceDollar />
                    Bills
                </li>
                <li className='flex items-center gap-2 px-4 py-3 hover:bg-slate-700 cursor-pointer rounded-lg'>
                    <FaChartBar/>
                    Reports
                </li>
                <li className='flex items-center gap-2 px-4 py-3 hover:bg-slate-700 cursor-pointer rounded-lg'>
                    <FaCog />
                    Settings
                </li>
            </ul>
        </div>
        <div className='mt-auto border-t border-slate-700 p-3 '>
            <button className='flex items-center gap-2 w-full px-3 py-2 hover:bg-slate-600 cursor-pointer rounded-lg'>
                <FaSignOutAlt />
                Logout
            </button>
        </div>
    </div>
  )
}

export default Sidebar;