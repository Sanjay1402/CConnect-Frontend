import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// Ensure your CSS file includes any necessary custom styles
import Navbar from "../../HomePage/Navbar";
import DetailsSection from "../FOOTER";
import ritesh from "../../assets/teamImages/ritesh.jpg";
import sanjay from "../../assets/teamImages/sanjay.jpg";
import nirmal from "../../assets/teamImages/nirmal.jpg";

function OurTeam() {
  return (
    <>
      <Navbar />
      <div className="container py-5 mb-5">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <p className="text-center mb-5">
          Our team is the heart of Cconnect. We are a group of dedicated professionals committed to delivering exceptional service and ensuring that your experience with us is nothing short of outstanding. Get to know the talented individuals behind Cconnect.
        </p>
        <div className="row">
          <div className="col-md-4 mb-4 d-flex">
            <div className="card flex-fill">
              <img src={ritesh} className="card-img-top" alt="Ritesh Kumar" />
              <div className="card-body text-center">
                <h5 className="card-title">Ritesh Kumar</h5>
                <p className="card-text">Team Lead - Front-End & Database Design</p>
                <p>
                  Ritesh is the visionary behind Cconnect's front-end design and database development. With expertise in both design and development, he ensures our platform is user-friendly and efficiently structured to meet the needs of our users.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="card flex-fill">
              <img src={sanjay} className="card-img-top" alt="Sanjay Kumar" />
              <div className="card-body text-center">
                <h5 className="card-title">Sanjay Kumar</h5>
                <p className="card-text">Backend Developer</p>
                <p>
                  Sanjay handles the backend development of Cconnect. His work ensures that our platform runs smoothly and securely, handling all the technical aspects of the service to provide a seamless experience for our users.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="card flex-fill">
              <img src={nirmal} className="card-img-top" alt="Nirmal lal" />
              <div className="card-body text-center">
                <h5 className="card-title">Nirmal lal</h5>
                <p className="card-text">Documentation Specialist</p>
                <p>
                  Nirmal is responsible for all the documentation at Cconnect. From creating detailed guides to ensuring clear and concise communication, Nirmal's work helps users understand and navigate our platform with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex " style={{ minHeight: '20vh' }}>
      </div>
      <DetailsSection />
    </>
  );
}

export default OurTeam;
