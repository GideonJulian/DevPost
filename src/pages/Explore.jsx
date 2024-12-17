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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
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
      <div className="flex flex-col md:flex-row  md:items-center justify-between px-3 w-full ">
        <div>
          <span className="text-light-grey">First page</span>
        </div>
        <div className="flex flex-col md:flex-row gap-3 items-center md:items-start">
          <button
            onClick={toggleDropdown}
            className="text-gray-100 capitalize flex justify-between items-center font-semibold h-10 w-full md:w-auto text-sm px-4 py-2 hover:bg-dark rounded-lg gap-2"
          >
            <p className="text-light-grey">
              sort: <span className="text-white font-semibold">for you</span>
            </p>
            <i className="bi bi-chevron-down"></i>
          </button>
          <div className="relative">
            <div
              className={`rounded-lg absolute border-dark border-2 top-full md:top-7 left-10 md:-left-36 z-[1000] p-1 bg-dark shadow-xl transition-all duration-500 ease ${
                isDropdownOpen
                  ? "visible translate-y-[5px] opacity-100"
                  : "invisible translate-y-0 opacity-0"
              }`}
            >
              <ul>
                <li>
                  <a
                    href=""
                    className="text-gray-300 font-sans hover:text-gray-100 hover:bg-background no-underline px-5 py-2.5 flex items-center justify-start  gap-4 border-none bg-transparent cursor-pointer w-full text-center text-sm font-semibold m-0 whitespace-nowrap rounded-[6px]"
                  >
                    <i class="bi bi-person-circle"></i>
                    For You
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-300 font-sans hover:text-gray-100 hover:bg-background no-underline px-5 py-2.5 flex items-center gap-4 justify-start border-none bg-transparent cursor-pointer w-full text-center text-sm font-semibold m-0 whitespace-nowrap rounded-[6px]"
                  >
                    <i class="bi bi-calendar"></i>
                    Date
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-300 font-sans hover:text-gray-100 hover:bg-background no-underline px-5 py-2.5 flex items-center justify-start gap-4 border-none bg-transparent cursor-pointer w-full text-center text-sm font-semibold m-0 whitespace-nowrap rounded-[6px]"
                  >
                    <i class="bi bi-bookmark"></i>
                    Saved
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative w-full md:w-auto flex-grow">
            <input
              type="text"
              placeholder="Search by tags, user error"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-dark text-gray-100 pr-12 pl-4 py-2 w-full rounded-lg shadow-sm placeholder:text-sm focus:ring-4 focus:ring-logo-color focus:outline-none"
            />

            <i className="bi bi-search absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 text-lg"></i>
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
