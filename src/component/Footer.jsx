import React from "react";
import "./Footer.css";
import Image from "../assets/Footer.png";
import Image1 from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <figure className="footer--heroimg">
        <img src={Image} alt="footer-img" />
      </figure>

      <div className="footer__overlay"></div>

      <div className="footer__wrapper">
        <div className="u-container">
          <div className="footer__main">
            <div className="footer__left">
              <figure>
                <img src={Image1} alt="logo" />
                <div className="logo_text">Catalog</div>
              </figure>
              <p className="u-section-description">
                We are a collaboration of non-government organisation and
                professionals working to ensure that government spending.
              </p>
            </div>

            <div className="footer__right">
              <div className="footer__linksection">
                <h5 className="footer--heading">Links</h5>
                <div className="footer__links">
                  <a href="#" className="footer--link">
                    Campaigns
                  </a>
                  <a href="#" className="footer--link">
                    Resources
                  </a>
                  <a href="#" className="footer--link">
                    News
                  </a>
                  <a href="#" className="footer--link">
                    About Us
                  </a>
                </div>
              </div>
              <div className="footer__linksection">
                <h5 className="footer--heading">Resources</h5>
                <div className="footer__links">
                  <a href="#" className="footer--link">
                    Toolkit
                  </a>
                  <a href="#" className="footer--link">
                    Evidence
                  </a>
                  <a href="#" className="footer--link">
                    Best Practices
                  </a>
                </div>
              </div>

              <div className="footer__linksection">
                <h5 className="footer--heading">Work withus</h5>
                <div className="footer__links">
                  <a href="#" className="footer--link">
                    Contact Us
                  </a>
                  <a href="#" className="footer--link">
                    Join Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
