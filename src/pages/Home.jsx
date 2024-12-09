import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import tags from "../utils/Tags";
import PostCard from "../components/PostCard";
import PostDetails from "../utils/PostDetails";
const Home = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const carouselRef = useRef(null);

  // Scroll to the left
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  // Scroll to the right
  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
  };
  const filteredPosts = PostDetails.filter(
    (post) =>
      post.erroTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.postTags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );
  return (
    <div className="">
      <div className="sidebar">{showSideBar && <Sidebar />}</div>
      <div className="nav-bar">
        <Navbar
          toggleSidebar={toggleSidebar}
          onSearch={(query) => setSearchQuery(query)}
        />
      </div>
      <div className="main-content mt-28 w-full">
        <div className="w-full bg-grey-blue top-10  ">
          <div className="mobile-search-input px-3 mt-5">
            <input
              type="text"
              placeholder="Search error"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
    
              className="w-full px-3 py-2 text-white bg-transparent border rounded-md "
            />
          </div>

          <div className="flex items-cneter justify-center lg:ml-24 sm:ml-0">
            <div
              ref={carouselRef}
              className="tabs-row w-90 p-3 flex items-center gap-2 overflow-x-auto scrollbar scrollbar-track-transparent scrollbar-thumb-transparent ml-14"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              {/* <button
                onClick={scrollLeft}
                className="absolute left-64 z-10 p-2 bg-gray-700 text-white rounded-full"
              >
                {"<"}
              </button> */}
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="tab text-white px-6 py-2 rounded-md bg-icon-col w-72 text-sm whitespace-nowrap text-ellipsis cursor-pointer"
                >
                  {tag}
                </div>
              ))}
              {/* <button
                onClick={scrollRight}
                className="absolute right-32 z-10 p-2 bg-gray-700 text-white rounded-full"
              >
                {">"}
              </button> */}
            </div>
          </div>
        </div>
        <div className="posts  p-8   w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 ">
          {filteredPosts.map((items) => (
            <PostCard
              errorImg={items.screenShort}
              title={items.erroTitle}
              userImg={items.userProfile}
              userName={items.username}
              postTags={items.postTags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
