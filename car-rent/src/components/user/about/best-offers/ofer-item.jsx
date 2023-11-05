import React from "react";
import "./ofer-item.scss";


const OferItem = ({ icon, title, desc }) => {
  return (
    <div children="offer-item">
      <div className="icon">{icon}</div>
      <div className="content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default OferItem;
