import React, { useEffect } from "react";
import "./Swipe.css";
import Swipe1 from "../assets/Swipe1.png";
import Swipe2 from "../assets/Swipe2.png";
import Swipe3 from "../assets/Swipe3.png";
import Swipe4 from "../assets/Swipe4.png";
import Swipe5 from "../assets/Swipe5.png";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function Swipe() {
  const swipeList = [
    {
      id: 1,
      swipe: Swipe1,
      name: "Layers",
    },
    {
      id: 2,
      swipe: Swipe2,
      name: "Quotient",
    },
    {
      id: 3,
      swipe: Swipe3,
      name: "Sisyphus",
    },
    {
      id: 4,
      swipe: Swipe4,
      name: "Hourglass",
    },
    {
      id: 5,
      swipe: Swipe5,
      name: "Circooles",
    },
  ];

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      slidesPerView: 4, // Number of slides to show at a time
      spaceBetween: 0, // Space between slides in px
      freeMode: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="swipe_main ">
      <div className="swiper">
        <section className="swipe_content swiper-wrapper ">
          {swipeList.map((data) => (
            <div className="swipe_element swiper-slide" key={data.id}>
              <div className="swipe_element">
                <div className="swipe_img">
                  <img src={data.swipe} alt="" />
                </div>
                <div className="swipe_name">{data.name}</div>
              </div>
            </div>
          ))}
        </section>

        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
}

export default Swipe;
