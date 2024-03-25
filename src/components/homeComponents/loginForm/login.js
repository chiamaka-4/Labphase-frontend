import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./Login.css";
// make make to install formik yup first before using it.
// then use yup documentation for setting up instructions and erromsgs
// also install react redux and npm i @reduxjs/toolkit before using it to manage states
import * as Yup from "yup";

const Login = () => {
  const submitHandler = async (values) => {
    console.log(values);
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/users/create-user",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      // intead of console.log use toastify, figure out how tto use it
    }
  };
  // these values holds all our form data, this is what we are sending to the backend
  // always use async with anything that will take time to send

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      <Form
        style={{
          display: "flex",
          justifyContent: "space-around",
          color: "black",
          padding: "50px",
          width: "80%",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <div className="form-controls-wrapper">
          <h1>Welcome to our platform</h1>
          <h6>please login to have access to your account</h6>
          <div className="form-controls">
            <label htmlFor="name">Name</label>
            <Field className="input-field" name="name" type="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="form-controls">
            <label htmlFor="email">Email</label>
            <Field className="input-field" name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-controls">
            <label htmlFor="password">Password</label>
            <Field className="input-field" type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div className="form-controls">
            <label htmlFor="confirm-password">Confirm password</label>
            <Field
              className="input-field"
              name="confirmPassword"
              type="password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>

          <h6 className="custom-button">Sign in</h6>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
