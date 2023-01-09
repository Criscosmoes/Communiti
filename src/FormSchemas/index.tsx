import * as yup from "yup";

export const PostSchema = yup.object().shape({
  title: yup.string().required("Required"),
  description: yup.string().required("Required"),
  post_link: yup.string(),
});

export const CommunitySchema = yup.object().shape({
  community_name: yup.string().required("Required"),
  caption: yup.string().required("Required"),
  description: yup.string().required("Required"),
  image: yup.mixed().required("File is required"),
});
