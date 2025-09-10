import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Chat from "./pages/chat/Chat";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AppointmentBooking from "./pages/user/appointments/AppointmentBooking";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Dashboard from "./pages/user/dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/chat-with-ai" element={<Chat />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home/*" element={<Dashboard/>}/>
          <Route path="/book-appointment" element={<AppointmentBooking/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
