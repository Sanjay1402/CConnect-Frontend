import React, { useState } from "react";
import "../Styles.css"; // Ensure this path is correct
import Navbar from "../HomePage/Navbar";
import DetailsSection from "../footer/FOOTER";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    area: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // You can handle form submission logic here
    console.log("Address Submitted:", formData);
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-5 mb-5">
      <h3 className="text-center mb-4">Add Address</h3>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="country" className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="state" className="form-label">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
      
        
        <div className="mb-3">
          <label htmlFor="street" className="form-label">Area</label>
          <input
            type="text"
            className="form-control"
            id="Area"
            name="Area"
            value={formData.area}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="street" className="form-label">Street Address</label>
          <input
            type="text"
            className="form-control"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
    <DetailsSection/>
    </>
  );
};

export default AddressForm;