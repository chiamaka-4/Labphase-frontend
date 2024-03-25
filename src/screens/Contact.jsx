import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";

const Contact = () => {
  const submitHandler = async (values) => {
    console.log("fyfyfknin");
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("message is requuired"),
  });
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
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
          <h1>We would love to hear from you!</h1>
          <h3>sign up</h3>
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
          <div className="form-control">
            <div>
              <label htmlFor="message" className="message">
                Enter your Message:
              </label>
            </div>

            <Field
              as="textarea"
              id="message"
              name="message"
              rows="4"
              cols="50"
            ></Field>

            <ErrorMessage name="message" component="div" className="error" />
          </div>

          <Button className="custom-btn" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default Contact;
