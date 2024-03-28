import React from "react";
import "./StatComponent.css";

const StatComponent = ({ title, number }) => {
  return (
    <div className="stat_component_container">
      <div className="stat_number">
        <h1> {number}</h1>
      </div>
      <div className="stat_title">{title}</div>
    </div>
  );
};

export default StatComponent;
