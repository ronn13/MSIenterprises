import React from "react";
import "./Client.css";
import data from "./data";

function Client() {
  return (
    <section id="clients" class="clients section-bg">
      <div class="container-fluid" data-aos="zoom-in">
        <div class="row">
          <div class="col-md-12">
            <h1>Our Client</h1>
          </div>
          <div class="col-lg col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={data.indian} class="img-fluid" alt="" />
          </div>

          <div class="col-lg col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={data.dhool} class="img-fluid" alt="" />
          </div>

          <div class="col-lg col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={data.dlf} class="img-fluid" alt="" />
          </div>

          <div class="col-lg col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={data.indiabulls} class="img-fluid" alt="" />
          </div>

          <div class="col-lg col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={data.nit} class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
