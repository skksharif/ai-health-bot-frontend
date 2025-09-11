import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md"; // Import menu and close icons
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>

      {/* Hamburger Icon */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
        <button
          className="login-btn"
          onClick={() => {
            handleLinkClick();
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
