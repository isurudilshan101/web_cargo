import React from "react";
import LogoSectionComponent from "../logoSection/logoSectionComponent/LogoSectionComponent";

const logos = [
  "/assets/client_logo_1.PNG",
  "/assets/client_logo_2.PNG",
  "/assets/client_logo_3.PNG",
  "/assets/client_logo_4.PNG",
  "/assets/client_logo_5.PNG",
];

const LogoSection = () => {
  return (
    <div className="logo_container">
      <LogoSectionComponent logos={logos} />
    </div>
  );
};

export default LogoSection;
