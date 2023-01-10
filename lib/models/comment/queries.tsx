import axios from "axios";
import { IComment } from "./Comment";

const addComment = async (comment: IComment) => {
  const newComment = await axios.post(
    `${process.env.NEXT_PUBLIC_HOST_URL}/comments`,
    comment
  );

  return newComment.data;
};

const getCommentsByPostId = async (id: number) => {
  const comments = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST_URL}/comments/postId/${id}`
  );

  return comments.data;
};

const deleteComment = async (id: number) => {
  await axios.delete(
    `${process.env.NEXT_PUBLIC_HOST_URL}/comments/delete/${id}`
  );
};
export { addComment, getCommentsByPostId, deleteComment };
