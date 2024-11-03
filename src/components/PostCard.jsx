import React from "react";
import errorImg3 from "../assets/images/error3.png";
import userimg1 from "../assets/images/userimg1.png";
const PostCard = ({errorImg, title, userImg, userName}) => {
  return (
    <div className="post-card ">
      <div className="img-card">
        <img src={errorImg} alt="" />
      </div>
      <div className="py-2 px-1">
        <div className="flex items-center">
          <img src={userImg} alt="" className="w-10" />
          <h3 className="text-white p-1 font-semibold text-sm ">
           {title}
          </h3>
        </div>
        <p className="text-sm text-gray-400 font-semibold ml-12">{userName}</p>
      </div>
    </div>
  );
};

export default PostCard;
