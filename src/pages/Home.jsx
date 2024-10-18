import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PostDetails from "../utils/PostDetails";
import PostCard from "../components/PostCard";
const Home = () => {
  const [show, setShow] = useState(false);
  const showMobileSearch = () => {
    setShow(!show);
  };
  return (
    <div className="home-container">
      <div className="">
        <div className="navbar">
          <Navbar showMobileSearch={showMobileSearch} />
        </div>
      </div>
      <div className="content flex gap-80">
        <div className=" sidebar">
          <Sidebar />
        </div>
        {show ? (
          <div className="mobile-searchInput mt-20">
            <input
              type="text"
              placeholder="Search post....."
              className="w-full h-10 px-3 py-2 border"
            />
          </div>
        ) : null}
        <div className="post-container ">
          {PostDetails.map((post) => (
            <PostCard
              userPics={post.userProfile}
              userName={post.username}
              tags={post.tags}
              postTitle={post.erroTitle}
              postImg={post.screenShort}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
