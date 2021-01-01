import React from "react";
import Footer from "./Footer";
import Navigationbar from "./Navigationbar";
import "./Services.css";

import i from "./1.jpg";
function Services() {
  return (
    <>
      <Navigationbar />

      <div class="container services-section">
        <div class="row">
          <div class="col-md-12 services-title">
            <h1 class="display-4">Our Mission !</h1>
          </div>
          <div class="col-lg-12 order-lg-1 text-align-center">
            <p>
              By providing unparalleled value, we will greatly accelerate the
              adoption of solar energy systems. This will give our customers,
              our communities, and our nation clean, abundant, low-cost,
              distributed, and renewable energy, and will allow us to provide
              financial security for all shareholders while giving back to the
              community.
            </p>
          </div>
        </div>
      </div>

      <div class="container services-section">
        <div class="row">
          <div class="col-md-12 services-title">
            <h1 class="display-4">Why ESI Enterprices ?</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 order-lg-2 align-items-center d-flex justify-content-center">
            <img class="img-fluid services-img" src={i} alt="" />
          </div>
          <div class="col-lg-6 order-lg-1 text-align-center">
            <div class="p-5">
              <h2>Highest quality products and Installation !</h2>
              <p>
                We Start with the Highest Quality Equipment – Tier 1
                Manufacturers There are literally hundreds of original equipment
                manufacturers (OEMs) in the solar industry. MSI Enterprices uses
                exclusively tier 1 manufacturers. Tier 1 manufacturers are the
                top 2% of solar manufacturers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 align-items-center d-flex justify-content-center">
            <img class="img-fluid services-img" src={i} alt="" />
          </div>
          <div class="col-lg-6 text-align-center">
            <div class="p-5">
              <h2>Raving fan customer service !</h2>
              <p>
                Customized Systems: Get what you need not what they are selling.
                Every customer is different, and every customer’s site, roof or
                building is different. At MSI Enterprices, we start by listening
                carefully to the customer’s unique needs and concerns. Then we
                perform a thorough site survey. We use the latest software and
                tools to measure shading, solar irradiance and azimuths, and we
                analyze the building’s electrical systems and structural
                elements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 order-lg-2 align-items-center d-flex justify-content-center">
            <img class="img-fluid services-img" src={i} alt="" />
          </div>
          <div class="col-lg-6 order-lg-1 text-align-center">
            <div class="p-5">
              <h2>Low Cost !</h2>
              <p>
                We get asked a frequently, “how do you deliver a high quality
                product, with great service, at a low price?” Sounds like
                marketing hype, we know. But there’s plenty of science and hard
                work behind it. The founders of MSI Enterprices spent many years
                in the high speed, high stakes world of large commercial
                construction project management and learning and perfecting some
                of the most sophisticated cost and quality control systems and
                methodologies that industry has to offer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container services-section">
        <div class="row">
          <div class="col-md-12 services-title">
            <h1 class="display-4">Our Vision !</h1>
          </div>
          <div class="col-lg-12 order-lg-1 text-align-center">
            <p>
              To provide the most compelling value in the solar energy industry.
              Value, as defined by our customers, means designing and installing
              the highest quality solar energy systems, on time, safely, with
              high customer satisfaction, at a low cost.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
              <div class="blockquote-custom-icon bg-info shadow-sm">
                <i class="fa fa-quote-left text-white"></i>
              </div>
              <p class="mb-0 mt-2 font-italic">
                "What I find most fundamentally inspiring about this business is
                that we put power back in the hands of the people…..."
                <a href="#" class="text-info">
                  @Jatin
                </a>
              </p>
              <footer class="blockquote-footer pt-4 mt-4 border-top"></footer>
            </blockquote>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;
