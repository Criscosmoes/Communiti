import axios from "axios";
import { Post } from "./Post";

const getPostsByCommunityId = async (id: string) => {
  const posts = await axios.get(
    `http://localhost:5432/api/posts/community/${id}`
  );

  return posts.data;
};

const addPost = async (post: Post) => {
  const newPost = await axios.post("http://localhost:5432/api/posts", post);

  return newPost.data;
};

export { getPostsByCommunityId, addPost };
