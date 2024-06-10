import React from "react";
import "./Campaigns.css";
import Image1 from "../assets/Campaigns1.png";
import Image2 from "../assets/Campaigns2.png";
import Image3 from "../assets/Campaigns3.png";

function Campaigns() {
  const dataList = [
    {
      id: 1,
      image: Image1,
      title: "Open Data Directive",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people,",
    },
    {
      id: 2,
      image: Image2,
      title: "Beneficial Ownership",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people,",
    },
    {
      id: 3,
      image: Image3,
      title: "another title",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people,",
    },
  ];

  // console.log(dataList[0].image.Image1);

  return (
    <div className="campaigns_main">
      <div className="campaigns__wrapper">
        <div className="conten_about">
          <h1>Campaigns</h1>
          <p data-aos="fade-left" data-aos-duration="1000">
            We aim to stop public funds siphoning off and we have a plan that we
            will help. we are working at the national and EU levels to advance.
          </p>
        </div>
        <div
          className="campaigns_cards"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {dataList.map((data) => (
            <div
              className={`campaigns-card-section span-${data.id}`}
              key={data.id}
            >
              <img
                src={data.image}
                className="campaigns-image-wrapper"
                alt=""
              />
              <div className="campaigns_card_content">
                <div className="campaigns_title">{data.title}</div>
                <div className="campaigns-info">
                  <span className="C-title">{data.description}</span>
                </div>
                <div className="learn-more">Learn More →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
