import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import Signup from "./Signup";
import "../styles.css";
import Home from "../HomePage/Home";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }

    // Validate password

    if (password.length != 8) {
      newErrors.password = "Password should be atleast 8 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with your login logic
      console.log("Form submitted:", { email, password });
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5 col-md-6  justify-content-center  log-bord login-box">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label ">
              <h3>Email:</h3>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <h3>Password:</h3>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
            <p className="btn ">Forgot Password?</p>
          </div>

          <div className="text-center ">
            <button type="submit" className="btn btn-dark">
              Login
            </button>

            <div className="text-center row">
              <p className="custom-button">
                Do not have an Account? &nbsp;
                <label>
                  <h6
                    className="custom-button"
                    onClick={() => {
                      window.location.href = "signup";
                    }}
                  >
                    Sign up
                  </h6>
                </label>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
