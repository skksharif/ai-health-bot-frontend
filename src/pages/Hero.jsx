import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
  return (
    <section className="hero">
      {/* Background Shapes */}
      <div className="bg-shape"></div>
      <div className="circle-small"></div>
      <div className="circle-large"></div>

      {/* Left - Robot Image */}
      <div className="hero-left">
        <img src="/robot.png" alt="AI Robot" className="robot-img" />
      </div>

      {/* Right - Text Content */}
      <div className="hero-right">
        <h1 className="hero-title">
          Meet Your Smart <br /> Health Companion
        </h1>
        <p className="hero-subtitle">
          AI-powered care to check symptoms, manage medications, and book appointments instantly.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={()=>{
            navigate('/chat-with-ai')
          }}>Chat with AI</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}
