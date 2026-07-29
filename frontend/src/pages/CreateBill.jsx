import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

const CreateBill = () => {
  const [showProductForm, setShowProductForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [addClicked, setAddClicked] = useState(false)
  const [productData, setProductData] = useState({
    product: "",
    qty: "",
    price: "",
    discount: "",
  })

  const handleAddProduct =()=>{
    console.log(productData);
    setAddClicked(true);
    if(
      productData.product === ""|| productData.qty === "" || productData.price ===""
    ){
      setShowTable(false);
      return;
    }
    setProducts([...products,{...productData}]);
    setShowTable(true);

    setProductData({
      product: "",
      qty: "",
      price: "",
      discount: "",
    })
  }
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar/>
      <div className='ml-60 flex-1 flex flex-col'>
        <Navbar/>
        <div className='p-8'>
          <h1 className='text-3xl font-bold text-slate-900'>Create New Bill</h1>
          <p className='text-gray-500 mt-1'>Create invoice for your customer.</p>
          <div className='mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6'>
            <h2 className='text-xl font-semibold text-slate-900'>Customer & Invoice Information</h2>
            <p className='text-sm text-gray-500 mt-1'>Enter customer and invoice details</p>
             <div className='grid grid-cols-3 gap-6 mt-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Customer Name</label>
                <input type="text" placeholder='Enter customer name'
                className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
                <input type="text" placeholder='Enter phone number'
                className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Invoice Date</label>
                <input type="date" className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900'/>
              </div>
              <div>
                <label className='block text-sm font-medium mb-2 text-gray-700'>Email</label>
                <input type="email" placeholder='Enter email'
                className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900'/>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Payment Status</label>
                <select className='w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-slate-900'>
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>Overdue</option>
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Invoice No.</label>
                <input type="text" value="INV-001" readOnly 
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
                    <option>Select Product</option>
                    <option value="rice">Rice</option>
                    <option value="sugar">Sugar</option>
                    <option value="oil">Oil</option>
                  </select>
                  <input type="text" value={productData.qty} 
                  onChange={(e)=>setProductData({...productData, qty:e.target.value,})} placeholder='Qty'
                  className='col-span-2 border border-gray-300 rounded-lg px-3 py-2'/>
                  <input type="number" value={productData.price}
                  onChange={(e)=> setProductData({...productData, price: e.target.value,})} placeholder='Price'
                  className='col-span-2 border border-gray-300 rounded-lg px-3 py-2' />
                  <input type="number" value={productData.discount}
                  onChange={(e)=>setProductData({...productData, discount: e.target.value,})} placeholder='Discount'
                  className='col-span-2 border border-gray-300 rounded-lg px-3 py-2'/>
                  <button onClick={handleAddProduct} className='col-span-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition '>
                    Add
                    </button>
                </div>
                {showTable && (
                <table className='w-full border-collapse'>
                  <thead>
                    <tr className='bg-gray-100 border-b'>
                      <th className='p-3 text-left text-sm font-semibold'>Product</th>
                      <th className='p-3 text-left text-sm font-semibold'>Qty</th>
                      <th className='p-3 text-left text-sm font-semibold'>Price</th>
                      <th className='p-3 text-left text-sm font-semibold'>Discount</th>
                      <th className='p-3 text-left text-sm font-semibold'>Total</th>
                      <th className='p-3 text-left text-sm font-semibold'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item, index)=>(
                    <tr key={index} className='border-b'>
                      <td className='p-3' >{item.product}</td>
                      <td className='p-3'>{item.qty}</td>
                      <td className='p-3'>{item.price}</td>
                      <td className='p-3'>{item.discount}</td>
                      <td className='p-3'>{Number(item.qty)* Number(item.price)-Number(item.discount)}</td>
                      <td className='p-3'>Delete</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
                )}
                {addClicked && !showTable &&(
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
                    <span>Rs.0.00</span>
                  </div>
                  <div className='flex justify-between text-gray-600'>
                    <span>Discount</span>
                    <span>Rs.0.00</span>
                  </div>
                  <div className='flex justify-between text-gray-600'>
                    <span>GST (18%)</span>
                    <span>Rs.0.00</span>
                  </div>
                  <div className='border-t border-gray-300 pt-4'></div>
                  <div className='flex justify-between text-xl font-bold text-slate-900'>
                    <span>Total</span>
                    <span>Rs.0.00</span>
                  </div>
                </div>
                <div className='flex justify-end gap-3 mt-8 pt-4'>
                  <button className='px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition'>Cancel</button>
                  <button className='px-8 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition'>Save Bill</button>
                </div>
              </div>
              </div>
             </div>
          </div>
          </div>
  )
}

export default CreateBill;