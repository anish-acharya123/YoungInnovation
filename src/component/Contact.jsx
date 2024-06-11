import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_main">
      <div className="contact_wrapper">
        <div className="conten_about">
          <h1>Contact</h1>
          <p className="contact_p" data-aos="fade-up" data-aos-duration="1000">
            If you have any further inquires, please let us know by filling the
            form below
          </p>
        </div>

        <form className="contact_form">
          <div className="merge">
            <div
              className="contact-box"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" name="firstName" />
            </div>

            <div
              className="contact-box"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
          </div>

          <div
            className="contact-box"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div
            className="contact-box"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" />
          </div>

          <div className="btn">
            <button type="submit" data-aos="fade-up" data-aos-duration="1000">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
