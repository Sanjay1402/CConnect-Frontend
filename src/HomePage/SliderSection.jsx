import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../styles.css";
import HomeCleaning from "../assets/images/HomeCleaning.png";

import Electrician from "../assets/images/Electrician.jpg";

import Plumbing from "../assets/images/Plumbing.Webp";
function SliderSection() {
  return (
    <>
      <h1 className="bolder titles">Explore.</h1>
      <div className="row text-center pt-2 pb-5 ">
        <div className="d-flex justify-content-center">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-content text-center">
                  <img src={HomeCleaning} className="slides" />{" "}
                  <div className="text-overlay">
                    <p className="bg-dark bg-opacity-50 ">
                      Sparkling Homes Await <br />
                      Professional Cleaning at Your
                      <br /> Doorstep!
                    </p>
                    <button className="btn btn-success carousel-btn-start">
                      Find more..
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-content text-center">
                  <img src={Electrician} className="slides" />
                  <div className="text-overlay ">
                    <p className="bg-dark bg-opacity-50 ">
                      Find Best electricians <br />
                      near you. <br />
                      Electricians Just a Call Away!
                    </p>
                    <button className="btn btn-success carousel-btn-start">
                      Find more..
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-content text-center">
                  <img src={Plumbing} className="slides" />
                  <div className="text-overlay">
                    <p className="bg-dark bg-opacity-50 ">
                      New washroom fitting or <br />
                      any Water leakage problem <br /> Find best Plumbers <br />{" "}
                      around You.
                    </p>
                    <button className="btn btn-success carousel-btn-start">
                      Find more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-success"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-success"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderSection;
