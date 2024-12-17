import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/HomeComponents/PostCard";
import PostData from "../utils/PostData";
const Explore = () => {
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
    <div className="px-3 md:px-5 mt-[70px]">
      <div>
        <h1 className="mb-2 text-3xl font-bold font-display text-white">
          Browse all post
        </h1>
        <h2 className="font-semibold mt-4 mb-12  max-w-[390px] sm:max-w-[410px]  text-gray-500">
          Discover Solutions, Share Ideas, and Build Together
        </h2>
      </div>
      <div className="flex flex-col md:flex-row  md:items-center justify-between px-3 ">
        <div>
          <span className="text-light-grey">First page</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="text-gray-100 capitalize font-semibold h-[40px] text-sm dropdown-trigger px-3 py-2 hover:bg-dark rounded-lg flex items-center gap-2 justify-center">
            <span>Languages</span>
            <i class="bi bi-chevron-down"></i>
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by tags, user error "
              className="bg-dark pr-10 pl-4 w-full py-3 rounded-lg shadow-sm placeholder:text-sm focus:ring-4 focus:ring-logo-color"
            />
            <i className="bi bi-search absolute top-1/2 left-[87%] transform -translate-y-1/2 text-gray-500 text-lg"></i>
          </div>
        </div>
      </div>
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

export default Explore;
