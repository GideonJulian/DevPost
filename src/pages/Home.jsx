import React from "react";

import { useState, useEffect } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import PostCard from "../components/HomeComponents/PostCard";
import PostData from "../utils/PostData";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    console.log("Navigating to post with ID:", id);
    if (id) {
      navigate(`/${id}`);
    } else {
      console.error("Invalid post ID");
    }
  };
  const matchesSearchQuery = (post) => {
    return (
      post.erroTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.postTags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const filteredPosts = PostData.filter((post) => matchesSearchQuery(post));
  return (
    <div className="flex h-screen">
      <div></div>
      <div>
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
    </div>
  );
};

export default Home;
