import { PiNoteBold } from "react-icons/pi";
import "./CaseInvites.css";

export default function CaseInvites() {
  const invites = [
    { doctor: "Dr. Patel", case: "Brain Surgery complications" },
    { doctor: "Dr. Smith", case: "Heart Surgery recovery tips" },
    { doctor: "Dr. Lee", case: "Diabetes management strategies" },
    { doctor: "Dr. Johnson", case: "Nutrition for athletes" },
    { doctor: "Dr. Kim", case: "Understanding mental health" },
  ];

  return (
    <div className="ci-invites-wrapper">
      <h3 className="ci-title">
        <span className="sc-icon"><PiNoteBold/></span> Case Invites
      </h3>

      <div className="ci-invite-list">
        {invites.map((invite, index) => (
          <div key={index} className="ci-invite-card">
            <span className="ci-doctor">By {invite.doctor}</span>
            <span className="ci-case">{invite.case}</span>
            <button className="ci-btn-primary">Accept invite</button>
          </div>
        ))}
      </div>
    </div>
  );
}
