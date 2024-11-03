import React from "react";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
const Navbar = ({toggleSidebar}) => {
  return (
    <div className="navbar-container p-4 flex items-center justify-around ">
      <div className="text-white text-2xl" onClick={toggleSidebar}>
        <FaBars />  
      </div>
      <div className="logo flex items-center gap-1 ">
        <img src={logo} alt="" />
        <h3 className="text-white font-bold text-lg">DevPost</h3>
      </div>
      <div className="flex items-center w-full max-w-md mx-auto nav-search">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 bg-transparent"
        />
        <button className="px-4 py-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
          <FaSearch />
        </button>
      </div>
      <div className="flex gap-2">
        <button className="font-semibold text-white text-3xl ">
          <IoIosNotificationsOutline />
        </button>
        <button className="font-semibold text-white text-3xl ">
          <FaUserCircle />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
