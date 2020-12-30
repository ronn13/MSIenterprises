import React from "react";
import "./Contact.css";
import i from "./1.jpg";
import Footer from "./Footer";
import Navigationbar from "./Navigationbar";

function Contact() {
  return (
    <>
      <Navigationbar />
      <div class="container-fluid contact">
        <div class="row">
          <div class="col-md-3 col-sm-12">
            <div class="contact-info  text-align-center">
              <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="image"
              />
              <h2>Contact Us</h2>
              <h4>We would love to hear from you !</h4>
            </div>
          </div>
          <div class="col-md-9 col-sm-12">
            <div class="contact-form">
              <div class="form-group">
                <label class="control-label col-sm-2" for="fname">
                  Name:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Enter Your Name"
                    name="fname"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="lname">
                  Mobile:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    placeholder="Enter Last Name"
                    name="lname"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="email">
                  Email:
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="email">
                  Rooftop Area:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="rooftoparea"
                    placeholder="Enter Rooftop Area in Sq meter"
                    name="rooftoparea"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="comment">
                  Your Query:
                </label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
