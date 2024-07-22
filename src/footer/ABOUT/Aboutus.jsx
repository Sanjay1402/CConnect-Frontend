import Navbar from "../../HomePage/Navbar";
import DetailsSection from "../FOOTER";
import React, { useEffect } from 'react';

function AboutUs() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);
   
    return (
    <>
      <Navbar />

      <div className="container py-5">
        {/* Banner Section */}
        <div className="jumbotron jumbotron-fluid bg-dark bg-gradient text-white py-5">
          <div className="container text-center">
            <h1 className="display-4">About Us</h1>
            <p className="lead">
              Discover the story behind Cconnect and how we’re revolutionizing the way you find and book professional services.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="row my-5">
          <div className="col-md-12 mb-4">
            <div className="card border-Secondary">
              <div className="card-header text-center text-dark">
                <h3 className="h4 mb-0">Our Story</h3>
              </div>
              <div className="card-body">
                <p>
                  At Cconnect, our journey began from a personal frustration with finding reliable local services. We, like many others, found ourselves in situations where we needed urgent home repairs, maintenance, or other essential services but were left with few convenient options.
                  <br /><br />
                  Picture this: a sudden plumbing issue while you’re unwell at home, or an unexpected electrical problem that needs immediate attention. In these situations, we often had to spend countless hours calling various service providers, visiting local shops, and dealing with unreliable responses. The process was not only exhausting but also inefficient, causing unnecessary stress and delays.
                  <br /><br />
                  This recurring struggle highlighted a significant gap in the market: a lack of a streamlined, trustworthy platform to connect users with local service providers. The existing methods were fragmented and outdated, leading us to envision a better solution.
                  <br /><br />
                  Driven by our own experiences and the desire to improve the way people access essential services, we founded Cconnect. Our goal was to create a platform that bridges the gap between customers and service providers, offering a seamless, efficient, and reliable way to book services.
                  <br /><br />
                  We embarked on a mission to build a solution that would not only simplify the process of finding and booking services but also enhance the overall experience for both users and providers. Through Cconnect, we aim to save time, reduce frustration, and offer a high level of convenience to everyone involved.
                  <br /><br />
                  Today, Cconnect stands as a testament to our commitment to improving the service booking experience. We take pride in providing a platform that brings professionalism and ease to your doorstep, transforming the way local services are accessed and delivered.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
            <div className="card border-Secondary">
              <div className="card-header text-center text-dark">
                <h3 className="h4 mb-0" id="our-mission">Our Mission</h3>
              </div>
              <div className="card-body">
                <p>
                  Our mission is to connect local users with local service providers in a market that currently lacks a platform for such connections. We recognize that many users still rely on visiting shops in person to book services. This process can be time-consuming and inefficient.
                  <br /><br />
                  At Cconnect, we are here to make this process easier and more time-saving. By offering a platform where users can easily find and book the services they need, we aim to bring convenience, quality, and efficiency to your doorstep. Not only does this benefit the users, but it also helps increase business for local service providers.
                  <br /><br />
                  With Cconnect, you can quickly connect with verified professionals, book services at your convenience, and experience a hassle-free way to manage your needs. We strive to transform the way people access local services, making it a seamless and enjoyable experience for everyone involved.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
          <div className="card border-Secondary">
              <div className="card-header text-center text-dark">
                 <h3 className="h4 mb-0">What We Offer</h3>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-2">Home Cleaning: Keep your home spotless with our professional cleaning services.</li>
                  <li className="mb-2">Electrical Services: Find expert electricians for all your electrical needs.</li>
                  <li className="mb-2">Plumbing Services: Get reliable plumbers for installations, repairs, and maintenance.</li>
                  <li className="mb-2">And More: Explore a variety of other services tailored to meet your requirements.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
          <div className="card border-Secondary">
              <div className="card-header text-center text-dark">
                <h3 className="h4 mb-0">Why Choose Us?</h3>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-2">Verified Professionals: We ensure all our service providers are thoroughly vetted and verified for their expertise and reliability.</li>
                  <li className="mb-2">Convenient Booking: Our user-friendly platform makes it easy to browse services, view profiles, and book appointments.</li>
                  <li className="mb-2">Quality Assurance: We are committed to providing high-quality services and customer satisfaction.</li>
                  <li className="mb-2">Customer Support: Our dedicated customer support team is always ready to assist you with any queries or concerns.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-12 mb-4">
          <div className="card border-Secondary">
              <div className="card-header text-center text-dark">
                <h3 className="h4 mb-0">Get in Touch</h3>
              </div>
              <div className="card-body">
                <p>
                  Have questions or need assistance? Feel free to reach out to us. We're here to help!
                  <br /><br />
                  Thank you for choosing Cconnect. We look forward to serving you!
                </p>
              </div>
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

export default AboutUs;
