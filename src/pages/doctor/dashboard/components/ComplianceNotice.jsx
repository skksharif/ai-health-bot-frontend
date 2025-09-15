import React from "react";
import { MdErrorOutline } from "react-icons/md";
import "./ComplianceNotice.css";
import { BiErrorCircle } from "react-icons/bi";

const notices = [
  "Rita Missed her last medicine",
  "Sarah has been experiencing increased fatigue lately",
  "Michael reported a new allergy to peanuts",
  "Emma is due for her annual check-up next month",
  "David needs a follow-up on his blood pressure medication",
  "Linda is scheduled for a diabetes screening this week",
  "James has been feeling chest pain during physical activity",
  "Laura recently completed her physical therapy sessions",
  "Diana need Follow ups",
];

export default function ComplianceNotice() {
  return (
    <div className="cn-compliance-notice">
      <h3 className="cn-notice-title">
        <span className="sc-icon">
          <BiErrorCircle />
        </span>
        Compliance Notice
      </h3>

      <ul className="cn-notice-list">
        {notices.map((notice, index) => (
          <li className="cn-notice-item" key={index}>
            <span className="cn-bullet">●</span> {notice}
          </li>
        ))}
      </ul>
    </div>
  );
}
