import API_URL from "../lib/api";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePosts = () => {
  const queryClient = useQueryClient();

  //Functions
  const getPostsFn = async () => {
    const res = await fetch(`${API_URL}/posts`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch posts");
    return data;
  };

  // Queries
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsFn,
  });

  return { postsQuery };
};

export { usePosts };
