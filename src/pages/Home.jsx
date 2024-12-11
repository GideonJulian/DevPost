import React from "react";
import Sidebar from "../components/HomeComponents/Sidebar";
import { useState, useEffect } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import PostCard from "../components/HomeComponents/PostCard";
import PostData from "../utils/PostData";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
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
  const matchesSearchQuery = (post) => {
    return (
      post.erroTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.postTags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };
  const handleNavigate = (id) => {
    console.log("Navigating to post with ID:", id);
    if (id) {
      navigate(`/post/${id}`);
    } else {
      console.error("Invalid post ID");
    }
  };
  const filteredPosts = PostData.filter((post) => matchesSearchQuery(post));
  return (
    <div className="flex h-screen">
      <div>
        <Sidebar
          toggleSidebar={toggleSidebar}
          isOpen={sidebarOpen}
          onClick={closeSidebar}
        />
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border text-white border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 bg-transparent"
          />
          <button className="px-4 py-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
            <FaSearch />
          </button>
        </div>
        <div className="posts  p-3 md:p-8  w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 ">
          {filteredPosts.map((item) => (
            <PostCard
              key={item.id}
              errorImg={item.screenShort}
              title={item.erroTitle}
              userImg={item.userProfile}
              userName={item.username}
              postTags={item.postTags}
              onClick={() => handleNavigate(item.id)}
            />
          ))}
        </div>
      </div>
      <div>
         <Outlet />
       </div>
    </div>
  );
};

export default Home;
