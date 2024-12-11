import React from "react";
import Sidebar from "../components/HomeComponents/Sidebar";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
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
      <div>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={sidebarOpen} />
      </div>
      <div className="main-content flex-1 overflow-auto  transition-all duration-300">
        <header className="bg-white shadow-md p-4 py-2 md:py-3 flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <button className="text-2xl block md:hidden" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <h3>DevPost</h3>
          </div>
          <div>
            <i className="bi bi-bell text-lg"></i>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Home;
