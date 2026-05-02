import HomePageCard from "./sub-components/HomePageCard";
import { usePosts } from "../hooks/usePosts";
export function HomePage() {
  const { postsQuery } = usePosts();
  // Get states for posts
  const { data: posts, isLoading, isError, error } = postsQuery;
  return (
    <>
      <div className=" bg-base-100 w-full shadow-sm rounded-md min-h-[90vh] mt-3">
        <div className="max-lg:collapse bg-base-100 lg:max-w-4xl lg:mx-auto p-5">
          <h1 className="text-3xl font-bold mb-4">Latest Stories!</h1>
          <p className="text-lg text-gray-700">
            Discover ideas, stories, and perspectives from writers around the
            world.
          </p>
        </div>
        <div className="max-lg:collapse bg-base-100 lg:max-w-4xl lg:mx-auto p-5 flex flex-col gap-5">
          {isLoading && <p>Loading...</p>}
          {isError && <p>{error.message}</p>}
          {posts &&
            posts.map((post) => <HomePageCard key={post.id} postInfo={post} />)}
        </div>
      </div>
    </>
  );
}
