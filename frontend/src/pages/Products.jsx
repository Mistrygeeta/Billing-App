import React, { useState } from 'react'
import {FaPlus, FaSearch} from 'react-icons/fa'
const Products = () => {
  const [search, setSearch] = useState("");
  const products =[
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
  ];

  const filteredProducts = products.filter((product)=>
  product.name.toLowerCase().includes(search.toLowerCase()) ||
  product.category.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className='p-8'>
        <h1 className='text-3xl font-bold text-slate-900'>Products</h1>
        <p className='text-gray-500 mt-1'>Manage all your products here.</p>
        <div className='flex justify-between items-center mt-8'>
          <div className='relative'>
            <FaSearch className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'/>
          <input type="text" placeholder='Search Product'value={search} onChange={(e)=>setSearch(e.target.value)} className='border border-gray-300 py-2 pl-10 pr-4 w-80 rounded-lg outline-none' />
          </div>
          <button className=' bg-slate-900 text-white rounded-lg px-5 py-2 cursor-pointer flex items-center gap-2 hover:bg-slate-700 transition'>
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
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
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
  );
};

export default Products;