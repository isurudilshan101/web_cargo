import React from "react";
import "./LatesNewsSection.css";
import LatesNewsComponent from "./latesNewsComponent/LatesNewsComponent";

const LatesNewsSection = () => {
  const news1 = "assets/news1.PNG";
  const news2 = "assets/news2.PNG";
  const news3 = "assets/news3.PNG";
  const news4 = "assets/news4.PNG";

  return (
    <div className="latest_news_section">
      <div className="news_header">
        <h1>LATEST NEWS</h1>
        <h6>INTERGER CONGUE EUT</h6>
      </div>

      <div className="news_container">
        <div className="news_top">
          <LatesNewsComponent img={news1} />
          <LatesNewsComponent img={news2} />
        </div>
        <div className="news_bottom">
          <LatesNewsComponent img={news3} />
          <LatesNewsComponent img={news4} />
        </div>
      </div>

      {/* For mobile view  */}
      <div className="news_container_mobi">
        <div className="news_top">
          <LatesNewsComponent img={news1} />
          <LatesNewsComponent img={news2} />
        </div>
        <div className="news_bottom">
          <LatesNewsComponent img={news3} />
          <LatesNewsComponent img={news4} />
        </div>
      </div>
    </div>
  );
};

export default LatesNewsSection;
