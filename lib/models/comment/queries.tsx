import axios from "axios";
import { Comment } from "./Comment";

const addComment = async (comment: Comment) => {
  const newComment = await axios.post(
    "http://localhost:5432/api/comments",
    comment
  );

  return newComment.data;
};

const getCommentsByPostId = async (id: number) => {
  const comments = await axios.get(
    `http://localhost:5432/api/comments/postId/${id}`
  );

  return comments.data;
};
export { addComment, getCommentsByPostId };
