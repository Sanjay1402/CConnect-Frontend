import React from 'react';
import Navbar from "../../HomePage/Navbar";
import DetailsSection from "../FOOTER";

function Careers() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
          <p className="text-center fs-4">Currently, no openings are available.</p>
        </div>
      </div>
      
      <DetailsSection />
    </>
  );
}

export default Careers;
