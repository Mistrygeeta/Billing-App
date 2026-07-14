import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleEmailChange = (event)=>{
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value)
    }

    const handleLogin = ()=>{
      if (email === "" && password ==="") {
        alert("email and password are required")
      }else if(email === ""){
        alert ("email is required")
      }else if(password === ""){
        alert("password is required")
      }else {
        if (email === "admin@gmail.com" && password === "admin123") {
            console.log("login successful");
            console.log(email);
            console.log(password);
            navigate("/dashboard")
        } else {
            alert("email and password is wrong")
        }
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
       <div className="w-1/2">
        right section
    </div>
    </div>
  )
}

export default Login;