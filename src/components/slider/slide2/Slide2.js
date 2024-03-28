import React from "react";
import "./Slide2.css";

const Slide2 = () => {
  return (
    <div className="flex">
      <div className="w-1/3">
        <h2>Logistic Slide 2</h2>
        <h2>Best Shipping </h2>
        <h2>Partner </h2>

        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de
        </p>
        <button className="discover_more">Discover More</button>
      </div>
      <div className="img_slide1_container">
        <img className="img_slide1" src="/assets/cargo_slide2.JPEG" alt="" />
      </div>
    </div>
  );
};

export default Slide2;
