import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import {FaPlus} from 'react-icons/fa'
import Modal from '../components/Modal/Modal';

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

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

const handleSubmitProduct =()=>{
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
  if (editIndex !== null) {
    const updatedProducts = [...products];
    updatedProducts[editIndex]= newProduct;
    setProducts(updatedProducts);
    setEditIndex(null)
  } else {
    setProducts([...products, newProduct])
  };

  setProductData({
    name: "",
    category: "",
    price: "",
    stock: "",
  })
  setShowModal(false)
};

const handleDeleteProduct = (index)=>{
  setDeleteIndex(index);
  setShowDeleteModal(true);
};

const confirmDeleteProduct =()=>{
  const updatedProducts = products.filter((_, i) => i !== deleteIndex );
  setProducts(updatedProducts);
  setDeleteIndex(null);
  setShowDeleteModal(false);
};

const cancelDelete = ()=>{
  setDeleteIndex(null);
  setShowDeleteModal(false);
}

const handleEditProduct = (index)=>{
setProductData({
  name: products[index].name,
  category: products[index].category,
  price: products[index].price.replace("INR", "").trim(),
  stock: products[index].stock
});

setEditIndex(index);
setShowModal(true);
};

const resetForm = ()=>{
  setEditIndex(null);
  setProductData({
    name: "",
    category: "",
    price: "",
    stock: "",
  });
}

  return (
    <div className='min-h-screen bg-gray-100 flex' >
      <Sidebar/>
      <div className='ml-60 flex-1 flex flex-col'>
        <Navbar/>
    <div className='p-8'>
      <div className='flex justify-between items-center'>
        <div>
        <h1 className='text-3xl font-bold text-slate-900'>Products</h1>
        <p className='text-gray-500 mt-1'>Manage and track all your products here.</p>
        </div>
        <button onClick={()=>{
          resetForm();
          setShowModal(true)
        }}
        className='bg-slate-900 text-white rounded-lg px-5 py-2.5 cursor-pointer flex items-center gap-2 hover:bg-slate-700 transition'>
          <FaPlus/>
          <span>Add Product</span>
          </button>
      </div>
        <div className='mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden '>
        <table className='w-full border-collapse'>
          <thead className='bg-slate-50'>
            <tr className='border-b'>
              <th className='px-5 py-4 text-left font-semibold text-gray-700'>Product Name</th>
              <th className='px-4 py-4 text-left font-semibold text-gray-700'>Category</th>
              <th className='px-5 py-4 text-left font-semibold text-gray-700'>Price</th>
              <th className='px-5 py-4 text-left font-semibold text-gray-700'>Stock</th>
              <th className='px-5 py-4 text-left font-semibold text-gray-700'>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ?(products.map((product, index) =>(
            <tr key={index} className="border-b hover:bg-gray-50 transition">
             <td className="px-5 py-4"><span className='font-medium text-slate-900'>{product.name}</span></td>
             <td className="px-5 py-4 text-gray-700">{product.category}</td>
             <td className="px-5 py-4 text-gray-700">{product.price} </td>
             <td className="px-5 py-4">{product.stock>10 ?(
              <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium '>{product.stock} In Stock</span>
             ): product.stock>0 ?(
              <span className='bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium'>{product.stock} Low Stock</span>
             ):(
              <span className='bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium'>Out of Stock</span>
             )} </td>
             <td className="px-5 py-3">
              <div className="flex gap-4">
                 <button onClick={()=>handleEditProduct(index)} 
                 className="bg-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-blue-600 transition cursor-pointer">
                  Edit
                  </button>
                  <button onClick={()=> handleDeleteProduct(index)} 
                  className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600 transition cursor-pointer">
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
      <Modal title={editIndex !== null? "Edit Product": "Add Product"}
      subtitle="Enter Product details"
      onClose={()=>{
        resetForm();
        setShowModal(false);
      }}
      onSubmit={handleSubmitProduct}
      submitText={editIndex !== null ? "Update Product": "Add Product"}>
          <div>
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
      </Modal>
     )}
     {showDeleteModal && (
      <div className='fixed inset-0 bg-black/40 flex justify-center items-center'>
        <div className='w-[400px] bg-white rounded-xl p-8 shadow-xl'>
          <h2 className='text-2xl text-red-500 font-bold'>Delete Product</h2>
          <p className='text-gray-800 mt-4 text-center'>Are you sure you want to delete this product?</p>
          <div className='flex justify-end gap-5 mt-8'>
            <button onClick={cancelDelete} className='border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer'>
              Cancel
              </button>
            <button onClick={confirmDeleteProduct} className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer'>Delete</button>
          </div>
        </div>
      </div>
     )}
     </div>
  );
};

export default Products;