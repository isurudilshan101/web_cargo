import React, { useState } from "react";
import Slide1 from "./slide1/Slide1";
import Slide2 from "./slide2/Slide2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : prevSlide - 1));
  };

  return (
    <div className="">
      <div className="container slide_area">
        {currentSlide === 0 ? <Slide1 /> : <Slide2 />}
      </div>

      <div className="prev_next">
        <button onClick={prevSlide} className="  bg-none rounded mr-2">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={nextSlide} className="  bg-none rounded">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
