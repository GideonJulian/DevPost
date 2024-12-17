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
    <div className="h-screen flex flex-col">
      {/* Top Section */}
      <div className="w-full flex items-center justify-center min-h-screen px-3 py-2">
        <div className="px-4  md:mt-0 mx-auto flex flex-col items-center justify-center">
          {/* Header Section */}
          <div className="text-logo-color text-sm flex items-center gap-3 mb-4 font-bold uppercase flex-col md:flex-row">
            <h3 className="font-bold text-logo-color text-sm text-center md:text-left">
              Share 100+ Development Posts Monthly
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
          </div>

          {/* Main Title */}
          <h1 className="max-w-[50rem] text-center font-bold text-light-grey text-4xl md:text-7xl leading-tight">
            Discover and Share Your Solutions
          </h1>

          {/* Subheading */}
          <h2 className="font-semibold mt-4 mb-12 text-center max-w-[390px] sm:max-w-[410px] px-4 text-gray-500">
            Connect with developers, showcase your work, and explore trending
            technologies.
          </h2>

          {/* Search Bar */}
          <div className="relative max-w-[530px] w-full">
            <i className="bi bi-search absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-500"></i>
            <input
              type="text"
              placeholder="Search for solutions and errors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block px-6 pl-16 bg-gray-100 text-gray-700 font-normal text-base py-3 h-16 rounded-xl w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 md:px-8 md:py-3 px-3 py-2 rounded-full md:rounded-xl font-semibold bg-logo-color text-white   flex items-center justify-center">
              <span className="hidden md:block">Search</span>
              <i className="bi bi-send block md:hidden"></i>
            </button>
          </div>
          <button className="bg-logo-color px-6 py-4 rounded-xl flex items-center gap-2 text-white mt-4 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            Explore more post
          </button>
        </div>
      </div>

      {/* Posts Section */}
      <div className="p-3 md:p-8 w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 pb-32">
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
  );
};

export default Home;
