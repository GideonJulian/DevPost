import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PostData from "../utils/PostData";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = PostData.find((item) => item.id === parseInt(id, 10));
  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-300">
        <h1>Post not Found</h1>
      </div>
    );
  }
  return (
    <div className="text-white p-4 md:p-8">
      <div className="flex pb-28">
        <div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="font-semibold rounded-lg flex items-center gap-2 px-6 py-3 hover:bg-dark transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Back
            </button>
            <div className="flex items-center ">
              <h3 className="font-bold text-lg text-gray-500">Posted By </h3>
              <div className="ml-3 flex items-center gap-2 cursor-pointer">
                <div>
                  <img src={post.userProfile} className="w-10" alt="" />
                </div>
                <h3 className="font-bold text-lg ">{post.username}</h3>
              </div>
            </div>
          </div>

          <div className="block md:flex border-none rounded-xl max-w-full md:flex-row">
            <div className="bg-gray-100 p-2 flex items-center justify-center rounded-l-lg md:w-2/4 md:h-[50vh] h-56">
              <img
                // src={post.screenShort}
                alt={post.erroTitle}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-2 md:p-6 w-full">
              <h3 className="font-semibold text-lg text-gray-300 mb-6">
                {post.erroTitle}
              </h3>

              {/* Solution Section */}
              <div className="h-64 overflow-auto bg-gray-800 rounded-lg shadow-md p-4 space-y-4">
                {/* Solution Block */}
                {[...Array(3)].map((_, index) => (
                  <div>
                    <div className="p-3">
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div
                      key={index}
                      className="shadow-md bg-gray-900 rounded-lg"
                    >
                      <div className="bg-dark p-3 flex items-center justify-between rounded-t-lg">
                        <span className="text-gray-300 text-sm font-medium">
                          jsx
                        </span>
                        <span className="text-gray-300 text-sm cursor-pointer flex items-center gap-1">
                          <i className="bi bi-copy"></i> Copy Code
                        </span>
                      </div>

                      <div className="px-4 py-6 bg-gray-700 rounded-b-lg h-32 overflow-auto">
                        <pre className="text-gray-300 text-sm whitespace-pre-wrap break-words">
                          <code>
                            $ Example code snippet for solution {index + 1}.
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="p-4 mt-4 bg-dark rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-lg font-semibold">39k views</div>
              <button className="flex items-center justify-center md:justify-normal gap-3 px-4 py-2 hover:bg-background text-sm  font-semibold bg-background w-full md:w-auto  md:bg-none rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path d="M5 9c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C9.208 2 10.139 2 12 2s2.792 0 3.545.245a5 5 0 0 1 3.21 3.21C19 6.208 19 7.139 19 9v13l-1.794-1.537c-1.848-1.584-2.771-2.376-3.808-2.678a5 5 0 0 0-2.796 0c-1.037.302-1.96 1.094-3.808 2.678L5 22V9Z"></path>
                </svg>
                Save to favorite
              </button>
            </div>
          </div>
          <div className="mt-8 ">
            <div>
              <h3 className="font-bold  text-lg mb-4">
                More image <span className="text-gray-500">2</span>
              </h3>
            </div>
            <div className="block md:flex md:gap-3 items-center max-w-full md:flex-row">
              <div className="bg-gray-100 p-2 flex items-center justify-center rounded-lg md:w-1/3 md:h-[40vh] h-52"></div>
              <div className="bg-gray-100 p-2 flex items-center justify-center rounded-lg md:w-1/3 md:h-[40vh] h-52"></div>
            </div>
          </div>
          <div className="mt-10 ">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-gray-500 font-semibold">
                  Comments <span>3</span>
                </h3>
                <div className="flex items-center gap-1">
                  <Link>Log in</Link>
                  <h3 className="text-gray-500">to add comments </h3>
                </div>
              </div>
              <form
                action=""
                className="relative p-4 [&:has(:focus-visible)]:ring-4 w-full bg-dark flex items-start focus-visible:border-sky-400 gap-4 focus-visible:ring-sky-400  rounded-xl overflow-hidden "
              >
                <input
                  type="text"
                  placeholder="Add a comment"
                  className=" w-full min-h-[48px] resize-none rounded-lg text-base flex-1 border-solid border border-dark-300 block font-sans bg-dark-500 text-gray-200 placeholder:text-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-gray-700 px-4 py-3 overflow-hidden"
                />
                <button
                  type="button"
                  className=" relative z-30 px-8 py-3 h-12 font-sans  disabled:cursor-auto border-none cursor-pointer bg-blue-800 text-offwhite font-semibold rounded-lg transition disabled:bg-dark-400"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
