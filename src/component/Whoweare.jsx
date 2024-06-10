import React from "react";
import "./Whoweare.css";
import Person1 from "../assets/whoweare1.png";
import Person2 from "../assets/whoweare2.png";
import Person3 from "../assets/whoweare3.png";
import Person4 from "../assets/whoweare4.png";

function Whoweare() {
  const ImageList = [
    {
      id: 1,
      image: Person1,
      name: "Adriana Homolova",
      value: "1000",
    },
    {
      id: 2,
      image: Person3,
      name: "Sandor Lederer",
      value: "1500",
    },
    {
      id: 3,
      image: Person2,
      name: "Karolis Granickas",
      value: "2000",
    },
    {
      id: 4,
      image: Person4,
      name: "Anish Acharya",
      value: "2500",
    },
  ];

  return (
    <div className="whoweare__main">
      <div className="whoweare__wrapper">
        <div
          className="whoweare_information"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="whoweare_title">Who we are</h1>
          <p className="whoweare_description">
            We are a collaboration of Non Govt. and professionals working to
            ensure that government spending is done fairly, openly, efficiently,
            and creates the best value for money and best outcomes for Europe.
            We are working at the national and EU levels to advance the
            principles of openness in spending of funds, procurement, and
            company ownership within the EU.
          </p>
          <span className="learn-more">See More → </span>
        </div>

        <div
          className="whoweare_card_section "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {ImageList.map((data) => (
            <div
              className={`whoweare_card_detail span_image_${data.id} `}
              key={data.id}
              data-aos="fade-left"
              data-aos-duration={data.value}
            >
              <div className="whoweare_img">
                <img className="whoweare_card_img" src={data.image} alt="" />
              </div>
              <div className="person_name">{data.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whoweare;
