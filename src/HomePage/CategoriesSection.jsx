import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import HomeCleaning from "../assets/images/HomeCleaning.png";
import Electrician from "../assets/images/Electrician.jpg";
import Plumbing from "../assets/images/Plumbing.Webp";
import BeautyParlour from "../assets/images/BeautyParlour.jpg";
import Homedecore from "../assets/images/Homedecore.jpg";
import SofaCleaner from "../assets/images/SofaCleaner.jpg";
import DryCleaner from "../assets/images/DryCleaner.jpg";
import CarWash from "../assets/images/CarWash.jpg";
import Mechanic from "../assets/images/Mechanic.jpg";
import React from "react";

function CategoriesSection() {
  return (
    <>
      <div className="cat-title titles">
        <h1>
          Categories. <br />
          <br />
        </h1>
      </div>
      <div className="category-section">
        <a href="#homedecore" className="category-link">
          <div className="category">
            <div className="category-circle">
              <img
                src={Homedecore}
                alt="Category 2"
                className="category-image"
              />
            </div>
            <p className="category-name">Home Decore</p>
          </div>
        </a>
        <a href="#electrician" className="category-link">
          <div className="category">
            <div className="category-circle">
              <img
                src={Electrician}
                alt="Category 2"
                className="category-image"
              />
            </div>
            <p className="category-name">Electrician</p>
          </div>
        </a>
        <a href="#plumbing" className="category-link">
          <div className="category">
            <div className="category-circle">
              <img src={Plumbing} alt="Category 2" className="category-image" />
            </div>
            <p className="category-name">Plumbing</p>
          </div>
        </a>
        <a href="#beautysalon" className="category-link">
          <div className="category">
            <div className="category-circle">
              <img
                src={BeautyParlour}
                alt="Category 2"
                className="category-image"
              />
            </div>
            <p className="category-name">Beauty Salon</p>
          </div>
        </a>
      </div>
      <br /> <br />
      <div className="category-section">
        <a href="#homecleaning" className="category-link">
          <div className="category">
            <div className="category-circle">
              <img
                src={HomeCleaning}
                alt="Category 1"
                className="category-image"
              />
            </div>
            <p className="category-name">Home Cleaning</p>
          </div>
        </a>
        <a href="#carwash" className="category-link">
          <div className="category">
            <div className="category-circle">
              <img src={CarWash} alt="Category 2" className="category-image" />
            </div>
            <p className="category-name">Car Wash</p>
          </div>
        </a>
        <a href="#sofacleaning" className="category-link">
          <div className="category">
            <div className="category-circle">
              <img
                src={SofaCleaner}
                alt="Category 2"
                className="category-image"
              />
            </div>
            <p className="category-name">Sofa Cleaning</p>
          </div>
        </a>
        <a href="#drycleaning" className="category-link">
          <div className="category">
            <div className="category-circle">
              <img
                src={DryCleaner}
                alt="Category 2"
                className="category-image"
              />
            </div>
            <p className="category-name">Dry Cleaning</p>
          </div>
        </a>
      </div>
      <br /> <br />
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-primary btn-lg btn-block">
          View More..
        </button>
      </div>
    </>
  );
}

export default CategoriesSection;
