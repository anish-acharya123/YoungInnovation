import React from "react";
import "./Footer.css";
import Image from "../assets/Footer.png";
import Image1 from "../assets/logo.svg";

// social media
import Media1 from "../assets/Twitter.png";
import Media2 from "../assets/linkend.png";
import Media3 from "../assets/youtube.png";

function Footer() {
  return (
    <footer className="footer">
      <figure className="footer--img">
        <img src={Image} alt="footer-img" />
      </figure>

      <div className="footer-overlay">
        <div className="footer-wrapper">
          <div className="footer-main">
            <div className="footer-left">
              <div className="footer-logo">
                <img src={Image1} alt="logo" />
                <div className="logo_text">Catalog</div>
              </div>
              <p className="u-section-description">
                We are a collaboration of non-government organisation and
                professionals working to ensure that government spending.
              </p>

              <div className="footer-medias">
                <a href="#">
                  <img src={Media1} alt="" className="footer-media" />
                </a>
                <a href="#">
                  <img src={Media2} alt="" className="footer-media" />
                </a>
                <a href="#">
                  <img src={Media3} alt="" className="footer-media" />
                </a>
              </div>
            </div>

            <div className="footer-right">
              <div className="footer-linksection">
                <div className="footer--heading">Links</div>
                <div className="footer-links">
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
              <div className="footer-linksection">
                <div className="footer--heading">Resources</div>
                <div className="footer-links">
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

              <div className="footer-linksection">
                <div className="footer--heading">Work withus</div>
                <div className="footer-links">
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
