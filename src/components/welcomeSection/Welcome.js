import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="container welcome">
      <div className="left_side w-1/2">
        <div className="image_container">
          <img
            className="welcome_image"
            src="/assets/welcome.PNG"
            alt="welcome_image"
          />
        </div>
      </div>
      <div className="right_container w-1/2">
        <div className="right_side">
          <div className="heading_text">
            <h2>TransMax Logistics</h2>
            <h2>
              Around <span className="text_three">the World</span>{" "}
            </h2>
          </div>

          <p className="welcome_phara_one">
            Transmax is the world's drive in world wide coordinations suppliers-
            we uphold industry and exchange the worldwide trade of merchandise
            through land transport.
          </p>

          <p className="welcome_phara_two">
            Our war added administrations guarantee the prograssion of products
            proceeds consistly and supply chains stay learn and streamlined for
            progres.
          </p>
          <br></br>
          <button className="welcome_button">MORE ABOUT US</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
