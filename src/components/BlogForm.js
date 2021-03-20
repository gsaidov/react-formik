import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Extracted initial values
const initialValues = {
  name: "",
  email: "",
  title: "",
  description: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .max(25, "Must be 25 characters or less")
    .min(2, "Must be at least 2 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  title: Yup.string().required("Required"),
});

// Extracted onSubmit function
const onSubmit = (values, { resetForm }) => {
  alert(`Form data: ${JSON.stringify(values)}`);
  console.log(Formik.children);
  resetForm();
};

function BlogForm(props) {
  // console.log(formik.errors);
  return (
    <Formik // wrap entire form with Formik component
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="errors" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="errors" />
        </div>

        <div className="form-control">
          <label htmlFor="title">Blog Title</label>
          <Field type="text" id="title" name="title" />
          <ErrorMessage name="title" component="div" className="errors" />
        </div>

        <div className="form-control">
          <label htmlFor="description">Description</label>
          <Field as="textarea" id="description" name="description" />
        </div>

        <button type="submit">Create</button>
      </Form>
    </Formik>
  );
}

export default BlogForm;
