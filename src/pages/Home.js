import React from "react";
import NavBar from "../components/navbar/NavBar";
import Welcome from "../components/welcomeSection/Welcome";
import "./Home.css";
import Slider from "../components/slider/Slider";
import ServicesSection from "../components/servicesSection/ServicesSection";
import StatSection from "../components/statsSection/StatSection";
import TesmonialSection from "../components/testimonialsSection/TesmonialSection";
import LogoSection from "../components/logoSection/LogoSection";
import LatesNewsSection from "../components/latesNewsSection/LatesNewsSection";
import FooterSection from "../components/footerSection/FooterSection";

const Home = () => {
  return (
    <div>
      <div className="container">
        <NavBar />
      </div>
      <div className="slider">
        <Slider />
      </div>
      <div className="welcome">
        <Welcome />
      </div>
      <div className="services">
        <ServicesSection />
      </div>

      <div className="stat">
        <StatSection />
      </div>
      <div className="tesmonialSection">
        <TesmonialSection />
      </div>

      <div className="logo_section">
        <LogoSection />
      </div>

      <div className="news">
        <LatesNewsSection />
      </div>
      <div>
        <div className="foot_section">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
