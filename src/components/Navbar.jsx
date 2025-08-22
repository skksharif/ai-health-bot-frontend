import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* Close Button */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          &times;
        </button>

        <NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
        <NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        <button className="login-btn" onClick={handleLinkClick}>Login</button>
      </div>
    </nav>
  );
}
