
import { MdInsertChartOutlined } from "react-icons/md";
import './MedicalAnalytics.css';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./MedicalAnalytics.css";

const MedicalAnalytics = () => {
  // Example datasets
  const sugarData = [
    { month: "Jan", value: 55 },
    { month: "Feb", value: 60 },
    { month: "Mar", value: 68 },
    { month: "Apr", value: 58 },
    { month: "May", value: 62 },
    { month: "Jun", value: 59 },
    { month: "Jul", value: 64 },
    { month: "Aug", value: 70 },
    { month: "Sep", value: 61 },
    { month: "Oct", value: 65 },
    { month: "Nov", value: 55 },
    { month: "Dec", value: 67 },
  ];

  const bpData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 27 },
    { month: "Mar", value: 22 },
    { month: "Apr", value: 18 },
    { month: "May", value: 19 },
    { month: "Jun", value: 28 },
    { month: "Jul", value: 21 },
    { month: "Aug", value: 23 },
    { month: "Sep", value: 19 },
    { month: "Oct", value: 16 },
    { month: "Nov", value: 20 },
    { month: "Dec", value: 18 },
  ];

  const cholesterolData = [
    { month: "Jan", value: 185 },
    { month: "Feb", value: 200 },
    { month: "Mar", value: 190 },
    { month: "Apr", value: 182 },
    { month: "May", value: 195 },
    { month: "Jun", value: 201 },
    { month: "Jul", value: 180 },
    { month: "Aug", value: 185 },
    { month: "Sep", value: 192 },
    { month: "Oct", value: 198 },
    { month: "Nov", value: 188 },
    { month: "Dec", value: 183 },
  ];

  const renderChart = (title, data, color) => (
    <div className="medical-analytics-card">
      <h4 className="medical-analytics-label">{title}</h4>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={data}>
          <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} fill={color} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="medical-analytics">
      <h3 className="medical-analytics-title">
        <MdInsertChartOutlined /> Visual Health Trends
      </h3>
      {renderChart("Sugar", sugarData, "#1976d2")}
      {renderChart("Blood Pressure", bpData, "#388e3c")}
      {renderChart("Cholesterol", cholesterolData, "#d32f2f")}
    </div>
  );
};

export default MedicalAnalytics;
