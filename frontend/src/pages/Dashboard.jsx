import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar';
import StatCard from '../components/Dashboard/StatCard';
import { FaBox,FaUsers, FaFileInvoiceDollar, FaRupeeSign } from 'react-icons/fa';
import RecentBills from '../components/Dashboard/RecentBills';
import RecentActivity from '../components/Dashboard/RecentActivity';
import RevenueChart from '../components/Dashboard/RevenueChart';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const searchText = search.trim().toLowerCase();
  const isSearching = searchText !== "";

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

const hasBillMatch = bills.some((bill) =>
  bill.invoiceNo.toLowerCase().includes(searchText) ||
  bill.customer.toLowerCase().includes(searchText) ||
  bill.amount.toLowerCase().includes(searchText) ||
  bill.status.toLowerCase().includes(searchText)
);

const activities = [
  {
    title: "Invoice Created",
    type: "invoice",
  },
  {
    title: "New Customer Added",
    type: "customer",
  },
  {
    title: "Payment Received",
    type: "payment",
  },
];

const hasActivityMatch = activities.some((activity) =>
  activity.title.toLowerCase().includes(searchText) ||
  activity.type.toLowerCase().includes(searchText)
);

  const showProducts = !isSearching || "products".includes(searchText);
  const showCustomers = !isSearching || "customer".includes(searchText);
  const showBills = !isSearching || "bills".includes(searchText);
  const showRevenue = !isSearching || "revenue".includes(searchText);
  const showSummary = !isSearching || "summary sales".includes(searchText);
  const showRecentBills = !isSearching || "bills recent bills invoice".includes(searchText) || hasBillMatch;
  const showRecentActivity = !isSearching || "activity recent activity".includes(searchText) || hasActivityMatch;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className='ml-60 flex-1 flex flex-col'>
        <Navbar search={search} setSearch={setSearch} />
      <div className='p-6'>
        {!isSearching &&(
       <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold text-gray-800 '>Dashboard Overview</h1>
          <p className='text-gray-500 mt-1'>Welcome back Geeta</p>
        </div>
        <button onClick={()=> navigate("/create-bill")} 
        className='bg-slate-900 text-white px-3 py-2 rounded-lg hover:bg-slate-700'>
          + New Invoice
        </button>
       </div>
       )}
       <div className='grid grid-cols-4 gap-4 mt-3' >
        {showProducts &&(
          <StatCard title= "Products" value="120" icon ={<FaBox/>} change="+8.2%"/>
        )}
        {showCustomers && (
          <StatCard title="Customers" value= "30" icon={<FaUsers />} change="+5.4%" />
        )}  
        {showBills && (
          <StatCard title="Bills" value ="500" icon ={<FaFileInvoiceDollar />} change="+12.5%" />
        )}  
        {showRevenue && (
          <StatCard  title="Revenue" value= "INR 50,000" icon= {<FaRupeeSign />} change="+18.7%" />
        )}  
        </div>
        <div className='grid grid-cols-3 gap-6 mt-6'>
        {(!isSearching || showRevenue) &&(
          <div className='col-span-2'>
          <RevenueChart/>
          </div>
        )}
        {showSummary && (
          <div className='bg-white rounded-xl border border-gray-200 shadow-sm p-6'>
            <h2 className='text-lg font-semibold text-slate-900'>Sales Summary</h2>
            <p className='text-sm text-gray-500 mt-1'>This month's performance</p>
            <div className='mt-6 space-y-5'>
              <div>
                <div className='flex justify-between mb-2'>
                  <span className='text-sm text-gray-600'>Total Sales</span>
                  <span className='font-semibold text-slate-900'>Rs. 35,000</span>
                </div>
                <div className='h-2 bg-gray-100 rounded-full'>
                  <div className='h-2 bg-slate-900 rounded-full w-[75%]'></div>
                </div>
              </div>
              <div>
                <div className='flex justify-between mb-2'>
                  <span className='text-sm text-gray-600'>Paid Bills</span>
                  <span className='font-semibold text-slate-900'>42</span>
                </div>
                <div className='h-2 bg-gray-100 rounded-full'>
                  <div className='h-2 bg-green-500 rounded-full w-[85%]'></div>
                </div>
              </div>
              <div>
                <div className='flex justify-between mb-2'>
                  <span className='text-sm text-gray-500'>Pending Bills</span>
                  <span className='font-semibold text-slate-900'>8</span>
                </div>
                <div className='h-2 bg-gray-200 rounded-full'>
                  <div className='h-2 bg-yellow-500 rounded-full w-[35%]'></div>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
        {(showRecentBills || showRecentActivity) &&(
        <div className='grid grid-cols-3 gap-6 mt-6 '>
          {showRecentBills && (
          <div className='col-span-2'>
            <RecentBills search={search} bills={bills} />
          </div>
          )}
          {showRecentActivity &&(
          <div>
            <RecentActivity search={search} />
          </div>
          )}
        </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;