import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import tags from "../utils/Tags";
import PostCard from "../components/PostCard";
import PostDetails from "../utils/PostDetails";
const Home = () => {
  const [showSideBar, setShowSideBar] = useState(true);
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
  return (
    <div>
      <div className="nav-bar">
        <Navbar toggleSidebar={toggleSidebar} />
      </div>

      <div className="sidebar">{showSideBar && <Sidebar />}</div>
      <div className="main-content mt-20">
        <div className="w-full bg-black  fixed top-16  ">
          <div className="mobile-search-input px-2 mt-5">
            <input
              type="text"
              placeholder="Search error"
              className="w-full px-3 py-2 text-white bg-transparent border rounded-md "
            />
          </div>
          <div
            className="tabs-row p-2 flex items-center gap-2 scrollbar scrollbar-track-transparent scrollbar-thumb-transparent  ml-20 "
            style={{ overflowX: "auto" }}
          >
            <div
              ref={carouselRef}
              className="tabs-row w-full p-3 flex items-center gap-2 overflow-x-auto scrollbar scrollbar-track-transparent scrollbar-thumb-transparent ml-14"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              <button
                onClick={scrollLeft}
                className="absolute left-64 z-10 p-2 bg-gray-700 text-white rounded-full"
              >
                {"<"}
              </button>
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="tab text-white px-6 py-2 rounded-md bg-hover w-72 text-sm whitespace-nowrap text-ellipsis cursor-pointer"
                >
                  {tag}
                </div>
              ))}
              <button
                onClick={scrollRight}
                className="absolute right-32 z-10 p-2 bg-gray-700 text-white rounded-full"
              >
                {">"}
              </button>
            </div>

            {/* Right scroll button */}
          </div>
        </div>
        <div className="posts  p-5   w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ">
          {PostDetails.map((items) => (
            <PostCard
              errorImg={items.screenShort}
              title={items.erroTitle}
              userImg={items.userProfile}
              userName={items.username}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
