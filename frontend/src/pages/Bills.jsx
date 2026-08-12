import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import {FaClock, FaEdit, FaEye, FaFileInvoiceDollar, FaPlus, FaRupeeSign} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import ConfirmModal from '../components/ConfirmModal/ConfirmModal';

const Bills = () => {
  const navigate = useNavigate();
  const [bills, setBills] = useState([]);
  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBillIndex, setSelectedBillIndex] = useState(null);
  useEffect(()=>{
    const savedBills = JSON.parse(localStorage.getItem("bills")) || [];
    setBills(savedBills);
  },[]);

  const filteredBills = bills.map((bill,index)=>({bill, originalIndex: index}))
  .filter(({bill})=>
  bill.invoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
  bill.customer.name.toLowerCase().includes(search.toLowerCase()))

  const handleDeleteBill = ()=>{
    if(selectedBillIndex === null) return;

    const updatedBills = bills.filter((_,i)=> i !== selectedBillIndex);
    setBills(updatedBills);

    localStorage.setItem("bills", JSON.stringify(updatedBills));

    setShowDeleteModal(false);
    setSelectedBillIndex(null)
  };

  const closeDeleteModal =()=>{
     setShowDeleteModal(false);
     setSelectedBillIndex(null);
  };
  return (
    <div className='flex min-h-screen bg-gray-100'>
        <Sidebar/>
        <div className='ml-60 flex flex-1 flex-col'>
            <Navbar search={search}
            setSearch={setSearch} />
            <div className='flex justify-between items-start px-8 pt-8'>
              <div>
                <h1 className='text-3xl font-bold text-slate-900'>Bills</h1>
                <p className='text-gray-500 mt-1'>Create and manage customer invoices.</p>
            </div>
              <button onClick={()=> navigate("/create-bill")}  className='flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-700 transition'>
                <FaPlus />
                <span>Create Bill</span>
              </button>
            </div>
            {search === "" &&(
            <div className='grid grid-cols-3 gap-6 px-8 mt-4'>
              <div className='bg-white rounded-2xl shadow-sm p-5 border border-gray-200 hover:shadow-md transition'>
                <div className='flex justify-between items-center'>
                  <div>
                  <p className='text-gray-500 text-sm'>Total Bills</p>
                  <h2 className='text-3xl font-bold text-slate-900 mt-2'>{bills.length}</h2>
                  <p className='text-xs text-gray-400 mt-2'>Total invoices created </p>
                  </div>
                  <div className='w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center'>
                    <FaFileInvoiceDollar className='text-blue-600 text-2xl'/>
                  </div>
                </div>             
              </div>
              <div className='bg-white rounded-2xl shadow-sm p-5 border border-gray-200 hover:shadow-md transition'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-gray-500 text-sm'>Revenue</p>
                    <h2 className='text-3xl font-bold mt-2 text-green-600'>Rs.{bills.reduce((sum, bill)=> sum+ bill.grandTotal, 0).toFixed(2)}</h2>
                    <p className='text-xs text-gray-400 mt-2'>Overall earning</p>
                  </div>
                  <div className='w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center'>
                    <FaRupeeSign className='text-green-600 text-2xl'/>
                  </div>
                </div>
              </div>
              <div className='bg-white rounded-2xl shadow-sm p-5 border border-gray-200 hover:shadow-md transition'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-gray-500 text-sm'>Pending Bills</p>
                    <h2 className='text-3xl font-bold mt-2 text-orange-500'>{bills.filter(bill => bill.customer.paymentStatus === "Pending").length}</h2>
                    <p className='text-xs text-gray-400 mt-2'>Awaiting payment</p>
                   </div>
                   <div className='w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center'>
                    <FaClock className='text-orange-500 text-2xl'/>
                   </div>
                </div>
              </div>
            </div>
            )}
            <div className='px-8 mt-6'>
            <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
            <table className='w-full border-collapse'>
              <thead className='bg-slate-50 border-b border-gray-200'>
                <tr className='border-b'>
                  <th className='px-6 py-4 text-left font-semibold uppercase tracking-wider text-gray-700'>Bill No.</th>
                  <th className='px-6 py-4 text-left font-semibold uppercase tracking-wider text-gray-700'>Customer</th>
                  <th className='px-6 py-4 text-left font-semibold uppercase tracking-wider text-gray-700'>Date</th>
                  <th className='px-6 py-4 text-left font-semibold uppercase tracking-wider text-gray-700'>Amount</th>
                  <th className='px-6 py-4 text-left font-semibold uppercase tracking-wider text-gray-700'>Status</th>
                  <th className='px-6 py-4 text-left font-semibold uppercase tracking-wider text-gray-700'>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredBills.length>0?(
                 filteredBills.map(({bill, originalIndex})=>(
                <tr key={originalIndex} className='border-b hover:bg-gray-50 transition-colors duration-200'>
                  <td className='p-3' >{bill.invoiceNumber}</td>
                  <td className='p-3'>{bill.customer.name.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</td>
                  <td className='p-3'>{new Date(bill.customer.date).toLocaleDateString("en-IN")}</td>
                  <td className='p-3'>Rs.{bill.grandTotal.toFixed(2)}</td>
                  <td className='p-3'>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium
                      ${bill.customer.paymentStatus === "Paid"? "bg-green-100 text-green-700"
                        : bill.customer.paymentStatus === "Pending"?"bg-yellow-100 text-yellow-700"
                        :"bg-red-100 text-red-700"
                      }`}>{bill.customer.paymentStatus}</span>
                  </td>
                  <td className='p-3'>
                    <div className='flex items-center gap-2'>
                      <button onClick={()=> navigate(`/view-bill/${originalIndex}`)}
                      className='p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100' title='View Bill'>
                        <FaEye size={20}/>
                      </button>
                      <button onClick={()=> navigate(`/edit-bill/${originalIndex}`)}
                      className='p-2 rounded-lg bg-yellow-50 text-yellow-500 hover:bg-yellow-100 transition'
                      title='Edit Bill'><FaEdit size={18}/></button>
                    <button onClick={()=>{
                      setSelectedBillIndex(originalIndex);
                      setShowDeleteModal(true);
                    }} className='p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition' title='Delete Bill'>
                      <MdDelete size={22}/>
                    </button>
                    </div>
                  </td>
                </tr>))
                ):(
                  <tr>
                    <td colSpan="6" className='text-center py-10 text-gray-500 font-medium'>
                    No Bills Found</td>
                  </tr>
                )}
              </tbody>
            </table>
             </div>
            </div>
        </div>
        <ConfirmModal
        isOpen={showDeleteModal}
        title="Delete Bill"
        onCancel={closeDeleteModal}
        onConfirm={handleDeleteBill}/>
    </div>
  )
}

export default Bills;