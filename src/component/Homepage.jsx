import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
// import backgroundImage from "../assests/backgroundimage.jpeg";

const Homepage = () => {
  return (
    <header className="header">
      <div className="overlay">
        <Navbar />
        <main className="homepage_content">
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Beautiful analytics to grow smarter
          </h1>
          <p data-aos="fade-up" data-aos-duration="1500">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, <br />
            and retain more users. Trusted by over 4,000 startups.
          </p>
          <button
            className="cta-button"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Why Catalog? →
          </button>
        </main>
      </div>
    </header>
  );
};

export default Homepage;
