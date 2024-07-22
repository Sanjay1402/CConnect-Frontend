import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../../HomePage/Navbar';
import DetailsSection from '../FOOTER';

function HelpCenter() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        {/* Banner */}
        <div className="jumbotron text-center bg-dark bg-gradient  text-white py-5 mb-4">
          <h1 className="display-4">Help Center</h1>
          <p className="lead">Find answers to your questions or get in touch with our support team.</p>
        </div>

        <div className="row mb-4">
          {/* FAQ Section */}
          <div className="col-md-6">
            <h3 className="h4 mb-4">Frequently Asked Questions</h3>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How do I book a service?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Simply browse through our categories, select the service you need, and book it online. Our user-friendly platform makes the process quick and easy.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Are the service providers verified?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Yes, all our service providers undergo a thorough verification process to ensure quality and reliability.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What if I'm not satisfied with the service?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Our customer support team is here to assist you with any issues or concerns. You can contact us through our support page or call our helpline.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-dark bg-gradient  text-white text-center">
                Contact Support
              </div>
              <div className="card-body">
                <p>If you need further assistance, please reach out to our support team:</p>
                <ul className="list-unstyled">
                  <li><strong>Email:</strong> support@cconnect.com</li>
                  <li><strong>Phone:</strong> +1 234 567 890</li>
                  <li><strong>Live Chat:</strong> Available 24/7 on our website</li>
                </ul>
                <p>You can also visit our <a href="/support">support page</a> for more resources and information.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Resources Section */}
        <div className="row">
          <div className="col-12">
            <h3 className="h4 mb-4">Support Resources</h3>
            <div className="list-group">
              <a href="/support/tutorials" className="list-group-item list-group-item-action">
                <h5 className="mb-1">Tutorials</h5>
                <p className="mb-1">Step-by-step guides to help you get started with our services.</p>
              </a>
              <a href="/support/troubleshooting" className="list-group-item list-group-item-action">
                <h5 className="mb-1">Troubleshooting</h5>
                <p className="mb-1">Common issues and how to resolve them.</p>
              </a>
              <a href="/support/documentation" className="list-group-item list-group-item-action">
                <h5 className="mb-1">Documentation</h5>
                <p className="mb-1">Detailed information about our services and how to use them.</p>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <p>For more information, visit our <a href="/FAQs">FAQs</a> or <a href="/ContactUs">Contact Us</a>.</p>
          </div>
        </div>
      
      </div>
      <DetailsSection />
    </>
  );
}

export default HelpCenter;
