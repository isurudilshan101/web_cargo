import React from "react";
import StatComponent from "./statComponent/StatComponent";
import "./StatSection.css";

const StatSection = () => {
  return (
    <div className="stat_container">
      <StatComponent
        title={
          <>
            <span>Delivered</span>
            <br />
            <span>Packages</span>
          </>
        }
        number="890"
      />
      <StatComponent
        title={
          <>
            <span>Country </span>
            <br />
            <span>Covered</span>
          </>
        }
        number="890"
      />{" "}
      <StatComponent
        title={
          <>
            <span>Tons</span>
            <br />
            <span>Of Goods</span>
          </>
        }
        number="740"
      />{" "}
      <StatComponent
        title={
          <>
            <span>Satisfied </span>
            <br />
            <span>Client</span>
          </>
        }
        number="600"
      />
    </div>
  );
};

export default StatSection;
