import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import FormData from "form-data";

import { CommunitySchema, PostSchema } from "../../FormSchemas";
import { Community } from "../../../lib/models/community/Community";
import { User } from "next-auth";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { signIn, useSession } from "next-auth/react";
import { addPost } from "../../../lib/models/post/queries";
import { Post } from "../../../lib/models/post/Post";
import { toast } from "react-toastify";
import { addCommunity } from "../../../lib/models/community/queries";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";

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

const AddCommunityForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();

  const onFormSubmit = async (values: any, actions: any) => {
    setLoading(true);

    try {
      const form = new FormData();
      const community: Community = values;

      form.append("image", community.image);
      form.append("community_name", community.community_name);
      form.append("description", community.description);
      form.append("caption", community.caption);

      const newCommunity: Community = await addCommunity(form);

      router.push(`/community/${newCommunity.community_id}`);
      setLoading(false);
    } catch (error) {
      setLoading(false);

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
    setFieldValue,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      image: "",
      community_name: "",
      description: "",
      caption: "",
    },
    onSubmit: onFormSubmit,
    validationSchema: CommunitySchema,
  });

  return (
    <div>
      {session?.user ? (
        <Button
          size="medium"
          sx={{ color: "white", backgroundColor: "#2C87FC" }}
          onClick={handleOpen}
        >
          Create Community
        </Button>
      ) : (
        <Button
          size="medium"
          sx={{ color: "white", backgroundColor: "#2C87FC" }}
          onClick={() => signIn()}
        >
          Create Community
        </Button>
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
            Create A Community
          </Typography>
          <form className="form-container" onSubmit={handleSubmit}>
            <label className="form-label">Community Name</label>
            <input
              onChange={handleChange}
              value={values.community_name}
              id="community_name"
              type="text"
              placeholder="Enter a Community Name"
              onBlur={handleBlur}
              className={
                errors.community_name && touched.community_name
                  ? "form-input input-error"
                  : "form-input"
              }
            />
            {errors.community_name && touched.community_name ? (
              <p className="error">{errors.community_name}</p>
            ) : (
              ""
            )}

            <label className="form-label">Caption</label>
            <input
              value={values.caption}
              onChange={handleChange}
              id="caption"
              type="text"
              placeholder="Enter a caption"
              onBlur={handleBlur}
              className={
                errors.caption && touched.caption
                  ? "form-input input-error"
                  : "form-input"
              }
            />
            {errors.caption && touched.caption ? (
              <p className="error">{errors.caption}</p>
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

            <label className="form-label">Image</label>
            <input
              onChange={(e) => setFieldValue("image", e.target.files[0])}
              id="image"
              type="file"
              placeholder="Enter a Community Name"
              onBlur={handleBlur}
              className={
                errors.image && touched.image
                  ? "form-input input-error"
                  : "form-input"
              }
            />
            {errors.image && touched.image ? (
              <p className="error">{errors.image}</p>
            ) : (
              ""
            )}

            <LoadingButton
              size="medium"
              type="submit"
              sx={{
                color: "white",
                backgroundColor: "#2C87FC",
                marginLeft: 1,
              }}
              className="submit"
              loading={loading}
            >
              Submit
            </LoadingButton>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCommunityForm;
