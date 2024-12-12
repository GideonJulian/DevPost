import React from "react";
import { Link, useParams } from "react-router-dom";
const PostDetails = () => {
  const { id } = useParams();
  return (
    <div className="text-white p-4">
      <Link className="bg-white px-3 py-2 text-black rounded-md mr-3" to={'/'}>
        Back
      </Link>
      PostDetails {id}
    </div>
  );
};

export default PostDetails;
