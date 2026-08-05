import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { MdDelete} from 'react-icons/md';
import {IoArrowBack} from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom';

const CreateBill = () => {
  const [showProductForm, setShowProductForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [addClicked, setAddClicked] = useState(false);
  const [bills, setBills] = useState([])
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    paymentStatus: "Pending",
  })
  const [productData, setProductData] = useState({
    product: "",
    qty: "",
    price: "",
    discount: "",
  });
  const navigate = useNavigate();
  const {id} = useParams();
  const isEdit = id !== undefined;

  useEffect(()=>{
    const savedBills = JSON.parse(localStorage.getItem("bills")) || [];
    setBills(savedBills);
  }, []);

  useEffect(()=>{
    if(isEdit && bills.length > 0){
      const bill = bills[id];

      if(bill){
      setCustomer(bill.customer);
      setProducts(bill.products);

      setShowProductForm(true);
      }
    }
  }, [bills, id, isEdit]);

  const subtotal = products.reduce((total, item)=>{
    return total+ Number(item.qty)*Number(item.price);
  },0);

  const discount = products.reduce((total, item)=>{
    return total+ Number(item.discount);
  },0);

  const gst = (subtotal-discount)*0.18;
  const grandTotal = subtotal -discount + gst;

  const invoiceNumber = isEdit? bills[id]?.invoiceNumber || ""
  : `INV-${Date.now().toString().slice(-5)}`;

  const handleAddProduct =()=>{
    console.log(productData);
    setAddClicked(true);
    if(
      productData.product === ""|| productData.qty === "" || productData.price ===""
    ){
      return;
    }
    const updatedProducts = [...products,{...productData,discount: productData.discount||0,}];
    console.log(updatedProducts);
    setProducts(updatedProducts);

    setProductData({
      product: "",
      qty: "",
      price: "",
      discount: "",
    })
  }

  const handleDeleteProduct =(index)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if(!confirmDelete) return;
    setProducts(products.filter((_,i)=> i !== index));
  };

  const handleSaveBill = ()=>{
    if(customer.name===""){
      alert("Customer name required");
      return;
    } if(products.length===0){
      alert("Please add product");
      return;
    }
    console.log(customer);
    console.log(products);
    const newBill = {
      invoiceNumber,
      customer,
      products,
      subtotal,
      discount,
      gst,
      grandTotal,
    };
    const existingBills = JSON.parse(localStorage.getItem("bills")) || [];
    
    if(isEdit){
      existingBills[id] = newBill;
    }else{
      existingBills.push(newBill);
    }
    localStorage.setItem("bills", JSON.stringify(existingBills));

    alert(isEdit? "Bill Updated Successfully":"Bill Saved Successfully");

    setCustomer({
      name: "",
      phone: "",
      date: "",
      email: "",
      paymentStatus:"Pending",
    })
    setProducts([]);
    setAddClicked(false);
    setShowProductForm(false);

    setProductData({
      product: "",
      qty: "",
      price: "",
      discount: 0,
    });
    navigate("/bills");
  }
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar/>
      <div className='ml-60 flex-1 flex flex-col'>
        <Navbar/>
        <div className='p-6'>
          <div className='flex items-center gap-3 mb-6'>
            <button onClick={()=>navigate("/bills")} className='p-2 rounded-lg hover:bg-gray-200 transition'>
              <IoArrowBack size={24}/>
            </button>
            <div>
          <h1 className='text-3xl font-bold text-slate-900'>
            {isEdit ? "Edit Bill" : "Create New Bill"}
          </h1>
          <p className='text-gray-500 mt-1'>
            {isEdit ? "Update customer invoice." : "Create invoice for your customer."}
          </p>
         </div>
         </div>
          <div className='mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
            <h2 className='text-xl font-semibold text-slate-900'>Customer & Invoice Information</h2>
            <p className='text-sm text-gray-500 mt-1'>Enter customer and invoice details</p>
             <div className='grid grid-cols-3 gap-6 mt-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Customer Name</label>
                <input type="text" value={customer.name} onChange={(e)=>setCustomer({...customer, name:e.target.value})}
                 placeholder='Enter customer name'
                className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                <input type="text" value={customer.phone} onChange={(e)=> setCustomer({...customer, phone:e.target.value})} 
                placeholder='Enter phone number'
                className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Invoice Date</label>
                <input type="date" value={customer.date} onChange={(e)=>setCustomer({...customer, date:e.target.value})}
                className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900'/>
              </div>
              <div>
                <label className='block text-sm font-medium mb-2 text-gray-700'>Email</label>
                <input type="email" value={customer.email} onChange={(e)=> setCustomer({...customer, email: e.target.value})} placeholder='Enter email'
                className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900'/>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Payment Status</label>
                <select value={customer.paymentStatus} onChange={(e)=> setCustomer({...customer, paymentStatus: e.target.value})}
                className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900'>
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>Unpaid</option>
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Invoice No.</label>
                <input type="text" value={invoiceNumber} readOnly 
                className='w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2.5 '/>
              </div>
             </div>
             </div>
             <div className='mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
              <div className='flex justify-between items-center'>
                <div>
                  <h2 className='text-xl font-semibold text-slate-900'>Products</h2>
                  <p className='text-sm text-gray-500 mt-1'>Add Products to this invoice.</p>
                </div>
                {!showProductForm ?(
                <button onClick={()=>setShowProductForm(true)} className='bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-700 transition'>
                  + Add Product
                  </button>
                  ):(
                    <button onClick={()=>setShowProductForm(false)} className='border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100'>
                      Close
                      </button>
                  )}
              </div>
              {showProductForm ? (
              <div className='mt-6 overflow-x-auto'>
                <div className='grid grid-cols-12 gap-3 mb-5 bg-slate-50 p-4 rounded-xl'>
                  <select value={productData.product} 
                  onChange={(e)=>{
                    setProductData({
                      ...productData, product: e.target.value,
                    })
                  }}
                  className='col-span-4 border border-gray-300 rounded-lg px-3 py-2'>
                    <option value="">Select Product</option>
                    <option value="Rice">Rice</option>
                    <option value="Sugar">Sugar</option>
                    <option value="Oil">Oil</option>
                  </select>
                  <input type="number" value={productData.qty}  min="1"
                  onChange={(e)=>setProductData({...productData, qty:e.target.value,})} placeholder='Qty'
                  className='col-span-2 border border-gray-300 rounded-lg px-3 py-2'/>
                  <input type="number" value={productData.price} min="1"
                  onChange={(e)=> setProductData({...productData, price: e.target.value,})} placeholder='Price'
                  className='col-span-2 border border-gray-300 rounded-lg px-3 py-2' />
                  <input type="number" value={productData.discount} min="0"
                  onChange={(e)=>setProductData({...productData, discount: e.target.value,})} placeholder='Discount'
                  className='col-span-2 border border-gray-300 rounded-lg px-3 py-2'/>
                  <button onClick={handleAddProduct} className='col-span-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition '>
                    Add
                    </button>
                </div>
                {products.length>0 && (
                <table className='w-full border-collapse'>
                  <thead>
                    <tr className='bg-gray-100 border-b'>
                      <th className='p-3 text-left text-sm font-semibold'>Product</th>
                      <th className='p-3 text-sm font-semibold text-center'>Qty</th>
                      <th className='p-3 text-left text-sm font-semibold'>Price</th>
                      <th className='p-3 text-left text-sm font-semibold'>Discount</th>
                      <th className='p-3 text-left text-sm font-semibold'>Total</th>
                      <th className='p-3 text-left text-sm font-semibold'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item, index)=>(
                    <tr key={index} className='border-b'>
                      <td className='p-3' >
                        {item.product.charAt(0).toUpperCase() + item.product.slice(1)}</td>
                      <td className='p-3 text-center'>
                        {item.qty}</td>
                      <td className='p-3'>Rs.{item.price}</td>
                      <td className='p-3'>Rs.{item.discount || 0}</td>
                      <td className='p-3'>Rs.{(Number(item.qty)* Number(item.price)-Number(item.discount||0)).toFixed(2)}</td>
                      <td className='p-3'>
                        <button onClick={()=>handleDeleteProduct(index)}
                        className='text-red-600 hover:text-red-800'>
                          <MdDelete size={22}/>
                        </button>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
                )}
                {addClicked && products.length===0 &&(
                  <div className='text-center py-8 text-gray-400'>No Product added to this bill</div>
                )}
              </div>
              ):null}
              </div>
              <div className='mt-6 flex justify-end'>
                <div className='w-full max-w-md bg-slate-50 border border-gray-200 rounded-2xl p-6 '>
                <h2 className='text-xl font-semibold text-slate-900 mb-5'>Bill Summary</h2>
                <div className='space-y-4 '>
                  <div className='flex justify-between text-gray-600'>
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-gray-600'>
                    <span>Discount</span>
                    <span>Rs.{discount.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-gray-600'>
                    <span>GST (18%)</span>
                    <span>Rs.{gst.toFixed(2)}</span>
                  </div>
                  <div className='border-t border-gray-300 pt-4'></div>
                  <div className='flex justify-between text-xl font-bold text-slate-900'>
                    <span>Total</span>
                    <span>Rs.{grandTotal.toFixed(2)}</span>
                  </div>
                </div>
                <div className='flex justify-end gap-3 mt-8 pt-4'>
                  <button onClick={()=> navigate("/bills")} 
                  className='px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition'>Cancel</button>
                  <button onClick={handleSaveBill}
                  className='px-8 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition'>
                    {isEdit ? "Update Bill" : "Save Bill"}
                  </button>
                </div>
              </div>
              </div>
             </div>
          </div>
          </div>
  )
}

export default CreateBill;