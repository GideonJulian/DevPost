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
    <div className="text-white p-2 md:p-4">
      <div className="flex  pb-28">
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
              <div className="bg-[#e8e8e8] p-2 flex items-center justify-center rounded-l-lg     md:w-2/4 md:h-full h-56">
                <img src={post.screenShort} alt="" />
              </div>
              <div className="p-0 md:p-6 ">
                <div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg text-gray-300">
                      {post.erroTitle}
                    </h3>
                  </div>
                  <div className="h-64 overflow-auto scrollbar-none scrollbar-thumb-dark bg-gray-800 rounded-lg shadow-md   p-4">
                    {/* Solution Block 1 */}
                    <div className="mt-3 shadow-md bg-gray-900 rounded-lg">
                      <div className="bg-dark p-3 flex items-center justify-between rounded-t-lg">
                        <span className="text-gray-300 text-sm font-medium">
                          jsx
                        </span>
                        <span className="text-gray-300 text-sm cursor-pointer flex items-center gap-1">
                          <i className="bi bi-copy"></i> Copy Code
                        </span>
                      </div>
                      <div className="px-4 py-6 bg-gray-700 rounded-b-lg h-32 overflow-auto ">
                        <pre className="text-gray-300 text-sm whitespace-pre-wrap break-words">
                          <code>
                            $ Another example snippet here lorem15 lorem ipsum
                            nulla.
                          </code>
                        </pre>
                      </div>
                    </div>

                    {/* Solution Block 2 */}
                    <div className="mt-3 shadow-md bg-gray-900 rounded-lg">
                      <p className="text-gray-300 p-3">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <div className="bg-dark p-3 flex items-center justify-between rounded-t-lg">
                        <span className="text-gray-300 text-sm font-medium">
                          jsx
                        </span>
                        <span className="text-gray-300 text-sm cursor-pointer flex items-center gap-1">
                          <i className="bi bi-copy"></i> Copy Code
                        </span>
                      </div>
                      <div className="px-4 py-6 bg-gray-700 rounded-b-lg">
                        <pre className="text-gray-300 text-sm overflow-auto">
                          <code>$ Another example snippet here lorem15</code>
                        </pre>
                      </div>
                    </div>

                    {/* Solution Block 3 */}
                    <div className="mt-3 shadow-md bg-gray-900 rounded-lg">
                      <p className="text-gray-300 p-3">
                        Lorem ipsum dolor sit amet.
                      </p>
                      <div className="bg-dark p-3 flex items-center justify-between rounded-t-lg">
                        <span className="text-gray-300 text-sm font-medium">
                          jsx
                        </span>
                        <span className="text-gray-300 text-sm cursor-pointer flex items-center gap-1">
                          <i className="bi bi-copy"></i> Copy Code
                        </span>
                      </div>
                      <div className="px-4 py-6 bg-gray-700 rounded-b-lg">
                        <pre className="text-gray-300 text-sm overflow-auto">
                          <code>$ Yet another example snippet here</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 w-auto  md:p-2 mt-4 col-span-full bg-dark rounded-xl md:block">
              <div className="flex flex-col md:flex-row items-stretch  gap-2 h-full flex-wrap min-h-[40px] ">
                <div className="flex items-center pl-3 text-lg font-semibold">
                  39k views
                </div>
                <button className="px-5 max-md:w-full pl-4 gap-3 flex bg-transparent max-md:h-[40px] hover:bg-background max-md:bg-background text-sm cursor-pointer transition-colors text-offwhite font-sans font-semibold border-none items-center overflow-hidden rounded-lg  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                  >
                    <path d="M5 9c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C9.208 2 10.139 2 12 2s2.792 0 3.545.245a5 5 0 0 1 3.21 3.21C19 6.208 19 7.139 19 9v13l-1.794-1.537c-1.848-1.584-2.771-2.376-3.808-2.678a5 5 0 0 0-2.796 0c-1.037.302-1.96 1.094-3.808 2.678L5 22V9Z"></path>
                  </svg>
                  55k
                  <div className="flex items-center">
                    Save to favourite 
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
