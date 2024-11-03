import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import tags from "../utils/Tags";

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
      <div className="main-content ">
        <div
          className="tabs-row w-80 p-2 flex items-center gap-2 scrollbar scrollbar-track-transparent scrollbar-thumb-transparent  ml-20"
          style={{ overflowX: "auto" }}
        >
     

          <div
            ref={carouselRef}
            className="tabs-row w-full p-3 flex items-center gap-2 overflow-x-auto scrollbar scrollbar-track-transparent scrollbar-thumb-transparent ml-14"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
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
                className="text-white px-6 py-2 rounded-sm bg-hover w-72 text-sm whitespace-nowrap text-ellipsis cursor-pointer"
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
    </div>
  );
};

export default Home;
