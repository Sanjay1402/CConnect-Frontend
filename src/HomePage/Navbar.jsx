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
    <nav className="navbar navbar-expand-lg  bg-white ">
      <div className="container-fluid">
        <a className="navbar-brand" href="Home">
          <h1 className="nav-title text-">CConnect.</h1>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={Bars} alt="Bars Icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a
                className="nav-link active Custom-nav-items"
                aria-current="page"
                href="home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="features">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              <a href="#" onClick={handleShow}>
                <img src={Bars} alt="" />
              </a>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <h2>CConnect.</h2>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div class="list-group side-box">
                    <button
                      type="button"
                      class="list-group-item list-group-item-action side-items"
                    >
                      My profile
                    </button>
                    <button
                      type="button"
                      class="list-group-item list-group-item-action side-items"
                    >
                      Home
                    </button>
                    <button
                      type="button"
                      class="list-group-item list-group-item-action side-items"
                    >
                      Address
                    </button>
                    <button
                      type="button"
                      class="list-group-item list-group-item-action side-items"
                    >
                      Settings
                    </button>
                    <button
                      type="button"
                      class="list-group-item list-group-item-action side-items"
                    >
                      Need help?
                    </button>
                  </div>
                  <button className="btn btn-dark side-but-mrg" onClick={() => {window.location.href = '/login';}}>Login</button>
                </Offcanvas.Body>
              </Offcanvas>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
