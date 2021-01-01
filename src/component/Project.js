import React, { useEffect } from "react";
import Navigationbar from "./Navigationbar";
import "./Project.css";
import Footer from "./Footer";
import i from "./1.jpg";

function Project() {
  useEffect(() => {
    document.title = "MSI - Our Projects";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigationbar />
      <div class="container project-section">
        <div class="row">
          <div class="col-md-12 project-title">
            <h1>Our Project</h1>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="card h-100">
              <img src={i} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  [500 KW] Distributed Solar Power Plant
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  NIT Rourkela, Orrisa
                </h6>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="card h-100">
              <img src={i} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">[320 KW] On Grid SPV Plant</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Guru Harkishan public school
                </h6>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="card h-100">
              <img src={i} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">[225 KW] On Grid SPV</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  DLF Corporate Greens, Gurgaon
                </h6>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="card h-100">
              <img src={i} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">[150 KW] On Grid SPV Plant</h5>
                <h6 class="card-subtitle mb-2 text-muted">BSTR, Gurgaon</h6>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="card h-100">
              <img src={i} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">[130 KW] On Grid SPV Plant</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Malik Industries, U.P.
                </h6>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="card h-100">
              <img src={i} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">[100 KW] On Grid Plant</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Vijay Logistics, Haryana
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
