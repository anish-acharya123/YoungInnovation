import React from "react";
import "./Termcon.css";

function Termcon() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="termscon_main">
      <div className="termscon_wrapper">
        <div className="terms_left">Terms and conditions</div>
        <div className="terms_right">
          <div className="term_copy">
            ©{" "}
            <span>
              creative <br /> commons
            </span>
          </div>
          <button className="up-btn" onClick={scrollToTop}>
            ↑
          </button>
        </div>
      </div>
    </div>
  );
}

export default Termcon;
