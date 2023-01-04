import Loader from "../Components/Loader";
import PostCard from "../Components/PostCard";
import useAxiosGet from "../Hooks/HttpRequest";

const Home = () => {
  const postsUrl = process.env.REACT_APP_SOCIAL_API_URL + "posts";
  const userUrl = process.env.REACT_APP_SOCIAL_API_URL + "users";

  const posts = useAxiosGet(postsUrl);
  const users = useAxiosGet(userUrl);

  let content = null;

  if (posts.error || users.error) {
    content = <p>There was an error, please refresh or try again later</p>;
  }

  if (posts.loading || users.loading) {
    content = <Loader />;
  }

  if (posts.data && users.data) {
    content = (
      <div className="md:grid md:grid-cols-3 md:gap-3">
        {posts.data.map((post) => {
          const user = users.data.find((user) => user.id === post.userId).name;
          return <PostCard post={post} user={user} />;
        })}
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">Posts</h1>
      {content}
    </div>
  );
};

export default Home;
