import { GiBookmarklet } from "react-icons/gi";
import "./ContinuesLearning.css";

export default function ContinuesLearning() {
  const items = [
    { title: "Medical Insights Forum", time: "Posted 3 mins ago" },
    { title: "Advancements in AI for Healthcare", time: "Posted 2 days ago" },
    { title: "New Breakthroughs in Cancer Therapies", time: "Posted 1 day ago" },
    { title: "Webinar on Telemedicine Best Practices", time: "Posted 5 days ago" },
    { title: "Innovative Pain Management Solutions", time: "Posted 4 days ago" },
  ];

  return (
    <div className="cl-learning-wrapper">
      <h3 className="cl-title">
        <span className="sc-icon"><GiBookmarklet/></span> Continuous Learning
      </h3>

      <div className="cl-learning-list">
        {items.map((item, index) => (
          <div key={index} className="cl-learning-card">
            <span className="cl-learning-title">{item.title}</span>
            <span className="cl-learning-time">{item.time}</span>
            <button className="cl-btn-outline">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
