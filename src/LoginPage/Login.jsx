import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import '../styles.css';

axios.defaults.baseURL = 'http://localhost:3000';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setAuthInfo } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', { email, password });

      const { user, token } = response.data;

      setAuthInfo({ user, token });

      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error.response?.data || error.message);
      setErrors({ general: error.response?.data || 'An error occurred during login.' });
    }
  };

  return (
    <>
    <div className="d-flex justify-content-center mx-5 my-5">
    <div className="container my-auto mt-5 ml-10 col-md-4 justify-content-center "><p><br /><br /><h2 className="justify-content-center ">CCONNECT</h2> CCONNECT helps you get connected with all your fixes.</p></div>
    <div className="container mt-5 col-md-5 justify-content-center log-bord">
      
      <form onSubmit={handleLogin}>
        <div className="row mt-3">
          <div className="col">
            <h5>Email: </h5>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h5>Password: </h5>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </div>
        </div>
        {errors.general && (
          <p className="text-danger text-center mt-3">{errors.general}</p>
        )}
        <div className="text-center mt-3">
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </div>
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
      </form>
    </div>
    </div>
    </>
  );
}

export default Login;
