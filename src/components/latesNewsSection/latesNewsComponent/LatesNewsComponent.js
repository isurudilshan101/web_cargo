import React from "react";
import "./LatesNewsComponent.css";

const LatesNewsComponent = ({ img, heading }) => {
  return (
    <div class="card-container">
      <div class="left-side">
        <img src={img} alt="news1" />
      </div>
      <div class="right-side">
        <h2>Card Heading</h2>
        <span className="admin_area">
          <h6>Admin</h6> <h6>15</h6>
        </span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          fermentum libero.
        </p>
      </div>
    </div>
  );
};

export default LatesNewsComponent;
