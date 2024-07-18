import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

function DetailsSection() {
  return (
    <footer className="bg-body-tertiary text-center">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
        
        <section>
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input placeholder="Email address"  type="email" id="form5Example24" className="form-control" />
                  {/* </div></div> className="form-label" htmlFor="form5Example24">Email address</label> */}
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
        
        <section className="mb-4">
        <p>
  At CConnect, we bridge the gap between service providers and customers. Our platform allows you to easily find and book various services, ensuring you get the help you need, when you need it.
</p>

        </section>
        <section>
  <div className="row">
    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <h5 className="text-uppercase">About</h5>
      <ul className="list-unstyled mb-0">
        <li><a className="text-body" href="/about">About Us</a></li>
        <li><a className="text-body" href="/mission">Our Mission</a></li>
        <li><a className="text-body" href="/team">Our Team</a></li>
        <li><a className="text-body" href="/careers">Careers</a></li>
      </ul>
    </div>
    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <h5 className="text-uppercase">Blogs</h5>
      <ul className="list-unstyled mb-0">
        <li><a className="text-body" href="/blogs/latest">Latest Posts</a></li>
        <li><a className="text-body" href="/blogs/categories">Categories</a></li>
        <li><a className="text-body" href="/blogs/popular">Popular Posts</a></li>
        <li><a className="text-body" href="/blogs/archives">Archives</a></li>
      </ul>
    </div>
    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <h5 className="text-uppercase">Support</h5>
      <ul className="list-unstyled mb-0">
        <li><a className="text-body" href="/support/help-center">Help Center</a></li>
        <li><a className="text-body" href="/support/faqs">FAQs</a></li>
        <li><a className="text-body" href="/support/contact-support">Contact Support</a></li>
        <li><a className="text-body" href="/support/feedback">Feedback</a></li>
      </ul>
    </div>
    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <h5 className="text-uppercase">Contact</h5>
      <ul className="list-unstyled mb-0">
        <li><a className="text-body" href="/contact">Contact Us</a></li>
        <li><a className="text-body" href="/contact/locations">Our Locations</a></li>
        <li><a className="text-body" href="/contact/partners">Partner with Us</a></li>
        <li><a className="text-body" href="/contact/press">Press Inquiries</a></li>
      </ul>
    </div>
  </div>
</section>

      </div>
      
      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2020 Copyright &nbsp;
        <a className="text-reset fw-bold" href="https://cconnect.com/">CCONNECT.com</a>
      </div>
    </footer>
  );
}

export default DetailsSection;