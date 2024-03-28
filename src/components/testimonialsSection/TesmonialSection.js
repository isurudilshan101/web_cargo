import React from "react";
import "./TesmonialSection.css";
import WhyChoosComponent from "./whyChoosComponent/WhyChoosComponent";

const TesmonialSection = () => {
  return (
    <div className="testmonial_container">
      <div className="testmonial_left">
        <h1>TRUSTED CLIENT</h1>
        <p>Lorem Ipsum simply dummy text </p>
      </div>

      <div className="testmonial_right">
        <h1>WHY CHOOSE US</h1>
        <p>Lorem Ipsum simply dummy text </p>
        <WhyChoosComponent />
      </div>
    </div>
  );
};

export default TesmonialSection;
