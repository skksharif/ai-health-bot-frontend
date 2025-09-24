// DoctorSelection.js
import React, { useState } from "react";
import "./DoctorSelection.css";
import { MdOutlineNotifications } from "react-icons/md";
import { FiFilter } from "react-icons/fi"; // filter icon
import StarRating from "../components/StarRating";
import { NavLink } from "react-router-dom";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Joseph McCall",
    specialty: "Pediatrician",
    rating: 4.5,
    distance: "1.5 km",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Emily Carson",
    specialty: "Immunologist",
    rating: 4.8,
    distance: "2.0 km",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Dr. Nathaniel Wu",
    specialty: "Cardiologist",
    rating: 4.9,
    distance: "3.1 km",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    id: 4,
    name: "Dr. Sarah Johnson",
    specialty: "Orthopedist",
    rating: 4.7,
    distance: "1.8 km",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "Dr. Michael Smith",
    specialty: "General Practitioner",
    rating: 4.6,
    distance: "1.2 km",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 6,
    name: "Dr. Linda T.",
    specialty: "Gynecologist",
    rating: 4.7,
    distance: "2.5 km",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    id: 7,
    name: "Dr. Annabelle R.",
    specialty: "Endocrinologist",
    rating: 4.4,
    distance: "1.7 km",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
  },
  {
    id: 8,
    name: "Dr. Henry Lee",
    specialty: "Ophthalmologist",
    rating: 4.8,
    distance: "3.3 km",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 9,
    name: "Dr. Megan Patel",
    specialty: "Psychiatrist",
    rating: 4.6,
    distance: "0.9 km",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
  },
];

const DoctorSelection = ({ formData, setFormData, nextStep }) => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    specialty: "",
    type: "",
    location: "",
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSelect = (doctor) => {
    setFormData({ ...formData, doctor: doctor.name });
    nextStep();
  };

  const filteredDoctors = doctorsData.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ds-wrapper">
      {/* Sidebar Filters */}
      <aside className={`ds-sidebar ${sidebarOpen ? "active" : ""}`}>
        <h3 className="ds-filters-title">Filters</h3>

        <label className="ds-label">Speciality</label>
        <input
          type="text"
          placeholder="Speciality"
          className="ds-input"
          value={filters.specialty}
          onChange={(e) =>
            setFilters({ ...filters, specialty: e.target.value })
          }
        />

        <label className="ds-label">Consultation Type</label>
        <div className="ds-radio-group">
          {["All", "In-person", "Video", "Voice"].map((type) => (
            <label key={type} className="ds-radio-label">
              <input
                type="radio"
                name="consultation"
                value={type}
                checked={filters.type === type}
                onChange={(e) =>
                  setFilters({ ...filters, type: e.target.value })
                }
              />
              {type}
            </label>
          ))}
        </div>

        <label className="ds-label">Location</label>
        <input
          type="text"
          placeholder="Location"
          className="ds-input"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="ds-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <main className="ds-main">
        <div className="ds-main-header">
          <h2 className="ds-title">Book an Appointment</h2>
          <div className="ds-user-actions">
            <button
              className="ds-filter-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FiFilter />
            </button>
            <div>
              <button className="ds-notification-btn">
                <MdOutlineNotifications />
              </button>
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User"
                className="ds-user-avatar"
              />
            </div>
          </div>
        </div>

        <input
          type="text"
          className="ds-search-bar"
          placeholder="Search specialists, doctors, etc."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="ds-grid">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="ds-card">
              <NavLink to='/doctor-profile/${doctor.id}'>
                <div className="ds-card-header">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="ds-img"
                  />
                  <div className="ds-info">
                    <h3 className="ds-name">{doctor.name}</h3>
                    <p className="ds-specialty">{doctor.specialty}</p>
                    <p className="ds-rating">
                      <StarRating rating={doctor.rating} />
                      {doctor.rating}
                    </p>
                    <p className="ds-location">
                      {" "}
                      {doctor.distance} far from you
                    </p>
                  </div>
                </div>
              </NavLink>
              <button className="ds-btn" onClick={() => handleSelect(doctor)}>
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DoctorSelection;
