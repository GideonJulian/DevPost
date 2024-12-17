import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import Sidebar from "../components/HomeComponents/Sidebar";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";
const HomeLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  const closeSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    handleResize();

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar
        toggleSidebar={toggleSidebar}
        isOpen={sidebarOpen}
        onClick={closeSidebar}
      />
      <div className="main-content flex-1 overflow-auto  transition-all duration-300">
        <header className="bg-sidebar-bg shadow-lg p-4 py-2 md:py-3 flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <div className="flex  items-center ">
              <img src={logo} alt="" />
              <h3 className="font-bold text-2xl text-logo-color">DevPost</h3>
            </div>
            <div className="">
              <ul className="hidden md:flex items-center gap-10 ml-10">
                <li className="text-white font-semibold">Challenges </li>
                <li className="text-white font-semibold">Blog </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex  gap-2">
              <button className="px-6 py-3 flex items-center font-semibold bg-logo-color text-white rounded-lg ">
              <i class="bi bi-plus"></i>
              Add a post
              </button>
              <button className="px-6 py-2 bg-dark text-white font-semibold font-sans rounded-lg ">
                Sign in or Create an Account
              </button>
            </div>
            <i className="bi bi-bell text-lg text-light-grey  "></i>
            <button
              className="text-2xl text-light-grey block md:hidden"
              onClick={toggleSidebar}
            >
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </header>

        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
