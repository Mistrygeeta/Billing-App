import { useState } from "react";
import {FaSearch, FaUserCircle,FaBell} from "react-icons/fa"
import Logout from "../Auth/Logout";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const [showProfile, setShowProfile] = useState(false);
   const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center h-16 px-8 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 gap-2 flex-1 max-w-lg hover:bg-slate-50 focus-within:ring-2 focus-within:ring-slate-300 transition">
        <FaSearch  className="text-gray-500"/>
        <input type="text" placeholder="Search..." value={props.search || ""}
        onChange={(e)=> props.setSearch?.(e.target.value)}
         className="bg-transparent outline-none w-full" />
        </div>
      <div className="flex gap-6 items-center">
        <div className="relative cursor-pointer">
        <FaBell className="text-gray-600 text-xl hover:text-slate-900 transition duration-200"/>
        {/* <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500"></span> */}
        </div>
        <div className="relative">
          <button onClick={()=> setShowProfile(!showProfile)}
          className="flex items-center gap-2 cursor-pointer">
            <FaUserCircle  className="text-2xl text-gray-700 cursor-pointer"/>
            <span className="font-medium">Geeta</span>
          </button>
          {showProfile &&(
            <div className="absolute right-0 top-12 w-60 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden" >
            <div className="p-4 bg-slate-50 border-b border-gray-200 ">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center">
                  <FaUserCircle className="text-3xl"/>
                </div>
                 <div>
                  <p className="font-medium text-slate-900">Geeta</p>
                  <p className="text-xs text-gray-500 mt-1">Admin</p>
                  </div>
                </div>
            </div>
           <div className="p-2">
            <button onClick={()=>{
              navigate("/profile");
              setShowProfile(false);
            }} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-slate-100 transition">
              <FaUserCircle className="text-gray-500"/>
              My Profile
            </button>
            <div className="my-1 border-t border-gray-100"></div>
            <Logout className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-500 hover:text-white transition">
              Logout
            </Logout>
           </div>
          </div>
          )}
        </div>
      </div>
    </nav>
  )
};

export default Navbar;