import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

import { PostSchema } from "../../FormSchemas";
import { Community } from "../../../lib/models/community/Community";
import { User } from "next-auth";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { signIn } from "next-auth/react";
import { addPost } from "../../../lib/models/post/queries";
import { Post } from "../../../lib/models/post/Post";
import { toast } from "react-toastify";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  backgroundColor: "#1E1F23",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

type Props = {
  user?: User;
  community: Community;
  setCurrentPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

const AddPostForm = ({ user, community, setCurrentPosts }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (values: any, actions: any) => {
    try {
      const post: Post = {
        ...values,
        user_id: user.user_id,
        community_id: community.community_id,
      };

      const newPost = await addPost(post);

      setCurrentPosts((prevState) => {
        return [...prevState, newPost];
      });

      toast.success("Successfully added post", { position: "bottom-left" });

      handleClose();
      resetForm();
    } catch (error) {
      toast.error("Error, please check console");
      console.log(error);
    }
  };

  const onModalClose = () => {
    resetForm();
    handleClose();
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
      title: "",
      description: "",
      post_link: "",
    },
    onSubmit: onSubmit,
    validationSchema: PostSchema,
  });

  return (
    <div>
      {user ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignContent: "center",
          }}
        >
          <img
            className="user-image"
            src={user?.image!}
            referrerPolicy="no-referrer"
          />
          <input
            className="community-input"
            type="text"
            placeholder="Create Post"
            onClick={() => handleOpen()}
            readOnly={true}
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignContent: "center",
            color: "white",
            height: 40,
          }}
        >
          <AccountCircle sx={{ fontSize: "40px" }} className="user-image" />
          <input
            className="community-input"
            type="text"
            placeholder="Create Post"
            onClick={() => signIn()}
            readOnly={true}
          />
        </Box>
      )}
      <Modal
        open={open}
        onClose={onModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Box sx={style}>
          <Typography sx={{ marginBottom: 3, color: "white" }} variant="h4">
            Create A Post
          </Typography>
          <form className="form-container" onSubmit={handleSubmit}>
            <label className="form-label">Title</label>
            <input
              onChange={handleChange}
              value={values.title}
              id="title"
              type="text"
              placeholder="Enter a title"
              onBlur={handleBlur}
              className={
                errors.title && touched.title
                  ? "form-input input-error"
                  : "form-input"
              }
            />
            {errors.title && touched.title ? (
              <p className="error">{errors.title}</p>
            ) : (
              ""
            )}

            <label className="form-label">Description</label>
            <input
              value={values.description}
              onChange={handleChange}
              id="description"
              type="text"
              placeholder="Enter a description"
              onBlur={handleBlur}
              className={
                errors.description && touched.description
                  ? "form-input input-error"
                  : "form-input"
              }
            />

            {errors.description && touched.description ? (
              <p className="error">{errors.description}</p>
            ) : (
              ""
            )}

            <label className="form-label">Link</label>
            <input
              value={values.post_link}
              onChange={handleChange}
              id="post_link"
              type="text"
              placeholder="Enter a link"
              onBlur={handleBlur}
              className={
                errors.post_link && touched.post_link
                  ? "form-input input-error"
                  : "form-input"
              }
            />

            {errors.post_link && touched.post_link ? (
              <p className="error">{errors.post_link}</p>
            ) : (
              ""
            )}

            <button
              className="form-button"
              disabled={isSubmitting}
              type="submit"
            >
              Submit
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddPostForm;
