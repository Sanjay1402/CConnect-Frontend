import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../../HomePage/Navbar';
import DetailsSection from '../FOOTER';

function PopularPosts() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="jumbotron jumbotron-fluid bg-primary text-white py-5">
          <div className="container text-center">
            <h1 className="display-4">Popular Posts</h1>
            <p className="lead">
              Explore our most popular posts and articles. Discover top tips, frequently asked questions, and success stories shared by our users.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card border-info mb-3">
              <div className="card-header bg-info text-white">
                <h5 className="mb-0">Top 10 Cleaning Tips</h5>
              </div>
              <div className="card-body overflow-auto" style={{ maxHeight: '400px' }}>
                <p>
                  Keeping your home clean and organized can be easy with the right tips. Here are our top 10 cleaning tips to help you maintain a spotless home:
                </p>
                <ul>
                  <li>Declutter regularly to avoid buildup of unnecessary items.</li>
                  <li>Use natural cleaning solutions to avoid harsh chemicals.</li>
                  <li>Clean one room at a time to stay focused and efficient.</li>
                  <li>Establish a cleaning routine to stay on top of tasks.</li>
                  <li>Use microfiber cloths for better dust and dirt removal.</li>
                  <li>Don't forget to clean hidden areas like behind appliances.</li>
                  <li>Maintain your cleaning tools to ensure effectiveness.</li>
                  <li>Involve family members in the cleaning process to share the workload.</li>
                  <li>Consider professional cleaning services for deep cleaning needs.</li>
                  <li>Stay motivated by setting cleaning goals and tracking your progress.</li>
                </ul>
                <p>
                  Implementing these tips can make your cleaning routine more effective and less time-consuming. Start incorporating them into your daily life for a cleaner, more organized home.
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
                <h5 className="mb-0">Frequently Asked Questions About Cconnect</h5>
              </div>
              <div className="card-body overflow-auto" style={{ maxHeight: '400px' }}>
                <p>
                  We've compiled a list of frequently asked questions to help you understand how Cconnect works. Here are some of the most common questions:
                </p>
                <ul>
                  <li><strong>How do I book a service?</strong> Simply browse through our categories, select the service you need, and book it online. Our platform is designed for ease of use.</li>
                  <li><strong>Are the service providers verified?</strong> Yes, all our service providers undergo a thorough verification process. This includes background checks, credential verification, and customer feedback analysis.</li>
                  <li><strong>What if I'm not satisfied with the service?</strong> If you encounter any issues, our customer support team is available to help. You can file a complaint or request a refund through our support page.</li>
                  <li><strong>How do I update my account information?</strong> You can update your account details by logging into your profile and navigating to the account settings section.</li>
                  <li><strong>Can I cancel a booked service?</strong> Yes, you can cancel a service booking within 24 hours of the scheduled time. Refer to our cancellation policy for more details.</li>
                </ul>
                <p>
                  For additional information, visit our FAQ page or contact our support team directly.
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
                <h5 className="mb-0">User Success Stories</h5>
              </div>
              <div className="card-body overflow-auto" style={{ maxHeight: '400px' }}>
                <p>
                  Our users have experienced great success with Cconnect. Here are some of their stories:
                </p>
                <blockquote className="blockquote">
                  <p className="mb-0">"I booked a plumber through Cconnect and was impressed with the quick and professional service. The job was done efficiently, and I could get back to my day without delay. Highly recommend!" - Sarah</p>
                </blockquote>
                <blockquote className="blockquote">
                  <p className="mb-0">"Cconnect made it easy for me to find a reliable electrician in my area. The booking process was smooth, and the service exceeded my expectations. I'll definitely use Cconnect again!" - John</p>
                </blockquote>
                <blockquote className="blockquote">
                  <p className="mb-0">"After struggling to find a good cleaning service, Cconnect came to the rescue. The cleaner was punctual, thorough, and friendly. It's a great platform for finding trusted service providers!" - Emily</p>
                </blockquote>
                <p>
                  We love hearing how Cconnect has positively impacted our users. Share your story with us and let us know how we've helped you.
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

export default PopularPosts;
