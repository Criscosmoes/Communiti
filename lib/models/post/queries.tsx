import axios from "axios";
import { Post } from "./Post";

const getPostsByCommunityId = async (id: string) => {
  const posts = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/posts/community/${id}`
  );

  return posts.data;
};

const addPost = async (post: Post) => {
  const newPost = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST_URL}/posts`,
    post
  );

  return newPost.data;
};

const deletePost = async (id: number) => {
  await axios.delete(`${process.env.NEXT_PUBLIC_HOST_URL}/posts/${id}`);
};

export { getPostsByCommunityId, addPost, deletePost };
