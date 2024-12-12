import React, { useState } from "react";
import { PiLink } from "react-icons/pi";
import { BsChatSquareText } from "react-icons/bs";
import { VscThumbsdown, VscThumbsup } from "react-icons/vsc";
import PostDetails from "../../utils/PostData";
import { LuBookmark } from "react-icons/lu";
const PostCard = ({
  errorImg,
  title,
  userImg,
  userName,
  postTags,
  onClick,
}) => {
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
    <div className="post-card cursor-pointer shadow-lg border border-gray-700 rounded-lg bg-sidebar-b transition-shadow hover:shadow-none hover:border-gray-600">
      <div className="py-4 px-3">
        {/* User Info */}
        <div className="flex items-center">
          <img
            src={userImg}
            alt="User"
            className="w-12 h-12 rounded-full object-cover cursor-pointer"
          />
          <div className="flex flex-col ml-3">
            <p className="text-sm text-white font-semibold cursor-pointer">
              {userName}
            </p>
            <p className="text-xs text-gray-400 font-medium">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* Post Title */}
        <h3
          className="text-white font-bold text-lg mt-4 line-clamp-2 cursor-pointer hover:underline"
          onClick={onClick}
        >
          {title}
        </h3>
      </div>

      {/* Tags */}
      <div className="tags-row flex flex-wrap gap-2 px-3 mt-2">
        {postTags.map((tag, index) => (
          <span
            key={index}
            className="text-xs text-white bg-dark px-3 py-1 rounded-full border border-gray-600 hover:bg-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Post Image */}
      <div className="img-card mt-4 p-3">
        <img
          src={errorImg}
          alt="Post"
          className="w-full h-40  rounded-b-lg cursor-pointer"
          onClick={onClick}
        />
      </div>
      <div className="flex items-center px-3 py-2 gap-1">
        <div
          className="bg-dark px-3 py-1 text-white flex items-center gap-2 rounded-md"
          onClick={handleLike}
        >
          <i
            class="bi bi-hand-thumbs-up text-logo-color "
            onClick={handleLike}
          ></i>
          <span className="text-logo-color">{likes}</span>
        </div>
        <div
          className="bg-dark px-3 py-1 text-white flex items-center gap-2 rounded-md"
          onClick={handleDisLike}
        >
          <i
            class="bi bi-hand-thumbs-down text-logo-color"
            onClick={handleDisLike}
          ></i>
          <span className="text-logo-color">{disLikes}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
