import { useNavigate } from "react-router-dom";
import "./UpcomingAppointment.css";
import {  IoCalendarOutline } from "react-icons/io5";

const UpcomingAppointment = () => {
    const navigate = useNavigate();
  return (
    <div className="dash-appointment">
      <h3 className="dash-card-title"><span><IoCalendarOutline/></span>Upcoming Appointment</h3>
      <div className="dash-appointment-details">No appointment</div>
      <button className="dash-book-btn" onClick={()=>{
        navigate('/book-appointment')
      }}>Book Appointment</button>
    </div>
  );
};

export default UpcomingAppointment;
