import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../../HomePage/Navbar';
import DetailsSection from '../FOOTER';

function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        {/* Banner */}
        <div className="jumbotron text-center bg-dark bg-gradient text-white py-5 mb-4">
          <h1 className="display-4">Terms and Conditions</h1>
          <p className="lead">Please read these terms and conditions carefully before using our service.</p>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="card-title">1. Introduction</h3>
            <p className="card-text">
              Welcome to Cconnect! These terms and conditions outline the rules and regulations for the use of our website and services. By accessing or using Cconnect, you agree to comply with and be bound by these terms. If you do not agree with any part of the terms, you must not use our services.
            </p>

            <h3 className="card-title">2. Acceptance of Terms</h3>
            <p className="card-text">
              By using our services, you signify your acceptance of these terms and conditions and our privacy policy. If you do not agree to these terms, please refrain from using our services. We reserve the right to modify these terms at any time. Your continued use of the service following any changes indicates your acceptance of the new terms.
            </p>

            <h3 className="card-title">3. Services Provided</h3>
            <p className="card-text">
              Cconnect provides an online platform that connects users with local service providers. Our services include but are not limited to home cleaning, electrician services, plumbing, and more. We facilitate the booking and payment process, acting as an intermediary between users and service providers. We do not directly provide the services and are not responsible for the actions of the service providers.
            </p>

            <h3 className="card-title">4. User Responsibilities</h3>
            <p className="card-text">
              Users must provide accurate and complete information when registering and booking services. Users are responsible for ensuring their use of our services complies with applicable laws and regulations. Users must respect the service providers and adhere to any guidelines or instructions provided. Any misuse of the platform or inappropriate behavior towards service providers may result in termination of access to our services.
            </p>

            <h3 className="card-title">5. Service Providers</h3>
            <p className="card-text">
              Service providers listed on our platform undergo a verification process to ensure they meet our standards. However, Cconnect does not guarantee the quality, safety, or legality of the services provided. Users should exercise their own judgment and discretion when hiring service providers. Any disputes or issues with service providers should be reported to our customer support team for resolution.
            </p>

            <h3 className="card-title">6. Payment and Refunds</h3>
            <p className="card-text">
              Payments for services are made through our platform using secure payment methods. Users agree to pay the specified fees for the services booked. In case of any issues or dissatisfaction with the service, users should contact our customer support team. Refunds are subject to our refund policy, which includes provisions for cancellations, service quality, and other factors. Details of our refund policy can be found on our website.
            </p>

            <h3 className="card-title">7. Limitation of Liability</h3>
            <p className="card-text">
              Cconnect is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses. Our liability is limited to the amount paid by the user for the service in question. We do not assume any liability for the actions, negligence, or misconduct of the service providers.
            </p>

            <h3 className="card-title">8. Privacy Policy</h3>
            <p className="card-text">
              Your privacy is important to us. Our privacy policy outlines how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of your information in accordance with our privacy policy. We encourage you to review the privacy policy to understand our practices.
            </p>

            <h3 className="card-title">9. Changes to Terms</h3>
            <p className="card-text">
              We reserve the right to modify these terms and conditions at any time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top. It is your responsibility to review these terms periodically. Your continued use of the services after any changes indicates your acceptance of the new terms.
            </p>

            <h3 className="card-title">10. Contact Us</h3>
            <p className="card-text">
              If you have any questions about these terms and conditions, please contact us at:
              <ul>
                <li><strong>Email:</strong> support@cconnect.com</li>
                <li><strong>Phone:</strong> +1 234 567 890</li>
                <li><strong>Address:</strong> 123 Cconnect St, City, Country</li>
              </ul>
              Our customer support team is available to assist you with any concerns or issues you may have.
            </p>
          </div>
        </div>
      </div>
      <DetailsSection />
    </>
  );
}

export default TermsAndConditions;
