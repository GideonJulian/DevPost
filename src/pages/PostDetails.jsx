import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PostData from "../utils/PostData";
const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = PostData.find((item) => item.id === parseInt(id, 10));
  console.log("Post Data:", post);
  if (!post) {
    return (
      <div>
        <h1>Post not Found</h1>
      </div>
    );
  }
  return (
    <div className="text-white p-4">
      <div className="flex">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="font-semibold rounded-lg flex items-center gap-2 px-6 py-3 hover:bg-dark transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back
          </button>
          <div>
            <div className="block md:flex border-none md:min-h-[200px] rounded-xl  max-w-full md:flex-row md:h-[calc(100vh-220px)]">
              <div className="bg-[#e8e8e8] p-2 flex items-center justify-center  w-full md:w-2/4 md:h-full h-56">
                <img src={post.screenShort} alt="" />
              </div>
              <div className="p-2 md:p-6 ">
                <div>
           
                  <div>
                    <h3 className="font-semibold text-lg text-gray-300">
                      {post.erroTitle}
                    </h3>
                  </div>
                  <div className="mt-3 shadow-sm">
                    <div className="bg-dark p-3 flex items-center justify-between">
                      <span className="text-gray-300">jsx</span>
                      <span className="text-gray-300 text-sm cursor-pointer">
                        <i className="bi bi-copy mr-2"></i>
                        copy code
                      </span>
                    </div>
                    <div className="px-4 py-6 bg-high-light">
                      <div>$</div>
                    </div>
                  </div>
                  <div className="mt-3 shadow-sm">
                    <div className="bg-dark p-3 flex items-center justify-between">
                      <span className="text-gray-300">jsx</span>
                      <span className="text-gray-300 text-sm cursor-pointer">
                        <i className="bi bi-copy mr-2"></i>
                        copy code
                      </span>
                    </div>
                    <div className="px-4 py-6 bg-high-light">
                      <div>$</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-stretch hidden p-2 mt-4 col-span-full bg-dark rounded-xl md:block">
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-2 h-full flex-wrap min-h-[40px] "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
