import "./css/login.css";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        const user = JSON.parse(localStorage.getItem("userData"));
        if (user.email === values.email && user.password === values.password) {
          localStorage.setItem(
            "userData",
            JSON.stringify({ ...user, Login: true })
          );
          return navigate("/home");
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="SignIn">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <form noValidate onSubmit={handleSubmit}>
                <h3>Sign In</h3>
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
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <p className="forgot-password text-center">Forgot Password?</p>
                <p className="forgot-password text-center">
                  Not a member? <Link to="/sign-up">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
