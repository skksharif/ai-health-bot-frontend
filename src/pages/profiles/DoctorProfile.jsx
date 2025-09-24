import { Star } from "lucide-react";
import { FaUserMd, FaClipboardList, FaMapMarkerAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import "./DoctorProfile.css";

// Reusable star rating component
function RatingStars({ rating, outOf = 5 }) {
  return (
    <div className="doctor-rating-stars">
      {[...Array(outOf)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < Math.round(rating) ? "doctor-star filled" : "doctor-star"}
        />
      ))}
      <span className="doctor-rating-value">({rating.toFixed(1)})</span>
    </div>
  );
}

export default function DoctorProfile() {
  return (
    <div className="doctor-wrapper">
      {/* Header Section */}
      <div className="doctor-header">
        <div className="doctor-header-left">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Doctor"
            className="doctor-avatar"
          />
          <div className="doctor-header-details">
            <h2 className="doctor-name">Dr. Joseph McCall</h2>
            <p className="doctor-specialty">Pediatrician</p>
            <RatingStars rating={4.5} />
          </div>
        </div>
        <button className="doctor-book-btn">Book Appointment</button>
      </div>

      {/* About + Qualifications */}
      <div className="doctor-main-info">
        <div className="doctor-card doctor-about-card">
          <h3 className="doctor-card-title">
            <FaUserMd className="doctor-icon" /> About Dr. McCall
          </h3>
          <p className="doctor-about-text">
            A dedicated pediatrician, provides exceptional care for adolescents.
            With over a decade of experience, she specializes in vaccinations,
            adolescent health, and well-child visits. Earned her medical degree
            from Galador University and completed her residency at St. Olivine
            Hospital.
          </p>
          <h4 className="doctor-subtitle">Languages Spoken</h4>
          <ul className="doctor-list">
            <li>English</li>
            <li>Spanish</li>
          </ul>
          <h4 className="doctor-subtitle">Consultation Mode</h4>
          <ul className="doctor-list">
            <li>In-person</li>
            <li>Online</li>
          </ul>
        </div>

        <div className="doctor-card doctor-qualification-card">
          <h3 className="doctor-card-title">
            <FaClipboardList className="doctor-icon" /> Qualifications
          </h3>
          <ul className="doctor-list">
            <li>Medical Degree from Galador University</li>
            <li>Pediatric Residency at St. Olivine Hospital</li>
            <li>Board Certified Pediatrician</li>
          </ul>
          <h4 className="doctor-subtitle">Certifications</h4>
          <ul className="doctor-list">
            <li>Advanced Cardiac Life Support</li>
            <li>Pediatric Advanced Life Support</li>
            <li>Pediatric Asthma Care</li>
          </ul>
          <h4 className="doctor-subtitle">Services Offered</h4>
          <ul className="doctor-list">
            <li>Well-child visits</li>
            <li>Vaccinations</li>
            <li>Adolescent health</li>
          </ul>
        </div>
      </div>

      {/* Reviews + Location */}
      <div className="doctor-extra-info">
        <div className="doctor-card doctor-review-card">
          <h3 className="doctor-card-title">
            <MdReviews className="doctor-icon" /> Patient Review & Ratings
          </h3>
          <div className="doctor-review">
            <p>
              <strong>Alice Smith</strong> — Exceptional care and a great
              listener.
            </p>
            <RatingStars rating={4.8} />
          </div>
          <div className="doctor-review">
            <p>
              <strong>John Smith</strong> — Clear explanations and a helpful
              plan.
            </p>
            <RatingStars rating={5.0} />
          </div>
          <div className="doctor-review">
            <p>
              <strong>Emily Johnson</strong> — Caring, patient, and very
              understanding.
            </p>
            <RatingStars rating={4.7} />
          </div>
          <div className="doctor-review">
            <p>
              <strong>Michael Brown</strong> — Worth the wait for great care.
            </p>
            <RatingStars rating={4.2} />
          </div>
        </div>

        <div className="doctor-card doctor-location-card">
          <h3 className="doctor-card-title">
            <FaMapMarkerAlt className="doctor-icon" /> Location and Contacts
          </h3>
          <img
            src="/location.png"
            alt="Map"
            className="doctor-map"
          />
          <p className="doctor-location"><strong>Address:</strong> 789 Willow Creek Rd, Cornucopia, NV 89409</p>
          <p className="doctor-time"><strong>Available time:</strong> Mon-Fri 9 AM - 6 PM</p>
          <p className="doctor-offtime"><strong>Off time:</strong> Saturday & Sunday</p>
          <p className="doctor-phone"><strong>Phone:</strong> (775) 555-0199</p>
        </div>
      </div>
    </div>
  );
}
