
import {
  FiSearch,
  FiShoppingCart,
  FiBell,
  FiGrid,
  FiUser,
} from "react-icons/fi";
import profileImg from "../assets/images/profile.jpg";
import logo from "../assets/logos/sporterp-logo.png.svg";



export default function Navbar() {
  return (
       <div className="bg-white border-b px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
  <img
    src={logo}
    alt="SportERP Logo"
    className="h-7 w-auto"
   
  />

      {/* Center - Search */}
      <div className="flex items-center gap-2 border px-3 py-2 rounded-md w-96">
        <FiSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-sm w-full"
        />
      </div>
    </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-5">
        {/* Upgrade Button */}
        <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600">
         + Upgrade
        </button>

        {/* Icons */}
        <FiShoppingCart className="text-xl text-gray-600 cursor-pointer hover:text-black" />
        <FiBell className="text-xl text-gray-600 cursor-pointer hover:text-black" />
        <FiGrid className="text-xl text-gray-600 cursor-pointer hover:text-black" />

        {/* Profile */}
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
          <FiUser className="text-gray-600" />

          <img
  src={profileImg}
  alt="Profile"
  className="w-9 h-9 rounded-full object-cover cursor-pointer"
/>

        </div>
      </div>
    </div>
    
  );
}



