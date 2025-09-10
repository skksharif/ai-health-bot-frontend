import React from "react";
import "./WeightHeightBMICard.css";
import { MdInsertChartOutlined } from "react-icons/md";

const WeightHeightBMICard = () => {
  return (
    <div className="dash-bmi">
      <h3 className="dash-card-title">
        <span>
          <MdInsertChartOutlined />
        </span>
        Weight, Height, BMI Tracker
      </h3>
      <div className="bmi-board">
        <div className="dash-bmi-graph">
          {/* Placeholder for graph */}
          <div className="dash-graph-placeholder">Graph Here</div>
        </div>
        <div className="dash-bmi-values">
          <div className="bmi-value">
            <p>Weight</p>
            <strong>68 kg</strong>
          </div>
          <div className="bmi-value">
            <p>Height</p>
            <strong>172 cm</strong>
          </div>
          <div className="bmi-value">
            <p>BMI</p>
            <strong>23</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightHeightBMICard;
