import React, { useState } from "react";
import { PiLink } from "react-icons/pi";
import { BsChatSquareText } from "react-icons/bs";
import { VscThumbsdown, VscThumbsup } from "react-icons/vsc";

import { LuBookmark } from "react-icons/lu";
const PostCard = ({ errorImg, title, userImg, userName }) => {
  const [liked, setLiked] = useState(false);
  // const handleLiked = () = > {

  // }
  return (
    <div className="post-card ">
      <div className="py-2 px-1">
        <div className="flex items-center">
          <img src={userImg} alt="" className="w-10 cursor-pointer" />
          <div className="flex flex-col ml-1">
            <p className="text-sm text-white font-semibold ml-1 cursor-pointer">
              {userName}
            </p>
            <p className="text-sm text-gray-400 font-semibold ml-1">
              Frontend dev
            </p>
          </div>
        </div>
        <h3 className="text-white p-1 font-bold text-lg ">{title}</h3>
      </div>
      <div className="img-card">
        <img src={errorImg} alt="" />
      </div>
      <div className="flex items-center  justify-between  p-2   ">
        <div className="flex items-center gap-4 ">
          <span className="text-white-blue font-bold text-lg flex items-center cursor-pointer px-3 py-2 bg-icon-col rounded-xl gap-2">
            <span className="text-lg">
              <VscThumbsup />
            </span>
            <span className="">2</span>
            <span className="w-px h-4 bg-white"></span>
            <span>
              <VscThumbsdown />
            </span>
            <span className="">2</span>
          </span>
          <span className="text-white-blue font-bold text-lg flex items-center cursor-pointer px-3 py-2 bg-icon-col rounded-xl gap-2">
            <BsChatSquareText />
            <span className="w-px h-4 bg-white"></span>
            <span className="">2</span>
          </span>
          <span className="text-white-blue font-bold text-lg flex items-center cursor-pointer px-3 py-2 bg-icon-col rounded-lg gap-2">
            <LuBookmark />
          </span>
          <span className="text-white-blue font-bold text-lg flex items-center cursor-pointer px-3 py-2 bg-icon-col rounded-lg gap-2">
            <PiLink />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
