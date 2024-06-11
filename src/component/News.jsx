import React from "react";
import "./News.css";
import News1 from "../assets/News1.png";
import News2 from "../assets/News2.png";
import News3 from "../assets/News3.png";
import News4 from "../assets/News4.png";
import News5 from "../assets/News5.png";
import News6 from "../assets/News6.png";

function News() {
  const NewsList = [
    {
      id: 1,
      image: News1,
      title: "Statement from the Catalogue Coalition...",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds....",
    },
    {
      id: 2,
      image: News2,
      title: "Statement from the Catalogue Coalition...",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds....",
    },
    {
      id: 3,
      image: News3,
      title: "Statement from the Catalogue Coalition...",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds....",
    },
    {
      id: 4,
      image: News4,
      title: "Statement from the Catalogue Coalition...",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds....",
    },
    {
      id: 5,
      image: News5,
      title: "Statement from the Catalogue Coalition...",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds....",
    },
    {
      id: 6,
      image: News6,
      title: "Statement from the Catalogue Coalition...",
      description:
        "In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds....",
    },
  ];

  return (
    <div className="news_main">
      <div className="news__wrapper">
        <div className="conten_about">
          <h1>News</h1>
          <p data-aos="fade-left" data-aos-duration="1000">
            We aim to stop public funds siphoning off and we have a plan that we
            will help. we are working at the national and EU levels to advance.
          </p>
        </div>
        <div
          className="news_cards"
          //   data-aos="fade-right"
          //   data-aos-duration="1000"
        >
          {NewsList.map((data) => (
            <div
              className={`news-card-section news_${data.id}`}
              data-aos="fade-right"
              data-aos-duration="1000"
              key={data.id}
            >
              <img src={data.image} className="news-image-wrapper" alt="" />
              <div className="news_card_content">
                <div className="news_title">{data.title}</div>
                <div className="news-info">
                  <span className="n-title">{data.description}</span>
                </div>
                <div className="learn-more">Learn More →</div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn">
          <button data-aos="fade-up" data-aos-duration="1000">
            {" "}
            View all news{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
