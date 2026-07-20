import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import {FaPlus, FaSearch} from 'react-icons/fa'

const Products = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });
  const [products, setProducts] = useState([
     {
    name: "Sample Product",
    category: "Electronics",
    price: "INR 1000",
    stock: 10,
  },
  {
    name: "Laptop",
    category: "Electronics",
    price: "INR 55000",
    stock: 8,
  },
  {
    name: "Wireless Mouse",
    category: "Accessories",
    price: "INR 800",
    stock: 25,
  },
  {
    name: "Keyboard",
    category: "Accessories",
    price: "INR 1200",
    stock: 15,
  },
  ])
  
const handleChange =(e)=>{
setProductData({
  ...productData,[e.target.name]: e.target.value,
});
};

const handleAddProduct =()=>{
  if(
    !productData.name|| !productData.category || !productData.price || !productData.stock
  ){
    alert("please fill all the fields")
    return;
  }
  const newProduct ={
    name: productData.name,
    category: productData.category,
    price: `INR ${productData.price}`,
    stock: Number(productData.stock),
  };
  setProducts([...products,newProduct]);

  setProductData({
    name: "",
    category: "",
    price: "",
    stock: "",
  })
  setShowModal(false)
};

const handleDeleteProduct = (index)=>{
  const updatedproducts = products.filter((_, i)=> i !== index);
  setProducts(updatedproducts);
};

  const filteredProducts = products.filter((product)=>
  product.name.toLowerCase().includes(search.toLowerCase()) ||
  product.category.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className='min-h-screen bg-gray-100 flex' >
      <Sidebar/>
      <div className='flex-1 flex flex-col'>
        <Navbar/>
    <div className='p-8'>
        <h1 className='text-3xl font-bold text-slate-900'>Products</h1>
        <p className='text-gray-500 mt-1'>Manage all your products here.</p>
        <div className='flex justify-between items-center mt-8'>
          <div className='relative'>
            <FaSearch className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'/>
          <input type="text" placeholder='Search Product'value={search} onChange={(e)=>setSearch(e.target.value)} className='border border-gray-300 py-2 pl-10 pr-4 w-80 rounded-lg outline-none' />
          </div>
          <button onClick={()=>setShowModal(true)} className=' bg-slate-900 text-white rounded-lg px-5 py-2 cursor-pointer flex items-center gap-2 hover:bg-slate-700 transition'>
            <FaPlus/>
            <span>Add Product</span>
          </button>
        </div>
        <div className='mt-8 bg-white rounded-lg shadow-md overflow-hidden '>
        <table className='w-full border-collapse'>
          <thead className='bg-gray-100'>
            <tr className='border-b'>
              <th className='p-3 text-left font-semibold text-gray-700'>Product Name</th>
              <th className='p-3 text-left font-semibold text-gray-700'>Category</th>
              <th className='p-3 text-left font-semibold text-gray-700'>Price</th>
              <th className='p-3 text-left font-semibold text-gray-700'>Stock</th>
              <th className='p-3 text-left font-semibold text-gray-700'>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length > 0 ?(filteredProducts.map((product, index) =>(
            <tr key={index} className="border-b hover:bg-gray-50 transition">
             <td className="p-3 text-gray-700">{product.name}</td>
             <td className="p-3 text-gray-700">{product.category}</td>
             <td className="p-3 text-gray-700">{product.price} </td>
             <td className="p-3 ">{product.stock>10 ?(
              <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium '>{product.stock} In Stock</span>
             ): product.stock>0 ?(
              <span className='bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium'>{product.stock} Low Stock</span>
             ):(
              <span className='bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium'>Out of Stock</span>
             )} </td>
             <td className="p-3">
              <div className="flex gap-2">
                 <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
                  Edit
                  </button>
                  <button onClick={()=> handleDeleteProduct(index)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                    Delete
                    </button>
                    </div>
                     </td>
                     </tr>
                     ))
                    ):(
                      <tr>
                        <td colSpan="5" className='text-center py-8 text-gray-500 font-medium'>No Products Found</td>
                      </tr>
                    )}
            
                    </tbody>
                    </table>
    </div>
     </div>
     </div>
     {showModal && (
      <div className='fixed inset-0 bg-black/40 flex justify-center items-center'>
        <div className='bg-white rounded-xl p-6 w-[500px] shadow-xl max-h-[90vh] overflow-y-auto'>
          <h2 className='text-2xl font-bold text-slate-900'>Add Product</h2>
          <p className='text-gray-500 mt-2'>Enter product details</p>
          <div className='mt-6'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Product Name</label>
            <input type="text" name='name' value={productData.name} onChange={handleChange} placeholder='Enter product name' 
            className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-slate-900' />
          </div>
          <div className='mt-4'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Category</label>
            <select name='category' value={productData.category} onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-slate-900'>
              <option value="">Select Category</option>
              <option value="Grocery">Grocery</option>
              <option value="Electronics">Electronics</option>
              <option value="Stationary">Stationary</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div className='mt-4'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Price</label>
            <input type="number" min="0" name='price' value={productData.price} onChange={handleChange} placeholder='Enter price' 
            className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-slate-900' />
          </div>
          <div className='mt-4'>
            <label className='block text-sm font-medium mb-2 text-gray-700'>Stock</label>
            <input type="number" min="0" name='stock' value={productData.stock} onChange={handleChange} placeholder='Enter stock quantity' 
            className='w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-slate-900'/>
          </div>
          <div className='flex justify-end gap-3 mt-6'>
            <button onClick={()=>setShowModal(false)} 
            className=' px-4 py-2 border border-red-500 text-red-700 rounded-lg hover:bg-red-500 hover:text-white transition cursor-pointer'>
              Cancel
            </button>
            <button onClick={handleAddProduct}
            className='bg-slate-900 text-white rounded-lg px-4 py-2 hover:bg-slate-700 transition cursor-pointer'>
              Add Product
              </button>
          </div>
        </div>
      </div>
     )}
     </div>
  );
};

export default Products;