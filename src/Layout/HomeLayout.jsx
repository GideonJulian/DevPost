import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import Sidebar from "../components/HomeComponents/Sidebar";
import logo from "../assets/logo.png";
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
        setSidebarOpen(true);
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
            <button
              className="text-2xl text-white block md:hidden"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
            <div className="flex md:hidden items-center ">
              <img src={logo} alt="" />
              <h3 className="font-bold text-2xl text-logo-color">DevPost</h3>
            </div>
          </div>
          <div>
            <i className="bi bi-bell text-lg"></i>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
