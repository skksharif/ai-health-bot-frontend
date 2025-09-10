import React, { useState } from "react";
import "./DoctorSelection.css";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Joseph McCall",
    specialty: "Pediatrician",
    rating: 4.5,
    distance: "1.5 km",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    type: "In-person",
  },
  {
    id: 2,
    name: "Dr. Emily Corson",
    specialty: "Dermatologist",
    rating: 4.8,
    distance: "2.0 km",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "Video",
  },
  {
    id: 3,
    name: "Dr. Nathaniel Wu",
    specialty: "Cardiologist",
    rating: 4.9,
    distance: "3.1 km",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    type: "Voice",
  },
  {
    id: 4,
    name: "Dr. Sarah Johnson",
    specialty: "Orthopedist",
    rating: 4.7,
    distance: "1.8 km",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    type: "In-person",
  },
  {
    id: 5,
    name: "Dr. Michael Smith",
    specialty: "General Practitioner",
    rating: 4.6,
    distance: "1.2 km",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    type: "Video",
  },
  {
    id: 6,
    name: "Dr. Linda T.",
    specialty: "Gynecologist",
    rating: 4.7,
    distance: "2.5 km",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    type: "In-person",
  },
  {
    id: 7,
    name: "Dr. Annabelle R.",
    specialty: "Endocrinologist",
    rating: 4.4,
    distance: "1.7 km",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    type: "Voice",
  },
  {
    id: 8,
    name: "Dr. Henry Lee",
    specialty: "Ophthalmologist",
    rating: 4.8,
    distance: "3.3 km",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    type: "Video",
  },
  {
    id: 9,
    name: "Dr. Megan Patel",
    specialty: "Psychiatrist",
    rating: 4.6,
    distance: "0.9 km",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    type: "In-person",
  },
];

const DoctorSelection = ({ formData, setFormData, nextStep }) => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    specialty: "",
    type: "",
    location: "",
  });

  const handleSelect = (doctor) => {
    setFormData({ ...formData, doctor: doctor.name });
    nextStep();
  };

  const filteredDoctors = doctorsData.filter((doc) => {
    return (
      (filters.specialty === "" ||
        doc.specialty.toLowerCase().includes(filters.specialty.toLowerCase())) &&
      (filters.type === "" || doc.type === filters.type) &&
      (search === "" ||
        doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="ds-page">
      {/* Sidebar Filters */}
      <aside className="ds-filters">
        <h3 className="ds-filters-title">Filters</h3>

        <label className="ds-label">Specialty</label>
        <input
          type="text"
          placeholder="Specialty"
          className="ds-input"
          value={filters.specialty}
          onChange={(e) =>
            setFilters({ ...filters, specialty: e.target.value })
          }
        />

        <label className="ds-label">Consultation Type</label>
        <div className="ds-radio-group">
          {["In-person", "Video", "Voice"].map((type) => (
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
          <label className="ds-radio-label">
            <input
              type="radio"
              name="consultation"
              value=""
              checked={filters.type === ""}
              onChange={() => setFilters({ ...filters, type: "" })}
            />
            All
          </label>
        </div>

        <label className="ds-label">Location</label>
        <input
          type="text"
          placeholder="Location"
          className="ds-input"
          value={filters.location}
          onChange={(e) =>
            setFilters({ ...filters, location: e.target.value })
          }
        />
      </aside>

      {/* Main Content */}
      <main className="ds-content">
        <h2 className="ds-title">Book an Appointment</h2>

        {/* Search bar */}
        <input
          type="text"
          className="ds-search-bar"
          placeholder="Search specialists, doctors, etc."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Doctors Grid */}
        <div className="ds-grid">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="ds-card">
              <img src={doctor.image} alt={doctor.name} className="ds-img" />
              <h3 className="ds-name">{doctor.name}</h3>
              <p className="ds-specialty">{doctor.specialty}</p>
              <p className="ds-rating">⭐ {doctor.rating}</p>
              <p className="ds-distance">📍 {doctor.distance}</p>
              <button
                className="ds-btn"
                onClick={() => handleSelect(doctor)}
              >
                Book Appointment
              </button>
            </div>
          ))}
          {filteredDoctors.length === 0 && (
            <p className="ds-no-results">No doctors found matching filters</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default DoctorSelection;
