import React, { useState, useEffect, useRef } from "react";
import "./AnikaMDAssistant.css";
import { RiRobot2Line } from "react-icons/ri";
import { FaRobot } from "react-icons/fa";

const AnikaMDAssistant = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello, let me know how I can assist you" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);
  const isFirstRender = useRef(true); // ✅ Flag to skip initial scroll

  // Scroll to bottom whenever a new message is added (except on first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // Skip scrolling on initial render
    }

    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      setMessages((prev) => [...prev, { sender: "user", text: inputValue }]);
      setInputValue("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "I'm here to help you!" },
        ]);
      }, 500);
    }
  };

  return (
    <div className="dash-assistant">
      <h3 className="dash-assistant-heading">
        <span>
          <RiRobot2Line />
        </span>
        Anika MD Assistant
      </h3>
      <div className="dash-assistant-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`dash-message ${msg.sender === "bot" ? "bot" : "user"}`}
          >
            {msg.sender === "bot" && (
              <div className="dash-assistant-icon">
                <FaRobot />
              </div>
            )}
            <div className="dash-message-text">{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="dash-assistant-input">
        <input
          type="text"
          placeholder="Ask Anika"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default AnikaMDAssistant;
