import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DetailsSection from '../FOOTER';
import Navbar from '../../HomePage/Navbar';

function LatestPosts() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="jumbotron jumbotron-fluid bg-info text-white py-5">
          <div className="container text-center">
            <h1 className="display-4">Latest Posts</h1>
            <p className="lead">
              Stay updated with our latest news, tips, and service announcements. Explore our recent posts to get valuable insights and updates.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card border-primary mb-3">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">New Service: Home Deep Cleaning</h5>
              </div>
              <div className="card-body">
                <p>
                  We're excited to introduce our new Home Deep Cleaning service! Our professional cleaners will leave your home spotless and sparkling. Whether you're preparing for a special event or just need a thorough cleaning, our team is here to help. Book your service today and experience the difference!
                </p>
              </div>
              <div className="card-footer text-muted">
                Posted on: July 22, 2024
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
            <div className="card border-warning mb-3">
              <div className="card-header bg-warning text-dark">
                <h5 className="mb-0">Tips for Electrical Safety at Home</h5>
              </div>
              <div className="card-body">
                <p>
                  Electrical safety is crucial for every household. Here are some essential tips to keep your home safe:
                </p>
                <ul>
                  <li>Regularly check and replace damaged cords.</li>
                  <li>Do not overload electrical outlets.</li>
                  <li>Ensure all electrical work is done by a qualified electrician.</li>
                </ul>
                <p>
                  Following these tips can help prevent electrical hazards and ensure a safe environment for you and your family.
                </p>
              </div>
              <div className="card-footer text-muted">
                Posted on: July 15, 2024
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
            <div className="card border-success mb-3">
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">How to Choose the Best Plumber</h5>
              </div>
              <div className="card-body">
                <p>
                  Finding a reliable plumber can be challenging. Here are some tips to help you choose the best one:
                </p>
                <ol>
                  <li>Check for proper licensing and insurance.</li>
                  <li>Read reviews and ask for references.</li>
                  <li>Get multiple quotes and compare services.</li>
                </ol>
                <p>
                  By following these steps, you can ensure that you hire a qualified professional for your plumbing needs.
                </p>
              </div>
              <div className="card-footer text-muted">
                Posted on: July 10, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailsSection />
    </>
  );
}

export default LatestPosts;
