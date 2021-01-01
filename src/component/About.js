import React, { useEffect } from "react";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import "./About.css";
import i from "./1.jpg";
import Team from "./Team";

function About() {
  useEffect(() => {
    document.title = "MSI - About Us";
  }, []);

  return (
    <React.Fragment>
      <Navigationbar />
      <section class="portfolio-details">
        <div class="container">
          <div class="portfolio-description text-align-center">
            <h2 class="text-align-center">About US</h2>
            <p>
              <span>MSI Enterprises</span> has a futuristic approach to the
              world’s energy crisis and growing power demand.
            </p>
            <p>
              <span>​We believe</span> the answer to all our Energy problems is
              in Nature – Shining Sun, The Blowing Wind and the Flowing Water
              provides us with more than enough energy than what we need.
            </p>
            <p>
              <span>The Sun</span> being an abundant and clean source of energy
              is the best fuel for the future. We being the Global Citizens of
              the Earth must feel our responsibility to Go Green and utilise the
              suitable technology and resources for our advantage.
            </p>
            <p>
              <span>We believe</span> in providing easy and affordable power
              solutions that satisfies your expectations and beyond.
            </p>
            <p>
              <span>Our Dedicated</span> EPC Team (Engineering Procurement &
              Construction) provides you with the best optimized design of your
              power plant , recommends the best suitable Solar Equipment and
              Executes the construction flawlessly on time.
            </p>
            <p>
              <span>With our Headquarters in Gurgaon</span> , we at MSI
              Enterprises are leading the way with ground breaking Solar Power
              Solutions for different energy needs. Our Solar Experts and
              Engineers make a grate team that can tackle any challange and
              innovate around problems
            </p>
          </div>
        </div>

        <div class="container about-slider">
          <div class="carousel slide" id="main-carousel" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#main-carousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#main-carousel" data-slide-to="1"></li>
              <li data-target="#main-carousel" data-slide-to="2"></li>
              <li data-target="#main-carousel" data-slide-to="3"></li>
            </ol>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block img-fluid" src={i} alt="" />
                <div class="carousel-caption d-none d-md-block">
                  <h1>Solar Energy In India</h1>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid" src={i} alt="" />
                <div class="carousel-caption d-none d-md-block">
                  <h3>
                    Solar power in India is a fast developing industry. As of 31
                    January 2018 the country’s solar power had 20 GW total
                    capacity.
                  </h3>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid" src={i} alt="" />
                <div class="carousel-caption d-none d-md-block">
                  <h3>
                    India expanded its solar-generation capacity 8 times from
                    2,650 MW on 26 May 2014 to over 20 GW as on 31 January 2018.
                  </h3>
                </div>
              </div>
              <div class="carousel-item">
                <img src={i} alt="" class="d-block img-fluid" />
                <div class="carousel-caption d-none d-md-block">
                  <h3>
                    The country added 3 GW of solar capacity in 2015-2016 and
                    over 5 GW in 2016-2017, the highest of any year, with the
                    average current price of solar electricity dropping to 18%
                    below the average price of its coal-fired
                  </h3>
                </div>
              </div>
            </div>
            <a
              href="#main-carousel"
              class="carousel-control-prev"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
              <span class="sr-only" aria-hidden="true">
                Prev
              </span>
            </a>
            <a
              href="#main-carousel"
              class="carousel-control-next"
              data-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
              <span class="sr-only" aria-hidden="true">
                Next
              </span>
            </a>
          </div>
        </div>

        <Team />
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default About;
