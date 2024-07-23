import Bars from "../assets/images/Bars.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-white bg-gradient custom-nav">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand mx-auto" href="Home">
          <h1 className="nav-title text-center">CConnect.</h1>
        </a>
        
        <div className="d-flex order-lg-2">
          <button
            className="navbar-toggler custom-bar"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: 'none' }}
          >
            <img src={Bars} alt="Bars Icon" style={{ height: 30 }} />
          </button>

          <a href="#" onClick={handleShow} className="ms-2">
            <img src={Bars} alt="" style={{ height: 30 }} />
          </a>
        </div>

        <div className="collapse navbar-collapse justify-content-center order-lg-1" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <a className="nav-link active Custom-nav-items" aria-current="page" href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:5173/aboutus">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:5173/HelpCenter">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:5173/ContactUs">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>CConnect.</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="list-group side-box">
            <button
              type="button"
              className="list-group-item list-group-item-action side-items"
            >
              My profile
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action side-items"
            >
              Home
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action side-items"
            >
              Address
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action side-items"
            >
              Settings
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action side-items"
            >
              Need help?
            </button>
          </div>
          <button className="btn btn-dark side-but-mrg" onClick={() => {window.location.href = '/login';}}>Log out</button>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
}

export default Navbar;
