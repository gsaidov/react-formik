import React from "react";
import { useFormik } from "formik";

function BlogForm(props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      title: "",
    },
    onSubmit: (values) => {
      alert(`Form data: ${JSON.stringify(values)}`);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="title">Blog Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default BlogForm;
