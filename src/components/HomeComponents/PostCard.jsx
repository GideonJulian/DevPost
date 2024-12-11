import React, { useState } from "react";
import { PiLink } from "react-icons/pi";
import { BsChatSquareText } from "react-icons/bs";
import { VscThumbsdown, VscThumbsup } from "react-icons/vsc";
import PostDetails from "../../utils/PostData";
import { LuBookmark } from "react-icons/lu";
const PostCard = ({ errorImg, title, userImg, userName, postTags, onClick }) => {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);

  // Handle Like button click
  const handleLike = () => {
    // Only increment likes if the post hasn't been disliked
    if (likes === 0 && disLikes === 0) {
      setLikes(1);
    } else if (likes === 1) {
      setLikes(0);
    } else if (disLikes === 1) {
      setDisLikes(0);
      setLikes(1);
    }
  };

  // Handle Dislike button click
  const handleDisLike = () => {
    // Only increment dislikes if the post hasn't been liked
    if (disLikes === 0 && likes === 0) {
      setDisLikes(1);
    } else if (disLikes === 1) {
      setDisLikes(0);
    } else if (likes === 1) {
      setLikes(0);
      setDisLikes(1);
    }
  };
  return (
    <div className="post-card cursor-pointer " >
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
        <h3 className="text-white p-1 font-bold text-lg " onClick={onClick}>{title}</h3>
      </div> 
      <div className="tags-row flex gap-2 mb-2 ml-2 ">
        {postTags.map((tag, index) => (
          <span
            key={index}
            className="text-white-blue px-2 py-1 rounded-md border border-icon-col text-xs font-normal whitespace-nowrap"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="img-card">
        <img src={errorImg} alt="" onClick={onClick}/>
      </div>
      <div className="flex items-center  justify-between  p-2   ">
        <div className="flex items-center gap-4 ">
          <span className="text-white-blue font-bold text-lg flex items-center cursor-pointer px-3 py-2 bg-icon-col rounded-xl gap-2">
            <div className="flex items-center gap-1">
              <span className="text-lg" onClick={handleLike}>
                <VscThumbsup />
              </span>
              <span className="">{likes}</span>
            </div>
            <span className="w-px h-4 bg-white"></span>
            <div className="flex items-center gap-1" onClick={handleDisLike}>
              <span>
                <VscThumbsdown />
              </span>
              <span className="">{disLikes}</span>
            </div>
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
