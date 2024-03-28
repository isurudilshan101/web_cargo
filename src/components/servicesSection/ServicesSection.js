import React from "react";
import { Carousel } from "antd";

import "./ServicesSection.css";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "black",
  lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
};

const settings = {
  dots: true,
  className: "custom-slick-dots",
};
const ServicesSection = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="container service_container">
      <Carousel {...settings} afterChange={onChange}>
        <div className="container">
          <div className="heading">
            <div>
              <h6>Real Solution , Real Fast !</h6>
            </div>
            <div>
              <h2>Best Global Logictics Solution</h2>
            </div>
          </div>

          <div className="card_section">
            <div className="left_side_service w-1/2">
              <div className="image left_image w-1/2">
                <img className=" " src="/assets/left.PNG" alt="left_image" />
              </div>
              <div className="left_card w-1/2">
                <h4>Air Freight Services</h4>
                <p>
                  At our auto servicegarage, we are fully appreciate how
                  difficult occur it is for people to find
                </p>
                <button>Read More</button>
              </div>
            </div>

            <div className="right_side_service w-1/2  ">
              <div className="image right_image w-1/2">
                {" "}
                <img className="" src="/assets/right.PNG" alt="right_image" />
              </div>

              <div className="right_card w-1/2">
                <h4>Drone Services</h4>
                <p>
                  At our auto servicegarage, we are fully appreciate how
                  difficult occur it is for people to find
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
          <h3>fsdjhkjsfhofhoho fwfjlwfljfljl</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div className="logistics_para">
        <p>
          Logistics & Transport Solutions Save Your Time.{" "}
          <span className="find_para">Finds Your Solutions</span>{" "}
        </p>
      </div>
    </div>
  );
};
export default ServicesSection;
