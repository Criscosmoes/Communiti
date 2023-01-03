import * as yup from "yup";

export const PostSchema = yup.object().shape({
  title: yup.string().required("Required"),
  description: yup.string().required("Required"),
  post_link: yup.string(),
});
