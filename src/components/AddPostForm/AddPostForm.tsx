import { useFormik } from "formik";
import { PostSchema } from "../../FormSchemas";

const AddPostForm = () => {
  const onSubmit = (values: any, actions: any) => {
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
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
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        onChange={handleChange}
        value={values.title}
        id="title"
        type="text"
        placeholder="Enter a title"
        onBlur={handleBlur}
        className={errors.title && touched.title ? "input-error" : ""}
      />
      {errors.title && touched.title ? (
        <p className="error">{errors.title}</p>
      ) : (
        ""
      )}

      <label>Description</label>
      <input
        value={values.description}
        onChange={handleChange}
        id="description"
        type="text"
        placeholder="Enter a description"
        onBlur={handleBlur}
        className={
          errors.description && touched.description ? "input-error" : ""
        }
      />

      {errors.description && touched.description ? (
        <p className="error">{errors.description}</p>
      ) : (
        ""
      )}

      <label>Link</label>
      <input
        value={values.post_link}
        onChange={handleChange}
        id="post_link"
        type="text"
        placeholder="Enter a link"
        onBlur={handleBlur}
        className={errors.post_link && touched.post_link ? "input-error" : ""}
      />

      {errors.post_link && touched.post_link ? (
        <p className="error">{errors.post_link}</p>
      ) : (
        ""
      )}

      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddPostForm;
