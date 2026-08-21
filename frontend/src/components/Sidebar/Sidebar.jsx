import {FaBox,FaUsers,FaFileInvoiceDollar,FaChartBar,FaCog, FaSignOutAlt} from 'react-icons/fa'
import { MdDashboard } from "react-icons/md";
import {NavLink} from "react-router-dom";
import Logout from '../Auth/Logout';
const Sidebar = () => {
  return (
    <div className='fixed left-0 w-60 h-screen bg-slate-900 text-white flex flex-col'>
        <div className='p-6 border-b border-slate-600'>
            <h1 className='text-2xl font-bold'>BillPro</h1>
            <p className='text-sm text-slate-300'>Bill Management System</p>
        </div>
        <div className='px-3 font-medium'>
            <ul >
                <li >
                    <NavLink to="/dashboard" className={({isActive})=>
                    `flex items-center gap-2 mt-4  px-4 py-3 cursor-pointer rounded-lg transition
                    ${isActive? "bg-slate-700 text-white":"text-white hover:bg-slate-700 hover:text-white"}`}>
                    <MdDashboard />
                    Dashboard
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/products" className={({isActive})=>
                    `flex items-center gap-2  px-4 py-3 cursor-pointer rounded-lg transition
                    ${isActive ? "bg-slate-700 text-white":"text-white hover:bg-slate-700 hover:text-white"}`}>
                    <FaBox />
                    Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/customers" className={({isActive})=>
                    `flex items-center gap-2 px-4 py-3 cursor-pointer rounded-lg transition 
                    ${isActive ? "bg-slate-700 text-white":"text-white hover:bg-slate-700 hover:text-white"}`}>
                    <FaUsers />
                    Customers
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/bills" className={({isActive})=>
                    `flex items-center gap-2 px-4 py-3 cursor-pointer rounded-lg transition 
                    ${isActive? "bg-slate-700 text-white":"text-white hover:bg-slate-700 hover:text-white"}`}>
                    <FaFileInvoiceDollar />
                    Bills
                    </NavLink>
                </li>
                <li>
                   <NavLink to="/reports" className={({isActive})=>
                    `flex items-center gap-2 px-4 py-3 cursor-pointer rounded-lg transition
                    ${isActive ? "bg-slate-700 text-white":"text-white hover:bg-slate-700 hover:text-white"}`}>
                    <FaChartBar/>
                    Reports
                    </NavLink>
                </li>
                <li >
                   <NavLink to="/settings" className={({isActive})=>
                   `flex items-center gap-2 px-4 py-3 cursor-pointer rounded-lg transition 
                   ${isActive? "bg-slate-700 text-white":"text-white hover:bg-slate-700 hover:text-white"}`}>
                    <FaCog />
                    Settings
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className='mt-auto border-t border-slate-700 p-3 '>
            <Logout className='flex items-center gap-2 w-full px-3 py-2 hover:bg-slate-600 cursor-pointer rounded-lg'>
                <FaSignOutAlt />
                Logout
            </Logout>
        </div>
    </div>
  )
}

export default Sidebar;