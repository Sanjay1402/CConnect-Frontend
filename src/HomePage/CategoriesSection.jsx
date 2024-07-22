import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HomeCleaning from "../assets/images/HomeCleaning.png";
import Electrician from "../assets/images/Electrician.jpg";
import Plumbing from "../assets/images/Plumbing.Webp";
import BeautyParlour from "../assets/images/BeautyParlour.jpg";
import Homedecore from "../assets/images/Homedecore.jpg";
import SofaCleaner from "../assets/images/SofaCleaner.jpg";
import DryCleaner from "../assets/images/DryCleaner.jpg";
import CarWash from "../assets/images/CarWash.jpg";
import Mechanic from "../assets/images/Mechanic.jpg";

const categoryImages = {
  "WELLNESS SERVICES": Homedecore,
  "HOME MAINTAINANCE": Electrician,
  "EDUCATION AND TUTORING": Plumbing,
  "PERSONAL CARE": BeautyParlour,
  "": HomeCleaning,
  "SKILLS DEVELOPMENT": CarWash,
  "CLEANING SERVICES": SofaCleaner,
  "HEALTH SERVICES": DryCleaner,
  "TRANSPORTATION": Mechanic
};

function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <>
      <div className="cat-title titles">
        <h1>
          Categories. <br />
          <br />
        </h1>
      </div>
      <div className="category-section">
        {categories.slice(0, 4).map((category) => (
          <Link key={category.CATEGORY_ID} to={`/category/${category.CATEGORY_ID}`} className="category-link">
            <div className="category">
              <div className="category-circle">
                <img
                  src={categoryImages[category.CATEGORY_NAME]}
                  alt={category.CATEGORY_NAME}
                  className="category-image"
                />
              </div>
              <p className="category-name">{category.CATEGORY_NAME}</p>
            </div>
          </Link>
        ))}
      </div>
      <br /> <br />
      <div className="category-section">
        {categories.slice(4, 8).map((category) => (
          <Link key={category.CATEGORY_ID} to={`/category/${category.CATEGORY_ID}`} className="category-link">
            <div className="category">
              <div className="category-circle">
                <img
                  src={categoryImages[category.CATEGORY_NAME]}
                  alt={category.CATEGORY_NAME}
                  className="category-image"
                />
              </div>
              <p className="category-name">{category.CATEGORY_NAME}</p>
            </div>
          </Link>
        ))}
      </div>
      <br /> <br />
      <div className="d-flex justify-content-center">

      </div>
    </>
  );
}

export default CategoriesSection;
