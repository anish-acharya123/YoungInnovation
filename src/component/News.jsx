import React, { useEffect, useState } from "react";
import "./News.css";

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json"
      );
      const result = await response.json();
      setData(result["news"]);
    };

    fetchdata();
  }, []);

  console.log(data);

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
        <div className="news_cards">
          {data.slice(0, 6).map((item) => (
            <div
              className={`news-card-section `}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img src={item.image} className="news-image-wrapper" alt="" />
              <div className="news_card_content">
                <div className="news_title">{item.title}</div>
                <div className="news-info">
                  <span className="n-title">{item.content}</span>
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
