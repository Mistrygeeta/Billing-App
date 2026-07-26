import {FaSearch, FaUserCircle,FaBell} from "react-icons/fa"

const Navbar = (props) => {
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
        <div className="flex items-center gap-2 cursor-pointer">
        <FaUserCircle  className="text-2xl text-gray-700 cursor-pointer"/>
        <span className="font-medium">Geeta</span>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;