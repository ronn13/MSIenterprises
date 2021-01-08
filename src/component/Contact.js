import React, { useEffect } from "react";
import "./Contact.css";
import i from "./1.jpg";
import Footer from "./Footer";
import Navigationbar from "./Navigationbar";

import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aidg8ds",
        "template_jt5rzcl",
        e.target,
        "user_e3u8no5Kdyhd9eZ1eccij"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  useEffect(() => {
    document.title = "MSI - Contact Us";
    window.scrollTo(0, 0);
  }, []);

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
            <form onSubmit={sendEmail} class="contact-form">
              <div class="form-group">
                <label class="control-label col-sm-2" for="fname">
                  Name:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                    name="name"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="mobile">
                  Mobile:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="mobile"
                    placeholder="Enter Last Name"
                    name="mobile"
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
                <label class="control-label col-sm-2" for="rooftoparea">
                  Address:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="Enter Address"
                    name="address"
                  />
                </div>
              </div>

              <div class="form-group">
                <label class="control-label col-sm-2" for="rooftoparea">
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
                    name="comment"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" value="send" class="btn btn-default">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
