import React from "react";
import logo from "../assets/logo.png";
import { FaBars, FaSearch } from "react-icons/fa";
const Navbar = ({ showMobileSearch }) => {
  return (
    <div className="nav-container w-full bg-white px-6 py-3 h10">
      <div className="container flex items-center ">
        <div className="flex justify-berween w-full">
          <div className="logo flex items-center ">
            <div>
              <span className="bars">
                <FaBars />
              </span>
            </div>
            <div>
              <img src={logo} alt="" />
              <h3>
                Dev<span>Post</span>
              </h3>
            </div>
          </div>
          <div className="nav-search">
            <input
              type="text"
              placeholder="Search error/solution..."
              className=""
            />
          </div>
        </div>
        <div className="mobile-searchIcon">
          <span className="" onClick={showMobileSearch}>
            <FaSearch />
          </span>
        </div>
        <div className="nav-btns flex items-center">
          <button className="login font-medium ">Login</button>
          <button className="signup">Create account</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
