import * as yup from "yup";

export const PostSchema = yup.object().shape({
  title: yup.string().required("Required"),
  description: yup.string().max(250).required("Required"),
  post_link: yup.string(),
});

export const CommunitySchema = yup.object().shape({
  community_name: yup.string().max(50).required("Required"),
  caption: yup.string().max(255).required("Required"),
  description: yup.string().max(250).required("Required"),
  image: yup.mixed().required("File is required"),
});

export const CommentSchema = yup.object().shape({
  comment: yup.string().max(250).required("Required"),
  comment_link: yup.string().max(100),
});
