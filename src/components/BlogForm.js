import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Extracted initial values
const initialValues = {
  name: "",
  email: "",
  title: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .max(25, "Must be 25 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  title: Yup.string().required("Required"),
});

// Extracted onSubmit function
const onSubmit = (values) => {
  alert(`Form data: ${JSON.stringify(values)}`);
};

function BlogForm(props) {
  const formik = useFormik({
    initialValues,
    // validate,
    validationSchema,
    onSubmit,
  });
  // console.log(formik.errors);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="title">Blog Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default BlogForm;
