import React from "react";
import "./FeaturesGrid2.css";
const FeaturesGrid2 = ({ advantages }) => {
  return (
    <div className="row adv-2-grid">
      {advantages.map((adv, index) => (
        <div key={index} className="col-md-4 adv-2-box">
          <div className="adv-2-card">
            <img src={adv.icon} alt="" className="adv-2-icon" />
            <div>
              {adv.title && <h3>{adv.title}</h3>}
              <p>{adv.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid2;
