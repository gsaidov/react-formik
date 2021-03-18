import React from "react";
import { useFormik } from "formik";

// Extracted initial values
const initialValues = {
  name: "",
  email: "",
  title: "",
};

// We build a custom validation function. This must return an object
// whose keys are symmetrical to our values/initialValues

const validate = (values) => {
  const errors = {}; // first define errors object

  //below define conditions
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 25) {
    errors.name = "Must be 25 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.title) {
    errors.title = "Required";
  }

  return errors;
};

// Extracted onSubmit function
const onSubmit = (values) => {
  alert(`Form data: ${JSON.stringify(values)}`);
};

function BlogForm(props) {
  const formik = useFormik({
    initialValues,
    validate,
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
