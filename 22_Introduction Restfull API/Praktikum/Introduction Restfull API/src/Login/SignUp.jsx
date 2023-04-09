import "./css/login.css";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

export default function SignUp() {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    firstname: Yup.string().required("First Name is a required field"),
    lastname: Yup.string().required("Last Name is a required field"),
    username: Yup.string().required("User Name is a required field"),
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
    confirmpassword: Yup.string()
      .required("Confirm Password is a required field")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSignUp = (values) => {
    const userData = {
      firstname: values.firstname,
      lastname: values.lastname,
      username: values.username,
      email: values.email,
      password: values.password,
      confirmpassword: values.confirmpassword,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/");
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      }}
      onSubmit={(values) => handleSignUp(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="SignUp">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <form noValidate onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <div className="mb-3">
                  <label>First name</label>
                  <input
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                    className="form-control"
                    placeholder="First name"
                  />
                  <p className="error">
                    {errors.firstname && touched.firstname && errors.firstname}
                  </p>
                </div>
                <div className="mb-3">
                  <label>Last name</label>
                  <input
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    className="form-control"
                    placeholder="First name"
                  />
                  <p className="error">
                    {errors.lastname && touched.lastname && errors.lastname}
                  </p>
                </div>
                <div className="mb-3">
                  <label>User name</label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    className="form-control"
                    placeholder="User name"
                  />
                  <p className="error">
                    {errors.username && touched.username && errors.username}
                  </p>
                </div>
                <div className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="form-control"
                    placeholder="Enter email"
                  />
                  <p className="error">
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="form-control"
                    placeholder="Enter password"
                  />
                  <p className="error">
                    {errors.password && touched.password && errors.password}
                  </p>
                </div>
                <div className="mb-3">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmpassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmpassword}
                    className="form-control"
                    placeholder="Enter password"
                  />
                  <p className="error">
                    {errors.confirmpassword &&
                      touched.confirmpassword &&
                      errors.confirmpassword}
                  </p>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
                <p className="forgot-password text-center">
                  Already registered? <Link to="/">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
