import { useFormik } from "formik";
import { useState, useEffect } from "react";

import { CommentSchema } from "../../FormSchemas";
import { useSession, signIn } from "next-auth/react";
import { Post } from "../../../lib/models/post/Post";
import { toast } from "react-toastify";
import { IComment } from "../../../lib/models/comment/Comment";
import {
  addComment,
  getCommentsByPostId,
} from "../../../lib/models/comment/queries";
import Comment from "../Comment/Comment";
import Typography from "@mui/material/Typography";

type Props = {
  post: Post;
  setCommentCount: React.Dispatch<React.SetStateAction<string>>;
};

const AddCommentForm = ({ post, setCommentCount }: Props) => {
  const [comments, setComments] = useState<IComment[]>([]);

  const { data: session } = useSession();

  const onFormSubmit = async (values: any, actions: any) => {
    try {
      const comment: IComment = {
        ...values,
        post_id: post.post_id,
        community_id: post.community_id,
        // @ts-ignore
        user_id: session?.user.user_id!,
      };

      const newComment = await addComment(comment);

      setComments((prevState) => {
        return [newComment, ...prevState];
      });

      setCommentCount((prevState) => {
        return prevState + 1;
      });

      resetForm();

      toast.success("Added new comment", { position: "bottom-left" });
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

  useEffect(() => {
    const fetchComments = async (postId: number) => {
      const comments = await getCommentsByPostId(postId);

      setComments(comments.reverse());
    };

    fetchComments(post.post_id);
  }, [post.post_id]);

  const renderedComments = comments.map((comment) => {
    return (
      <Comment
        key={comment.comment_id}
        comment={comment}
        setComments={setComments}
        setCommentCount={setCommentCount}
      />
    );
  });

  return (
    <div className="comment-form-container">
      <form className="form-container" onSubmit={handleSubmit}>
        {session?.user ? (
          <>
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
          </>
        ) : (
          <textarea
            value={values.comment}
            id="comment"
            placeholder="What is your opinion?"
            onBlur={handleBlur}
            onClick={() => signIn()}
            readOnly={true}
            className={
              errors.comment && touched.comment
                ? "form-input input-error comment-textarea"
                : "form-input comment-textarea"
            }
          />
        )}

        <button className="form-button" disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
      <div>
        <Typography variant="h4" sx={{ color: "white", marginLeft: "10px" }}>
          Comments
        </Typography>
        {renderedComments}
      </div>
    </div>
  );
};

export default AddCommentForm;
