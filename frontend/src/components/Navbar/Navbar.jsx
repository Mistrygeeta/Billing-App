import {FaSearch, FaUserCircle} from "react-icons/fa"

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="left-side">
        <h2>BillPro</h2>
      </div>
      <div className="right-side">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="profile">
          <FaUserCircle className="profile-icon" />
        </div>
      </div>
    </nav>
  )
};

export default Navbar;