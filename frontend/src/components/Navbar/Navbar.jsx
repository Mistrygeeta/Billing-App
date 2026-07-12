import {FaSearch, FaUserCircle,FaBell} from "react-icons/fa"

const Navbar = (props) => {
  return (
    <nav className="flex justify-between items-center h-16 px-6 bg-white border-b ">
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 gap-2 w-72 ">
        <FaSearch  className="text-gray-500"/>
        <input type="text" placeholder="Search" className="outline-none bg-transparent w-full" />
        </div>
      <div className="flex gap-5 items-center">
        <FaBell className="text-gray-600 cursor-pointer"/>
        <FaUserCircle  className="text-2xl text-gray-700 cursor-pointer"/>
        <span>Geeta</span>
      </div>
    </nav>
  )
};

export default Navbar;