import React from "react";

function CarPlateInfo({ region, month, week, result }) {
  return (
    <div className="info-container">
      <div className="info-title-box">
        <span className="info-title">Registration Origin</span>
      </div>
      <div className="info-region">{region}</div>
      <div className="info-title-box">
        <span className="info-title">Register On</span>
      </div>
      <div className="info-date">
        <div className="month">
          <span className="month-title">Month</span>
          <span className="month-text">{month}</span>
        </div>
        <div className="week">
          <span className="date-title">Week</span>
          <span className="date-text">{week}</span>
        </div>
      </div>
    </div>
  );
}

export default CarPlateInfo;
