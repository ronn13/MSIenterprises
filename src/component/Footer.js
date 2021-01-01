import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="footer">
      <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <footer>
          <div class="row my-5 justify-content-center py-5">
            <div class="col-11">
              <div class="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                  <h3 class="text-muted mb-md-0 mb-5 bold-text">
                    MSI Enterprices
                  </h3>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 bold-text ">
                    <b>MENU</b>
                  </h6>
                  <ul class="list-unstyled">
                    <li>
                      <Link to="/" class="footer-link" href="#">
                        Home
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/about" class="footer-link" href="#">
                        About
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/project" class="footer-link" href="#">
                        Projects
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/services" class="footer-link" href="#">
                        Services
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/contact" class="footer-link" href="#">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                    <b>ADDRESS</b>
                  </h6>
                  <p class="mb-1">Rz-20c/6c GL-1 Main Sagarpur Pur </p>
                  <p>New Delhi-110046</p>
                </div>
              </div>
              <div class="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p class="social text-muted mb-0 pb-0 bold-text">
                    {" "}
                    <span class="mx-2">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </span>{" "}
                    <span class="mx-2">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </span>{" "}
                  </p>
                  <small class="rights">
                    <span>&#174;</span> MSI Enterprices. All Rights Reserved.
                  </small>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                  <h6 class="mt-55 mt-2 text-muted bold-text">
                    <b>Email</b>
                  </h6>
                  <small>
                    {" "}
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    Myrasolarandinfra@gmail.com
                  </small>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                  <h6 class="text-muted bold-text">
                    <b>Mobile no.</b>
                  </h6>
                  <small>
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    Nitika : 9873642101 <br />
                    Jatin : 8130397394 <br />
                    RS Verma : 9999000503 <br />
                  </small>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
