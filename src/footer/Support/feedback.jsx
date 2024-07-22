import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../../HomePage/Navbar';
import DetailsSection from '../FOOTER';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: '', email: '', feedback: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required.';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      valid = false;
    }

    if (!formData.feedback) {
      newErrors.feedback = 'Feedback is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process form data (e.g., send to API)
      alert('Feedback submitted successfully!');
      setFormData({ name: '', email: '', feedback: '' });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 mb-5">
        <div className="card">
          <div className="card-header bg-dark bg-gradient  text-white text-center">
            Feedback Form
          </div>
          <div className="card-body mb-3" >
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  {errors.name}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  {errors.email}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="feedback" className="form-label">Feedback</label>
                <textarea
                  className={`form-control ${errors.feedback ? 'is-invalid' : ''}`}
                  id="feedback"
                  name="feedback"
                  rows="4"
                  value={formData.feedback}
                  onChange={handleChange}
                ></textarea>
                <div className="invalid-feedback">
                  {errors.feedback}
                </div>
              </div>
              <button type="submit" className="btn btn-dark bg-gradient">Submit Feedback</button>
            </form>
          </div>
        </div>
      </div>
      <DetailsSection />
    </>
  );
}

export default FeedbackForm;
