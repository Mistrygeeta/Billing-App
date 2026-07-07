import { useState } from "react";
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
    <div>
        <h1>Billing Management System</h1>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
        <label htmlFor="password" >Password</label>
        <input id="password" type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange}/>
        <button onClick={handleLogin} >Login</button>
    </div>
  )
}

export default Login;