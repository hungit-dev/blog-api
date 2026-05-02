import HomePageCard from "./sub-components/HomePageCard";
import { usePosts } from "../hooks/usePosts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
          {isLoading &&
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-[210px] p-3 rounded-md shadow flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <Skeleton circle width={40} height={40} />
                  <Skeleton width={120} height={14} />
                </div>
                <Skeleton width="60%" height={20} />
                <Skeleton count={2} height={13} />
                <Skeleton width="40%" height={13} />
              </div>
            ))}
          {isError && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error.message}</span>
            </div>
          )}
          {posts &&
            posts.map((post) => <HomePageCard key={post.id} postInfo={post} />)}
        </div>
      </div>
    </>
  );
}
