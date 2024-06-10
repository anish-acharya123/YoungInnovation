import React, { useState } from "react";
import "./Searchbox.css";
import Search from "../assets/searchicon.svg";

function Searchbox() {
  const [search, setSearch] = useState(false);

  const handlesearch = () => {
    setSearch(!search);
  };

  return (
    <div className="search-box">
      <button onClick={handlesearch} className="search-btn">
        <img src={Search} alt="" />
      </button>

      {search && (
        <div className="searchbox__visible">
          <div className="search-content">
            <div onClick={handlesearch}>
              <p>close</p>
            </div>
            <input type="text" placeholder="search" className="search-input" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Searchbox;
