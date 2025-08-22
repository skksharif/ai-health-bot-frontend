import { FaTimes } from "react-icons/fa";
import "./Chat.css";

export default function ChatHistory({ showHistory, onClose, isLoggedIn }) {
  // Static chat history data
  const staticHistory = [
    { text: "I’m feeling unwell", time: "3:22 PM" },
    { text: "Can you assist me with my lab results", time: "Yesterday" },
    { text: "Schedule a follow-up appointment", time: "Wednesday" },
    { text: "Need a prescription refill", time: "April 17" },
  ];

  return (
    <div className={`chat-history ${showHistory ? "show" : ""}`}>
      <div className="history-header">
        <h3>Chat History</h3>
      </div>
      {staticHistory.map((item, idx) => (
        <div key={idx} className="history-item">
          <span>{item.text}</span>
          <small>{item.time}</small>
        </div>
      ))}
    </div>
  );
}
