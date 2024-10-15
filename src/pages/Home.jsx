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
  const [selectedLanguage, setSelectedlanguage ] = useState(null)


  const filteredPost = selectedLanguage ? PostDetails.filter(post => 
    post.tags.some(tag => tag.toLowerCase() === selectedLanguage.name.toLowerCase())
  ): 
  PostDetails
  console.log('Selected Language:', selectedLanguage);
  console.log('Filtered Posts:', filteredPost);
  
  return (
    <div className="flex  home-container">
      <div
        className={` Sidebar ${
          sidebarOpen ? "open" : "sidebar"
        } md:translate-x-0`}
      >
        <SideBar closeSidebar={closeSidebar} onSelectLanguage={setSelectedlanguage}/>
      </div>

      <div className="home-content mt-5 w-full">
        <span className="open-sidebar mb-3" onClick={toggleSidebar}>
          <IoMenuOutline />
        </span>
        <div className="home-nav">
          <Navbar />
          
        </div>
        <div className="posts ">
        {/* <h1>{selectedLanguage ? `${selectedLanguage} Posts` : 'All Posts'}</h1> */}
          {
            filteredPost.length > 0 ? (
              filteredPost.map((items) => (
                <PostCard
                  desc={items.erroTitle}
                  imgSrc={items.screenShort}
                  usrename={items.username}
                  datePosted={items.postDate}
                  profileImg={items.userProfile}
                  key={items.id}
                  tags={items.tags}
                />
              ))
            ):<p>No post is available for this language </p>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
