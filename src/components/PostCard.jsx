import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { BiCommentDots } from "react-icons/bi";
const PostCard = ({ imgSrc, desc, usrename, datePosted, profileImg, tags}) => {
  return (
    <div className="post-card border border-input hover:shadow shadow-black-700">
      <div className="top-row flex justify-between">
        <div className="profile flex items-center gap-2">
          <img src={profileImg} alt="" />
          <div>
            <span className="username cursor-pointer">{usrename}</span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-bold cursor-pointer">
            <CiBookmark />
          </span>
          <span className="text-lg font-bold cursor-pointer">
            <AiOutlineMore />
          </span>
        </div>
      </div>
      <div className="tags-list mt-2">
        {
          tags.map((tag)=> (
            <span className="text-sm px-3 py-1 bg-white ml-2 rounded">
              #{tag}
        </span>
          ))
        }
      
      </div>
      <div className="middle-row w-full bg-white rounded rounded-lg border border-input py-2 px-4 mt-3">
        <h4 className="post-date  font-bold text-main-blue mb-3">{datePosted}</h4>
        <h3 className="title font-md text-sm">{desc}</h3>
        <div className="img-card w-full">
          <img src={imgSrc} alt="error-img" className="solution-img  w-full" />
        </div>
        <div className="bottom-row border-t py-1 mt-5  flex items-center justify-between">
          <div className="comment px-2 py-1 bg-light-gray  flex items-center gap-1 rounded rounded-lg " onClick={''}>
            <span className="font-md text-lg">
              <BiCommentDots />
            </span>
            <p className="font-md text-lg">4</p>
          </div>
         
          <div>
          <button type="button" className="px-4 py-2 rounded rounded-lg bg-main-blue text-white font-md">Solution</button>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default PostCard;
