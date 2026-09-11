import React from 'react'
import { Link } from 'react-router-dom';
const RecentBills = ({search}) => {
  const bills = [
  {
    invoiceNo: "INV001",
    customer: "Rahul",
    amount: "INR 500",
    status: "Paid",
  },
  {
    invoiceNo: "INV002",
    customer: "Aman",
    amount: "INR 200",
    status: "Pending",
  },
  {
    invoiceNo: "INV003",
    customer: "Mukesh",
    amount: "INR 1200",
    status: "Unpaid",
  },
];

const filteredBills = bills.filter((bill)=>
bill.invoiceNo.toLowerCase().includes(search.toLowerCase()) ||
bill.customer.toLowerCase().includes(search.toLowerCase()) ||
bill.amount.toLowerCase().includes(search.toLowerCase()) ||
bill.status.toLowerCase().includes(search.toLowerCase())
)
  return (
    <div className='bg-white border border-gray-200 shadow-sm p-6 rounded-xl h-full'>
      <div className='flex justify-between items-center mb-5'>
        <div>
         <h2 className='text-xl font-semibold text-slate-900'>Recent Bills</h2>
         <p className='text-sm text-gray-500 mt-1'>Latest invoices and payment status</p>
        </div>
        <Link to="/bills" className='px-4 py-2 text-sm font-medium text-slate-700 border border-gray-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition'>View All</Link>
      </div>  
            
      <table className='w-full'>
        <thead className='bg-slate-50'>
          <tr className='border-b' >
            <th className='text-left px-3 py-3 text-sm font-semibold text-gray-600'>Invoice No</th>
            <th className='text-left px-3 py-3 text-sm font-semibold text-gray-600'>Customer</th>
            <th className='text-left px-3 py-3 text-sm font-semibold text-gray-600'>Amount</th>
            <th className='text-left px-3 py-3 text-sm font-semibold text-gray-600'>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredBills.length > 0 ? (
            filteredBills.map((bill)=>(
              <tr key={bill.invoiceNo} 
              className='border-b border-gray-200 hover:bg-gray-50 transition'>
                <td className='px-3 py-4 text-sm font-medium text-slate-900'>{bill.invoiceNo}</td>
                <td className='px-3 py-4 text-sm text-gray-700'>{bill.customer}</td>
                <td className='px-3 py-4 text-sm text-gray-700'>{bill.amount}</td>
                <td className='px-3 py-4 text-sm text-gray-700'><span
                className={`rounded-full py-1 px-3 text-sm font-medium ${
                  bill.status === "Paid"?"bg-green-100 text-green-700" 
                  : bill.status === "Pending"? "bg-yellow-100 text-yellow-700"
                  :"bg-red-100 text-red-700"
                }`}>
                  {bill.status}
                  </span></td>
              </tr>
            ))
          ):(
            <tr>
              <td colSpan="4"
              className='text-center py-6 text-gray-500 font-medium'>No Bills Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default RecentBills;