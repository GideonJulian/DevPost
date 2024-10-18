import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

const PostCard = ({
  postTitle,
  userName,
  postDate,
  postImg,
  tags,
  userPics,
}) => {
  const backgroundColors = [
    "#e7c6ff", // Red-Orange
    "#33FF57", // Green
    "#ffafcc", // Blue
    "#FF33A1", // Pink
    "#ffd6ff", // Gold
    "#faedcd", // Coral
    "#33FFFF",
   // Cyan
   "#4cc9f0",
   '#ade8f4',
   '#e7c6ff',
   "#76c893"
  ];
  const randomColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  const postStyle = {
    backgroundColor: randomColor,
    padding: "10px",
    borderRadius: "10px",

    // color: "#fff", // For better readability on dark backgrounds
  };

  return (
    <div className="post-card bg-white rounded rounded-lg w-full">
      <div className="inner" style={postStyle}>
        <div className="top-row flex items-center justify-between ">
          <div className="profile flex items-center gap-2">
            <img src={userPics} alt="" />
            <h3>{userName}</h3>
          </div>
          <div className="flex items-center ">
            <span className="font-medium">
              <CiBookmarkCheck />
            </span>
            <span className="font-medium">
              <IoMdMore />
            </span>
          </div>
        </div>
        <div className="tag-row mt-1">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="tag-box px-1 py-1 border border-lg rounded-lg text-sm font-medium ml-2 text-black font-medium "
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="ml-3 mt-3">
          <h3 className="font-medium text-sm">{postTitle}</h3>
        </div>
        <div>
          <img src={postImg} alt="" className="post-screenshot" />
        </div>
      </div>
      <div className="bottom">

      </div>
    </div>
  );
};

export default PostCard;
