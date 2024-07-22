import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../../HomePage/Navbar';
import DetailsSection from '../FOOTER';

function Archives() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="jumbotron jumbotron-fluid bg-info text-white py-5">
          <div className="container text-center">
            <h1 className="display-4">Archives</h1>
            <p className="lead">
              Explore our archives to catch up on all the highlights and updates from previous months.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card border-primary mb-3">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">July 2024</h5>
              </div>
              <div className="card-body overflow-auto" style={{ maxHeight: '400px' }}>
                <p><strong>Highlights:</strong></p>
                <ul>
                  <li>Launched our new website interface.</li>
                  <li>Added new categories for home maintenance services.</li>
                  <li>Held a successful customer appreciation event.</li>
                </ul>
                <p>
                  Check out our blog posts from July 2024 to learn more about these updates and events.
                </p>
              </div>
              <div className="card-footer text-muted">
                Posted on: July 31, 2024
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
            <div className="card border-success mb-3">
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">June 2024</h5>
              </div>
              <div className="card-body overflow-auto" style={{ maxHeight: '400px' }}>
                <p><strong>Highlights:</strong></p>
                <ul>
                  <li>Introduced a referral program for existing users.</li>
                  <li>Partnered with local service providers to expand our network.</li>
                  <li>Published a series of how-to guides for home improvement.</li>
                </ul>
                <p>
                  Explore our June 2024 archive to catch up on all the exciting news and developments.
                </p>
              </div>
              <div className="card-footer text-muted">
                Posted on: June 30, 2024
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
            <div className="card border-warning mb-3">
              <div className="card-header bg-warning text-dark">
                <h5 className="mb-0">May 2024</h5>
              </div>
              <div className="card-body overflow-auto" style={{ maxHeight: '400px' }}>
                <p><strong>Highlights:</strong></p>
                <ul>
                  <li>Launched our mobile app for easier access to services.</li>
                  <li>Hosted a live webinar on home cleaning tips.</li>
                  <li>Featured in a local newspaper for our innovative approach.</li>
                </ul>
                <p>
                  Visit our May 2024 archive for more details on these highlights and other posts.
                </p>
              </div>
              <div className="card-footer text-muted">
                Posted on: May 31, 2024
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
            <div className="card border-danger mb-3">
              <div className="card-header bg-danger text-white">
                <h5 className="mb-0">April 2024</h5>
              </div>
              <div className="card-body overflow-auto" style={{ maxHeight: '400px' }}>
                <p><strong>Highlights:</strong></p>
                <ul>
                  <li>Expanded our service areas to new cities.</li>
                  <li>Held a training session for new service providers.</li>
                  <li>Received positive feedback from our users.</li>
                </ul>
                <p>
                  Dive into our April 2024 archive to read about these and other updates.
                </p>
              </div>
              <div className="card-footer text-muted">
                Posted on: April 30, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailsSection />
    </>
  );
}

export default Archives;
