import React from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import "./About.css";
import i from "./1.jpg";

function About() {
  return (
    <React.Fragment>
      <Navigationbar />
      <section>
        <div class="container-fluid" data-aos="zoom-in">
          <div class="row">
            <div class="col-lg-12 col-md-12 justify-content-center headinngaboutus">
              <h1>About us</h1>
            </div>
            <div class="col-md-12">
              <img src={i} class="headimage" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default About;
