import React, { useState } from "react";
import "./DrugDelivery.css";
import { FaTruck } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DrugDelivery = () => {
  const deliveries = [
    {
      name: "Zyloprim",
      steps: ["Ordered", "Packed", "Out for delivery", "Delivered"],
      currentStatus: "Packed",
    },
    {
      name: "Aeronext",
      steps: ["Ordered", "Packed", "Out for delivery", "Delivered"],
      currentStatus: "Out for delivery",
    },
    {
      name: "Velosurge",
      steps: ["Ordered", "Packed", "Out for delivery", "Delivered"],
      currentStatus: "Ordered",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="dash-drug-delivery">
      <h3 className="dash-card-title">
        <span>
          <FaTruck />
        </span>{" "}
        Drug Delivery
      </h3>
      {deliveries.map((drug, idx) => {
        const isExpanded = expandedIndex === idx;
        return (
          <div key={idx} className="dash-drug-container">
            <div className="dash-drug-header" onClick={() => toggleExpand(idx)}>
              <span>{drug.name}</span>
              <span>{isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
            {isExpanded && (
              <div className="dash-drug-steps">
                {drug.steps.map((step, i) => {
                  const stepIndex = i;
                  const currentIndex = drug.steps.indexOf(drug.currentStatus);
                  const isActive = stepIndex <= currentIndex;
                  const isLast = i === drug.steps.length - 1;
                  return (
                    <div key={i} className="dash-step-item">
                      <div className="dash-step-wrapper">
                        <div
                          className={`dash-step-dot ${
                            isActive ? "active" : ""
                          }`}
                        ></div>
                        {!isLast && <div className="dash-step-line"></div>}
                      </div>
                      <span
                        className={`dash-step-text ${isActive ? "active" : ""}`}
                      >
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DrugDelivery;
