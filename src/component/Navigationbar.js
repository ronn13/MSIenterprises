import React from "react";

import "./Navigationbar.css";
import i from "./1.jpg";
import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            M S I
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/project" className="nav-link" href="#">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link" href="#">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigationbar;
