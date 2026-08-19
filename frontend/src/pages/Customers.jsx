import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { FaPlus} from 'react-icons/fa';
import Modal from '../components/Modal/Modal';
import ConfirmModal from '../components/ConfirmModal/ConfirmModal'

const Customers = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
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

  setEditIndex(null);
}

const handleSubmitCustomer =()=>{
if(
  customerData.name === ""|| customerData.phone === ""|| customerData.email === ""|| customerData.address === ""
){
alert("please fill all fields");
return;
}
if (editIndex !==null) {
  const updatedCustomers = [...customers];
  updatedCustomers[editIndex] = customerData;
  setCustomers(updatedCustomers);
}else{
    const newCustomer = {
      name: customerData.name,
      phone: customerData.phone,
      email: customerData.email,
      address: customerData.address,
    };
setCustomers([...customers, newCustomer]);
}
setSearch("");
setShowModal(false);
resetForm();
};

const handleEdit = (index)=>{
  setCustomerData({...customers[index]});
  setEditIndex(index);
  setShowModal(true);
};

const handleCancel =()=>{
  resetForm();
  setShowModal(false);
};

const handleDelete = (index)=>{
  setDeleteIndex(index);
  setShowDeleteModal(true)
};

const confirmDeleteCustomer = ()=>{
  const updatedCustomers = customers.filter((_, i)=> i!== deleteIndex);

  setCustomers(updatedCustomers);
  setDeleteIndex(null);
  setShowDeleteModal(false);
};

const cancelDelete = ()=>{
  setDeleteIndex(null);
  setShowDeleteModal(false);
};

  const filteredCustomers = customers.map((customer, index)=>({
    customer, originalIndex: index
  })).filter(({customer})=>
  customer.name.toLowerCase().includes(search.toLowerCase())||
  customer.phone.includes(search) ||
  customer.email.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar/>
      <div className='ml-60 flex-1'>
        <Navbar search={search} setSearch={setSearch}/>
        <div className='p-8'>
          <div className='flex justify-between items-center'>
            <div>
             <h2 className='text-3xl font-bold text-slate-900'>Customers</h2>
             <p className='text-gray-500 mt-1'>Manage and track all your customers here.</p>
            </div>
            <button onClick={()=>{resetForm();
                setShowModal(true)}} className='bg-slate-900 text-white rounded-lg px-5 py-2.5 cursor-pointer flex items-center gap-2 hover:bg-slate-700 transition'>
                <FaPlus/>
                <span>Add Customer</span>
              </button>
          </div>
          <div className='mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
            <table className='w-full border-collapse'>
              <thead className='bg-slate-50'>
                <tr className='border-b border-gray-200'>
                  <th className='px-5 py-4 text-left font-semibold text-gray-700'>Customer Name</th>
                  <th className='px-5 py-4 text-left font-semibold text-gray-700'>Phone</th>
                  <th className='px-5 py-4 text-left font-semibold text-gray-700'>Email</th>
                  <th className='px-5 py-4 text-left font-semibold text-gray-700'>Address</th>
                  <th className='px-5 py-4 text-left font-semibold text-gray-700'>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.length > 0 ?(
                filteredCustomers.map(({customer, originalIndex})=>(
                <tr key={originalIndex} className='border-b border-gray-100 hover:bg-gray-50 transition'>
                  <td className='px-5 py-4'><span className='font-medium text-slate-900'>{customer.name}</span></td>
                  <td className='px-5 py-4 text-gray-800'>{customer.phone}</td>
                  <td className='px-5 py-4 text-gray-600'>{customer.email} </td>
                  <td className='px-5 py-4 text-gray-800'>{customer.address} </td>
                  <td className='px-5 py-4'>
                    <div className='flex gap-2'>
                      <button onClick={()=> handleEdit(originalIndex)} className='bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-blue-600 transition'>
                        Edit
                      </button>
                      <button onClick={()=>handleDelete(originalIndex)} className='bg-red-500 text-white rounded-md px-4 py-1 hover:bg-red-600 transition'>
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
        <Modal title={editIndex !==null? "Edit Customer" :"Add Customer"}
        subtitle="Enter customer details" 
        onClose={()=>{
          resetForm();
          setShowModal(false);
        }}
        onSubmit={handleSubmitCustomer}
        submitText={editIndex !==null ? "Update Customer" : "Add Customer"}>
          <div>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Customer Name</label>
            <input type="text" name='name' value={customerData.name} onChange={handleChange} placeholder='Enter customer name' 
            className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-slate-900' />
          </div>
          <div className='mt-4'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Phone Number</label>
            <input type="text" name='phone' value={customerData.phone} onChange={handleChange} 
            placeholder='Enter phone number' maxLength="10" className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-slate-900'/>
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
        </Modal>
      )}

      <ConfirmModal
      isOpen={showDeleteModal}
      title="Delete Customer"
      confirmText='Delete'
      cancelText='Cancel'
      onConfirm={confirmDeleteCustomer}
      onCancel={cancelDelete}/>
    </div>
  )
}

export default Customers;