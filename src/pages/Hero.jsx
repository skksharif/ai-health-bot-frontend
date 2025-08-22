import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <>
     <div className="bg-shape"></div>
     <div className="circle-small"></div>
     <div className="circle-large"></div>
      <section className="hero">
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
            AI-powered care that helps you check symptoms, manage medications,
            and book appointments – instantly
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Chat with AI Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
}
