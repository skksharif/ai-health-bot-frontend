import React from "react";
import "./WeightHeightBMICard.css";
import { MdInsertChartOutlined } from "react-icons/md";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WeightHeightBMICard = () => {
  // Example BMI data over time
  const data = [
    { date: "Jan", bmi: 22.5 },
    { date: "Feb", bmi: 23.0 },
    { date: "Mar", bmi: 22.8 },
    { date: "Apr", bmi: 23.2 },
    { date: "May", bmi: 22.9 },
    { date: "Jun", bmi: 23.1 },
    { date: "Jul", bmi: 22.7 },
  ];

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
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis domain={["auto", "auto"]} />
              <Tooltip />
              <Line type="monotone" dataKey="bmi" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
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
