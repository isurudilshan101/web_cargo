import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LogoSectionComponent.css";

const LogoSectionComponent = ({ logos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="client-logos-carousel">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="client-logo-item">
            <img src={logo} alt={`Client Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSectionComponent;
