import { useFormik } from "formik";
import { useState, useEffect } from "react";

import { CommentSchema } from "../../FormSchemas";

import { useSession } from "next-auth/react";
import { addPost } from "../../../lib/models/post/queries";
import { Post } from "../../../lib/models/post/Post";
import { toast } from "react-toastify";
import { IComment } from "../../../lib/models/comment/Comment";
import {
  addComment,
  getCommentsByPostId,
} from "../../../lib/models/comment/queries";
import Comment from "../Comment/Comment";

type Props = {
  comments: Comment[];
  post: Post;
};

const AddCommentForm = ({ post }: Props) => {
  const [comments, setComments] = useState<IComment[]>([]);

  const { data: session } = useSession();

  const onFormSubmit = async (values: any, actions: any) => {
    try {
      const comment: IComment = {
        ...values,
        post_id: post.post_id,
        community_id: post.community_id,
        user_id: session?.user.user_id!,
      };

      const newComment = await addComment(comment);

      setComments((prevState) => {
        return [newComment, ...prevState];
      });

      resetForm();

      toast.success("Added new comment", { position: "bottom-left" });

      console.log(newComment);
    } catch (error) {
      toast.error("Check console for error.");
      console.log(error);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      comment: "",
      comment_link: "",
    },
    onSubmit: onFormSubmit,
    validationSchema: CommentSchema,
  });

  const fetchComments = async (postId: number) => {
    const comments = await getCommentsByPostId(postId);

    setComments(comments);
  };

  useEffect(() => {
    fetchComments(post.post_id);
  }, []);

  const renderedComments = comments.map((comment) => {
    return <Comment key={comment.comment_id} comment={comment} />;
  });

  return (
    <div className="comment-form-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          value={values.comment}
          id="comment"
          placeholder="What is your opinion?"
          onBlur={handleBlur}
          className={
            errors.comment && touched.comment
              ? "form-input input-error comment-textarea"
              : "form-input comment-textarea"
          }
        />
        {errors.comment && touched.comment ? (
          <p className="error">{errors.comment}</p>
        ) : (
          ""
        )}

        {/*  <label className="form-label">Link</label>
        <input
          value={values.comment_link}
          onChange={handleChange}
          id="comment_link"
          type="text"
          placeholder="Link"
          onBlur={handleBlur}
          className={
            errors.comment_link && touched.comment_link
              ? "form-input input-error"
              : "form-input"
          }
        />

        {errors.comment_link && touched.comment_link ? (
          <p className="error">{errors.comment_link}</p>
        ) : (
          ""
        )} */}

        <button className="form-button" disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
      {renderedComments}
    </div>
  );
};

export default AddCommentForm;
