import React from "react";
import PostData from "../utils/PostData";
import PostCard from "./HomeComponents/PostCard";
const RecommendedPost = () => {
  return (
    <div>
      <div className="ml-28  p-8   w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 ">
        {PostData.map((items) => (
          <PostCard
            errorImg={items.screenShort}
            title={items.erroTitle}
            userImg={items.userProfile}
            userName={items.username}
            postTags={items.postTags}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedPost;
