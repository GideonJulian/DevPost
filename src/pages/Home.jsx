import React from "react";
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PostDetails from "../utils/PostDetails";
import PostCard from "../components/PostCard";
const Home = () => {
  return (
    <div className="flex  home-container">
      <div>
        <SideBar />
      </div>
      <div className="home-content mt-5 w-full">
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
