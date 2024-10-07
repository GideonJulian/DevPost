import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className="home-nav-container  w-full">
      <span className="open-sidebar">
        <IoMenuOutline/>
      </span>
      <ul className="flex w-full justify-between items-center">
        <div className="nav-search w-full">
          <input
            type="text"
            placeholder="Search solution/error"
            className="h-10 px-4 py-5 w-full"
          />
        </div>
        <div className="nav-icons mr-10 flex items-center gap-5">
          <div className="mail-icon border border-input px-2 py-2 rounded-full">
            <MdOutlineEmail />
          </div>
          <div className="mail-icon border border-input px-2 py-2 rounded-full">
            <IoIosNotificationsOutline  />
          </div>
        </div>
        <div className="flex nav-button mr-5 gap-2 items-center">
          <button type="button" className="login font-medium">Login</button>
          <button type="button" className="signup font-medium">Signup</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
