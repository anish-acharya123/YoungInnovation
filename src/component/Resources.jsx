import React from "react";
import "./Resources.css";
import Image1 from "../assets/Resources1.png";
import Image2 from "../assets/Resources2.png";
import Image3 from "../assets/Resources3.png";

function Resources() {
  const ResourceList = [
    {
      id: 1,
      image: Image1,
      name: "Tools",
      title: "Defence Elvis",
      description:
        "It allows creating networks of public spending on goods services used in defense in 28 EU countries...",
    },
    {
      id: 2,
      image: Image2,
      name: "Documents",
      title: "Beneficial Ownership",
      description:
        "It allows creating networks of public spending on goods services used in defense in 28 EU countries...",
    },
    {
      id: 3,
      image: Image3,
      name: "Create",
      title: " Recovery ",
      description:
        "It allows creating networks of public spending on goods services used in defense in 28 EU countries...",
    },
  ];

  return (
    <div className="resources_main">
      <div className="resources__wrapper">
        <div className="conten_about">
          <h1>Latest Resources</h1>
          <p data-aos="fade-up" data-aos-duration="1000">
            The latest resources includes Transparency Toolkit, Evidence, Best
            Practices.
          </p>
        </div>
        <div
          className="resources_cards"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {ResourceList.map((data) => (
            <div
              className={`resources-card-section span-${data.id}`}
              key={data.id}
            >
              <div className="resources_img">
                <img
                  src={data.image}
                  className="resources-image-wrapper"
                  alt=""
                />
              </div>
              <div className="resources_card_content">
                <div className="resources_title">{data.title}</div>
                <div className="resources-info">
                  <span className="r-title">{data.description}</span>
                </div>
                <div className="learn-more">Learn More →</div>
              </div>
            </div>
          ))}
        </div>
        <div className="resources_btn">
          <button data-aos="fade-up" data-aos-duration="1000">
            {" "}
            View all resources{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resources;
