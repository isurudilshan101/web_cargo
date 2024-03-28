import React from "react";
import "./Slide1.css";

const Slide1 = () => {
  return (
    <div className="flex slider_one_container">
      <div className="w-1/3">
        <h6 className="title_one">Logistic</h6>
        <h1 className="title_two">Best Shipping </h1>
        <h1 className="title_three">Partner </h1>

        <p className="discription">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de
        </p>
        <button className="discover_more">Discover More</button>
      </div>
      <div className="w-2/3 img_slide1_container">
        <img className="img_slide1" src="/assets/slide1.PNG" alt="" />
      </div>
    </div>
  );
};

export default Slide1;
