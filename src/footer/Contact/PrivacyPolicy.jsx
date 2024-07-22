import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../../HomePage/Navbar';
import DetailsSection from '../FOOTER';

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        {/* Banner */}
        <div className="jumbotron text-center bg-dark bg-gradient text-white py-5 mb-4">
          <h1 className="display-4">Privacy Policy</h1>
          <p className="lead">Your privacy is our top priority. Learn how we protect and handle your information.</p>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h3 className="card-title mb-3">Introduction</h3>
            <p className="card-text">
              At Cconnect, we understand the importance of your privacy and are committed to safeguarding your personal information. This privacy policy outlines how we collect, use, and protect your data when you use our platform. 
              <br />
              <br />
              We prioritize the privacy of our users and ensure that your information is handled with the utmost care and confidentiality.
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h3 className="card-title mb-3">User Privacy</h3>
            <p className="card-text">
              The privacy of our users is our first priority. We collect only the information necessary to provide you with the best possible service. 
              <br />
              <br />
              All data collected is used solely for the purpose of enhancing your experience on our platform, ensuring efficient service delivery, and maintaining the security of our system. 
              <br />
              <br />
              We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as described in this privacy policy.
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h3 className="card-title mb-3">Privacy Policy</h3>
            <p className="card-text">
              This privacy policy applies to all information collected through our website, mobile application, and any other services provided by Cconnect. 
              <br />
              <br />
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-subtitle mt-3 mb-3">1. Information We Collect</h4>
            <p className="card-text">
              We collect various types of information to provide and improve our services to you. This includes:
              <br />
              <br />
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details provided by you.</li>
                <br />
                <li><strong>Service Usage Information:</strong> Details about your interactions with our platform, including service bookings, payment transactions, and customer support inquiries.</li>
                <br />
                <li><strong>Technical Information:</strong> IP address, browser type, operating system, and other technical data collected through cookies and similar technologies.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-subtitle mt-3 mb-3">2. How We Use Your Information</h4>
            <p className="card-text">
              The information we collect is used for the following purposes:
              <br />
              <br />
              <ul>
                <li>To provide and maintain our services.</li>
                <br />
                <li>To process your transactions and manage your bookings.</li>
                <br />
                <li>To communicate with you regarding your account and services.</li>
                <br />
                <li>To improve our platform and enhance user experience.</li>
                <br />
                <li>To ensure the security and integrity of our systems.</li>
                <br />
                <li>To comply with legal obligations and resolve disputes.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-subtitle mt-3 mb-3">3. Data Protection and Security</h4>
            <p className="card-text">
              We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. These measures include secure server environments, encryption of sensitive data, and regular security assessments. 
              <br />
              <br />
              While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-subtitle mt-3 mb-3">4. Your Rights</h4>
            <p className="card-text">
              You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact our customer support team. 
              <br />
              <br />
              We will respond to your request in accordance with applicable data protection laws.
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-subtitle mt-3 mb-3">5. Changes to This Privacy Policy</h4>
            <p className="card-text">
              We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. 
              <br />
              <br />
              Any changes will be posted on this page, and we will notify you of significant changes through our website or other communication channels. 
              <br />
              <br />
              Your continued use of our services after any changes to the privacy policy constitutes your acceptance of the updated terms.
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-subtitle mt-3 mb-3">6. Contact Us</h4>
            <p className="card-text">
              If you have any questions or concerns about this privacy policy, please contact us at:
              <br />
              <br />
              <ul>
                <li><strong>Email:</strong> privacy@cconnect.com</li>
                <br />
                <li><strong>Phone:</strong> +1 234 567 890</li>
                <br />
                <li><strong>Address:</strong> 123 Cconnect St, City, Country</li>
              </ul>
              <br />
              Our customer support team is available to assist you with any inquiries regarding your privacy and data protection.
            </p>
          </div>
        </div>
      </div>
      <DetailsSection />
    </>
  );
}

export default PrivacyPolicy;
