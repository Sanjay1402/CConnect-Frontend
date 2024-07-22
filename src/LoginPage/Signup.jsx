import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles.css';

// Set the base URL for axios
axios.defaults.baseURL = 'http://localhost:3000';

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnic, setCnic] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate first name
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }

    // Validate last name
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }

    // Validate gender
    if (!gender.trim() || gender === "Select gender") {
      newErrors.gender = "Please select a gender";
      valid = false;
    }

    // Validate date of birth
    if (!dob.trim()) {
      newErrors.dob = "Date of birth is required";
      valid = false;
    }

    // Validate phone
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    }



    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }

    // Validate password
    if (!password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }
    
    if (!cnic.trim()) {
      newErrors.cnic = "CNIC number is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const username = `${firstName} ${lastName}`;
        const response = await axios.post('/register', {
          username,
          dob,
          gender,
          phone,
          email,
          cnic,
          password,
        });

        console.log('Registration successful:', response.data);

        // Redirect to homepage
        navigate('/login');
      } catch (error) {
        console.error('Error registering:', error.response?.data || error.message);
        setErrors({ general: error.response?.data || 'An error occurred during registration.' });
      }
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="container mt-5 col-md-6 justify-content-center log-bord">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <h5>First name: </h5>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <p className="text-danger">{errors.firstName}</p>
            )}
          </div>
          <div className="col">
            <h5>Last name: </h5>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && (
              <p className="text-danger">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h5>Gender: </h5>
            <select
              className="form-select"
              aria-label="Default select example"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-danger">{errors.gender}</p>}
          </div>
          <div className="col">
            <h5>Date of Birth: </h5>
            <input
              type="date"
              className="form-control"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            {errors.dob && <p className="text-danger">{errors.dob}</p>}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h5>Phone: </h5>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-danger">{errors.phone}</p>}
          </div>
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
          <h5>CNIC: </h5>
          <input
            type="text"
            className="form-control"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
          />
          {errors.cnic && (
            <p className="text-danger">{errors.cnic}</p>
          )}
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
            Sign up
          </button>

          <div className="text-center row mt-2">
            <p className="custom-button">
              Already have an Account? &nbsp;
              <label>
                <h6
                  className="custom-button"
                  onClick={() => {
                    window.location.href = "login";
                  }}
                >
                  Login
                </h6>
              </label>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
