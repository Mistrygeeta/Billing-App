import { useState } from "react";
import { FaCheckCircle, FaEnvelope,FaLock,FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleNameChange = (event)=>{
        setName(event.target.value)
    };

    const handleEmailChange = (event)=>{
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value)
    };

    const handleSignup = ()=>{
      if (name === "" && email === "" && password ==="") {
        alert("All fields are required")
      }else if(name===""){
        alert ("name is required")
      }else if(email === ""){
        alert ("email is required")
      }else if(password === ""){
        alert("password is required")
      }else {
        console.log("Signup succesful");
        console.log("name :", name);
        console.log("email :", email);
        console.log("password :", password);

        navigate("/login")
      }
    }
  return (
    <div className="min-h-screen bg-gray-100 flex ">
       <div className="w-1/2 bg-slate-900 text-white flex items-center px-16 ">
        <div>
        <h1 className="text-5xl font-bold">BillPro</h1>
        <p className="text-slate-300 mt-3">Billing Management System</p>
        <h2 className="text-4xl font-bold leading-tight mt-12">Manage Your Business <br />
        With Confidence </h2>
        <p className="text-slate-300 text-lg mt-5 max-w-md leading-7">Create invoices, manage customers and track payments from one simple dashboard.</p>
       <div className="mt-10 space-y-4">
        <div className="flex items-center gap-3" >
          <FaCheckCircle className="text-green-400 text-xl" />
          <span>Create Professional Invoices</span>
        </div>
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-400 text-xl"/>
          <span>Manage Customers Easily</span>
        </div>
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-400 text-xl"/>
          <span>Track Payment in Real Time</span>
        </div>
       </div>
       </div>
       </div>
       <div className="w-1/2 flex justify-center items-center p-3">
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-[460px]">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 mt-2">Create your BillPro account</p>
        <div className="mt-10">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 ">Full Name</label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" id="name" placeholder="Enter your name" value={name} onChange={handleNameChange}
            className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
        </div>
        <div className="mt-10">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 ">Email</label>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="email" id="email" placeholder="Enter your email" value={email} onChange={handleEmailChange}
          className="w-full border border-gray-300 rounded-lg  py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-slate-900" />
        </div>
        </div>
        <div className="mt-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
          <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} 
          className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-slate-900"/>
           {showPassword ?(<FaEyeSlash onClick={()=> setShowPassword(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"/>
          ):(
          <FaEye onClick={()=> setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />)}
        </div>
        </div>
        
        <button onClick={handleSignup} className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-slate-700 hover:scale-[1.02] shadow-md transition duration-300">Create Account</button>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">Already have an account?{" "} 
            <Link to="/login" className="text-slate-900 font-semibold hover:underline">Login</Link> </p>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Signup;