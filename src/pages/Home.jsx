import React from "react";
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PostDetails from "../utils/PostDetails";
import PostCard from "../components/PostCard";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="flex  home-container">
      <div
        className={` Sidebar ${
          sidebarOpen ? "open" : "sidebar"
        } md:translate-x-0`}
      >
        <SideBar closeSidebar={closeSidebar}/>
      </div>

      <div className="home-content mt-5 w-full">
        <span className="open-sidebar mb-3" onClick={toggleSidebar}>
          <IoMenuOutline />
        </span>
        <div className="home-nav">
          <Navbar />
        </div>
        <div className="posts ">
          {PostDetails.map((items) => (
            <PostCard
              desc={items.solution}
              imgSrc={items.screenShort}
              usrename={items.username}
              datePosted={items.postDate}
              profileImg={items.userProfile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
