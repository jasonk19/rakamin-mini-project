import React from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  return (
    <Link to={`/posts/${props.post.id}`}>
      <div key={props.post.id} className="border mb-4 p-3 md:hover:bg-gray-50">
        <p className="font-bold">{props.post.title}</p>
        <p className="mt-2 mb-4">{props.post.body}</p>
        <p className="text-gray-500">{props.user}</p>
      </div>
    </Link>
  );
};

export default PostCard;
