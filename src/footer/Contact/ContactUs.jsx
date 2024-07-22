import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../../HomePage/Navbar";
import DetailsSection from "../FOOTER";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        {/* Banner */}
        <div className="jumbotron text-center bg-dark bg-gradien text-white py-5 mb-4">
          <h1 className="display-4">We Would Love to Hear From You</h1>
          <p className="lead">Reach out to us through any of the following options or leave a message below.</p>
        </div>
        
        <div className="row mb-4">
          {/* Contact Options */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header bg-dark bg-gradien text-white text-center">
                Contact Options
              </div>
              <div className="card-body">
                <p className="card-text">
                  <strong>Helpline:</strong> +1 (123) 456-7890
                </p>
                <p className="card-text">
                  <strong>Email:</strong> support@example.com
                </p>
                <p className="card-text">
                  <strong>Social Media:</strong>
                  <br />
                  <a href="#" className="btn btn-outline-primary btn-sm mx-1">Facebook</a>
                  <a href="#" className="btn btn-outline-info btn-sm mx-1">Twitter</a>
                  <a href="#" className="btn btn-outline-danger btn-sm mx-1">Instagram</a>
                  <a href="#" className="btn btn-outline-secondary btn-sm mx-1">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header bg-dark bg-gradien text-white text-center">
                Leave a Message
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark btn-gradient">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ and Help Center Links */}
        <div className="row">
          <div className="col text-center">
            <p>For more information, visit our <a href="/faqs">FAQs</a> or <a href="/help-center">Help Center</a>.</p>
          </div>
        </div>
      </div>
      <DetailsSection />
    </>
  );
}

export default ContactUs;
