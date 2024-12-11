import React from "react";
import Sidebar from "../components/HomeComponents/Sidebar";
import { useState, useEffect } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  const closeSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }
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
      <div>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={sidebarOpen} onClick={closeSidebar}/>
      </div>
      <div className="main-content flex-1 overflow-auto  transition-all duration-300">
        <header className="bg-white shadow-lg p-4 py-2 md:py-3 flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <button
              className="text-2xl block md:hidden"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
            <h3>DevPost</h3>
          </div>
          <div>
            <i className="bi bi-bell text-lg"></i>
          </div>
        </header>
        <div className="flex items-center w-full max-w-md mx-auto p-3">
          <input
            type="text"
            placeholder="Search"
            // onChange={handleSearchPost}
            className="w-full px-4 py-2 border text-white border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 bg-transparent"
          />
          <button className="px-4 py-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
