import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import PostCard from "../Components/PostCard";
import useAxiosGet from "../Hooks/HttpRequest";

const User = () => {
  const { id } = useParams();

  const userUrl = process.env.REACT_APP_SOCIAL_API_URL + `users/${id}`;
  const postsUrl = process.env.REACT_APP_SOCIAL_API_URL + "posts";

  const user = useAxiosGet(userUrl);
  const posts = useAxiosGet(postsUrl);

  let content = null;

  if (user.error || posts.error) {
    content = <p>There was an error, please refresh or try again later</p>;
  }

  if (user.loading || posts.loading) {
    content = <Loader />;
  }

  if (user.data && posts.data) {
    const postsData = posts.data.filter((post) => post.userId === parseInt(id));
    content = (
      <div>
        <div className="border p-3 md:w-1/3 md:mx-auto">
          <p className="text-center font-bold">{user.data.name}</p>
          <p className="text-center">{user.data.email}</p>
          <div className="my-2">
            <p className="font-medium">Address</p>
            <p>Street : {user.data.address.street}</p>
            <p>Suite : {user.data.address.suite}</p>
            <p>City : {user.data.address.city}</p>
          </div>
          <div className="mb-2">
            <p className="font-medium">Company</p>
            <p>{user.data.company.name}</p>
            <p className="italic text-gray-400">
              {user.data.company.catchPhrase}
            </p>
          </div>
          <div>
            <p className="font-medium">Contact</p>
            <p>{user.data.phone}</p>
            <p>{user.data.website}</p>
          </div>
        </div>
        <div>
          <p className="font-bold mt-3 mb-2">Posts</p>
          {postsData.map((post) => (
            <PostCard post={post} user={user.data.name} />
          ))}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default User;
