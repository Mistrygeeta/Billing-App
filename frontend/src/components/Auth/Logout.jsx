import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({children, className}) => {
    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    }
  return (
    <button onClick={handleLogout} className={className}>
        {children}
    </button>
  )
}

export default Logout;