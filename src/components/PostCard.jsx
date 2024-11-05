import React, { useState } from "react";
import errorImg3 from "../assets/images/error3.png";
import userimg1 from "../assets/images/userimg1.png";
import { LuBarChart2 } from "react-icons/lu";
import { PiChatTeardropDotsThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
const PostCard = ({ errorImg, title, userImg, userName }) => {
  const [liked, setLiked ] = useState(false)
  // const handleLiked = () = > {

  // }
  return (
    <div className="post-card ">
      <div className="py-2 px-1">
        <div className="flex items-center">
          <img src={userImg} alt="" className="w-10 cursor-pointer" />
          <p className="text-sm text-gray-400 font-semibold ml-1 cursor-pointer">{userName}</p>
        </div>
        <h3 className="text-white p-1 font-semibold text-sm ">{title}</h3>
      </div>
      <div className="img-card">
        <img src={errorImg} alt="" />
      </div>
      <div className="flex items-center  justify-between  p-2">
        <div className="flex items-center gap-4">
          <span className="text-white flex items-center cursor-pointer">
            <PiChatTeardropDotsThin />
            <span>2</span>
          </span>
          <span className="text-white flex items-center cursor-pointer">
            <CiHeart />
            <span>1k</span>
          </span>
          <span className="text-white flex items-center">
            <LuBarChart2 />
            <span>2k</span>
          </span>
        </div>
        <div className="flex items-center gap-2 ">
          <span  className="text-white flex items-center cursor-pointer">
            <CiBookmark/>
          </span>
          <span  className="text-white flex items-center cursor-pointer">
            <CiShare1/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
