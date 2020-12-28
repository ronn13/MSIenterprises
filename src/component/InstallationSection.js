import React from "react";
import "./InstallationSection.css";

function InstallationSection() {
  return (
    <section>
      <div class="container-fluid" data-aos="zoom-in">
        <div class="row">
          <div class="col-md-12">
            <h1>Installation & commissioning</h1>
          </div>
          <div class="col-lg col-md col-sm-12 d-none d-md-block">
            <img
              src="https://images.unsplash.com/photo-1574360773950-133867861ae9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c29sYXIlMjBwYW5lbHN8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div class="col-lg col-md col-sm-12">
            <ul class="list-group align-text-left">
              <li class="list-group-item primary align-item-center">
                <h4>Solar Plant Installation</h4>
              </li>
              <li class="list-group-item">
                1. We Provide Customized Solutions for YOU
              </li>
              <li class="list-group-item">
                2. IN-House Design and Simulation of Site
              </li>
              <li class="list-group-item">
                3. Top Notch Procurement of Components
              </li>
              <li class="list-group-item">
                4. Seamless Installation of Power Plant
              </li>

              <li class="list-group-item">
                5. Synchronization with Grid and DG
              </li>
              <li class="list-group-item">6. Five years Free AMC provided</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstallationSection;
