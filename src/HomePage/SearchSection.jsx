import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import "../Styles.css";

function SearchSection() {
  return (
    <>
      <div className="row align-items-center text-center pt-5 pb-3 bg-dark text-light explore-section">
        <h3 className="fw-bold">Welcome to CConnect</h3>

        <p>Find any services near you.</p>
        <div className="col-10 offset-1">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchSection;
