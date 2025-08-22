import { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { IoMicOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";

import ChatHistory from "./ChatHistory";
import "./Chat.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi, I’m your health companion. You can ask me about symptoms, get reminders, or book appointments.",
    },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const messagesEndRef = useRef(null);

  const quickReplies = [
    "I feel fatigued and lack energy",
    "My concentration is diminished and I'm forgetful",
    "I notice changes in my sleep patterns",
    "I'm experiencing headaches frequently",
  ];

  const sendMessage = (text, sender = "user") => {
    if (!text.trim()) return;
    const newMessage = { id: Date.now(), sender, text };
    setMessages([...messages, newMessage]);
    setHistory([
      {
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      ...history,
    ]);
    setInput("");

    if (sender === "user") {
      setTimeout(() => {
        const botReply = {
          id: Date.now() + 1,
          sender: "bot",
          text: "I’m sorry to hear that. Could you please describe your symptoms?",
        };
        setMessages((prev) => [...prev, botReply]);
      }, 1000);
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      {/* Chat Main */}
      <div className="chat-main">
        <div className="chat-header">
          <div className="chat-header-title">
            <span className="chat-bot-icon">
              <RiRobot2Line />
            </span>
            <h2>Your Health Companion</h2>
          </div>
          {/* Toggle button for mobile */}
          <button
            className="history-toggle-btn"
            onClick={() => setShowHistory((prev) => !prev)}
          >
            {showHistory ? <IoMdCloseCircleOutline /> : <MdHistory />}
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-quick-replies">
          {quickReplies.map((reply, idx) => (
            <button key={idx} onClick={() => sendMessage(reply)}>
              {reply}
            </button>
          ))}
        </div>

        <div className="chat-input">
          <span className="chat-mic-icon">
            <IoMicOutline />
          </span>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          />
          <button onClick={() => sendMessage(input)}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Chat History Component */}
      <ChatHistory
        history={history}
        showHistory={showHistory}
        onClose={() => setShowHistory(false)}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}
