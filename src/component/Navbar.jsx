import React, { useState } from "react";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Searchbox from "./Searchbox";
import Image from "../assets/logo.svg";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <nav className={`navbar ${scroll ? " navbar_toggle " : ""}`}>
      <div className="navbar-wrapper">
        <div className="nav-left">
          <img src={Image} alt="" />
          <div className="logo">Catalog</div>
          <ul className="nav-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Case Studies</li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </div>

        <div className="search-icon">
          <Searchbox />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
