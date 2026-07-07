import {FaBox,FaUsers,FaFileInvoiceDollar,FaChartBar,FaCog, FaSignOutAlt} from 'react-icons/fa'
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='w-64 h-screen bg-slate-900 text-white'>
        <div className='p-6 border-b border-slate-600'>
            <h1 className='text-2xl font-bold'>BillPro</h1>
            <p className='text-sm text-slate-300'>Bill Management System</p>
        </div>
        <div>
            <ul >
                <li className='flex items-center gap-1 mt-4 px-4 hover:bg-slate-800 cursor-pointer rounded-lg '>
                    <MdDashboard />
                    Dashboard
                </li>   
            </ul>
        </div>
        <div>logout</div>
    </div>
  )
}

export default Sidebar;