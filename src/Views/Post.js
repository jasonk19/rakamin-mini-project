import React from "react";
import { useParams, Link } from "react-router-dom";
import useAxiosGet from "../Hooks/HttpRequest";
import Loader from "../Components/Loader";

const Post = () => {
  const { id } = useParams();
  const postUrl = process.env.REACT_APP_SOCIAL_API_URL + `posts/${id}`;
  const usersUrl = process.env.REACT_APP_SOCIAL_API_URL + "users";

  const post = useAxiosGet(postUrl);
  const comments = useAxiosGet(postUrl + "/comments");
  const users = useAxiosGet(usersUrl);

  let content = null;

  if (post.error || comments.error || users.error) {
    content = <p>There was an error, please refresh or try again later</p>;
  }

  if (post.loading || comments.loading || users.loading) {
    content = <Loader />;
  }

  if (post.data && comments.data && users.data) {
    const user = users.data.find((user) => user.id === post.data.userId);
    content = (
      <div>
        <div className="border p-2">
          <p className="font-bold text-center mb-1">{post.data.title}</p>
          <p className="text-gray-600 text-center mb-3">
            <Link to={`/user/${user.id}`} className="text-blue-500">
              {user.name}
            </Link>
          </p>
          <p>{post.data.body}</p>
        </div>
        <div>
          <p className="font-medium mt-4 mb-2">Comments</p>
          {comments.data.map((comment) => (
            <div className="border p-2 mb-3">
              <p className="font-medium">{comment.name}</p>
              <p className="text-gray-500 text-sm mb-2">{comment.email}</p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Post;
