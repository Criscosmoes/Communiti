import axios from "axios";

const getPostsByCommunityId = async (id: string) => {
  const posts = await axios.get(
    `http://localhost:5432/api/posts/community/${id}`
  );

  return posts.data;
};

export { getPostsByCommunityId };
