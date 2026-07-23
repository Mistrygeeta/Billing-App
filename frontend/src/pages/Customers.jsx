import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { FaPlus, FaSearch } from 'react-icons/fa';

const Customers = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [customerData, setCustomerData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [customers, setCustomers] = useState([{
     name: "Rahul Sharma",
    phone: "9876512340",
    email: "rahul123@gmail.com",
    address: "New Delhi",
  },
  {
     name: "Ram Sharma",
    phone: "9886512340",
    email: "ram123@gmail.com",
    address: "New Delhi",
  }
]);

const handleChange =(e)=>{
  setCustomerData({
...customerData,
[e.target.name]: e.target.value,
  });
};

const resetForm = ()=>{
  setCustomerData({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  setIsEditing(false);
  setEditIndex(null);
}

const handleAddCustomer =()=>{
if(
  customerData.name === ""|| customerData.phone === ""|| customerData.email === ""|| customerData.address === ""
){
alert("please fill all fields");
return;
}
if (isEditing) {
  const updatedCustomers = [...customers];
  updatedCustomers[editIndex] = customerData;
  setCustomers(updatedCustomers);

  resetForm();
}else{
const newCustomer ={
  name: customerData.name,
  phone: customerData.phone,
  email: customerData.email,
  address: customerData.address,
};
setCustomers([...customers, newCustomer]);
}
setShowModal(false);
resetForm();
};

const handleEdit = (index)=>{
  setCustomerData(customers[index]);
  setEditIndex(index);
  setIsEditing(true);
  setShowModal(true);
};

const handleCancel =()=>{
  resetForm();
  setShowModal(false);
};

const handleDelete = (index)=>{
  const updatedCustomers = customers.filter((_,i)=> i !== index);
  setCustomers(updatedCustomers);
};

  const filteredCustomers = customers.filter((customer)=>
  customer.name.toLowerCase().includes(search.toLowerCase())||
  customer.phone.includes(search))
  
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar/>
      <div className='flex-1'>
        <Navbar/>
        <div className='p-8'>
          <h2 className='text-3xl font-bold text-slate-900'>Customers</h2>
          <p className='text-gray-500 mt-1'>Manage all your customers here.</p>
          <div className='flex justify-between items-center mt-8'>
            <div className='relative'>
              <FaSearch className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'/>
                <input type="text" placeholder='Search Customer' value={search} onChange={(e)=> setSearch(e.target.value)}
                className='border border-gray-300 py-2 pl-10 pr-4 w-80 rounded-lg outline-none' />
            </div>
            <div>
              <button onClick={()=>{resetForm();
                setShowModal(true)}} className='bg-slate-900 text-white rounded-lg px-5 py-2 cursor-pointer flex items-center gap-2 hover:bg-slate-700 transition'>
                <FaPlus/>
                <span>Add Customer</span>
              </button>
            </div>
          </div>
          <div className='mt-8 bg-white rounded-lg shadow-md overflow-hidden'>
            <table className='w-full border-collapse'>
              <thead className='bg-gray-100'>
                <tr className='border-b'>
                  <th className='p-3 text-left font-semibold text-gray-700'>Customer Name</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Phone</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Email</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Address</th>
                  <th className='p-3 text-left font-semibold text-gray-700'>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.length > 0 ?(
                filteredCustomers.map((customer, index)=>(
                <tr key={index} className='border-b hover:bg-gray-50 transition'>
                  <td className='p-3 text-gray-800'>{customer.name}</td>
                  <td className='p-3 text-gray-800'>{customer.phone}</td>
                  <td className='p-3 text-gray-800'>{customer.email} </td>
                  <td className='p-3 text-gray-800'>{customer.address} </td>
                  <td className='p-3'>
                    <div className='flex gap-2'>
                      <button onClick={()=> handleEdit(index)} className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-600 transition'>
                        Edit
                      </button>
                      <button onClick={()=>{
                        setDeleteIndex(index);
                        setShowDeleteModal(true);
                      }} className='bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition'>
                        Delete
                        </button>
                    </div>
                  </td>
                </tr>
                ))
              ):(
                <tr>
                  <td colSpan="5" className='text-center py-8 text-gray-500 font-medium'>No Customers Found</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showModal && (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center'>
          <div className='bg-white rounded-xl p-6 w-[500px] shadow-xl '>
            <h2 className='text-2xl font-bold text-slate-900'>{isEditing?"Edit Customer":"Add Customer"}</h2>
            <p className='text-gray-500 mt-2'>Enter customer details</p>
          <div className='mt-6'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Customer Name</label>
            <input type="text" name='name' value={customerData.name} onChange={handleChange} placeholder='Enter customer name' 
            className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-slate-900' />
          </div>
          <div className='mt-4'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Phone Number</label>
            <input type="text" name='phone' value={customerData.phone} onChange={handleChange} 
            placeholder='Enter phone number' className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-slate-900'/>
          </div>
          <div className='mt-4'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Email</label>
            <input type="email" name='email' value={customerData.email} onChange={handleChange} placeholder='Enter email address' className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-slate-900'/>
          </div>
          <div className='mt-4'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Address</label>
            <textarea rows="3" name='address' value={customerData.address} onChange={handleChange} 
            placeholder='Enter address' 
            className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-slate-900 resize-none'></textarea>
          </div>
          <div className='flex justify-end gap-3 mt-6'>
            <button onClick={handleCancel} className='px-4 py-2 border border-red-500 text-red-600  rounded-lg hover:bg-red-600 hover:text-white transition cursor-pointer'>
              Cancel
              </button>
            <button onClick={handleAddCustomer} className='px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition cursor-pointer'>
              {isEditing? "Update Customer":"Add Customer"}
              </button>
          </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Customers;