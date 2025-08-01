import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Steps from '../components/Steps';
import Specialists from '../components/Specialists';
import Services from '../components/Services';
import doctorImage from '../assets/doctor.jpg';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import './Home.css';

const Home = () => {
  const [authMode, setAuthMode] = useState(null); 
  const navigate = useNavigate(); 

  const closeModal = () => setAuthMode(null);

 const handleBookAppointment = () => {
  const token = localStorage.getItem('accessToken');
  
  // 🛠 Only navigate if token exists and is valid
  if (token && token !== 'undefined' && token !== 'null' && token.trim() !== '') {
    navigate('/book-appointment');
  } else {
    setAuthMode('login'); // Show login modal
  }
};


  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MediLink</div>
        <ul className="nav-links">
          <li onClick={handleBookAppointment} style={{ cursor: 'pointer' }}>Book Appointment</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={() => setAuthMode('login')} style={{ cursor: 'pointer' }}>Login</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Your Health, Our Priority</h1>
            <p className="subtext">
              Seamlessly connect with qualified professionals and receive the best medical care from anywhere.
            </p>
            <p className="subsubtext">
              Join thousands of satisfied patients improving their health with MediLink.
            </p>
            <button onClick={handleBookAppointment} className="cta-button">
              Book Appointment →
            </button>
          </div>
          <div className="hero-image">
            <img src={doctorImage} alt="Doctors" />
          </div>
        </div>
      </div>

      {/* Steps and Services Sections */}
      <Steps />
      <Specialists />
      <Services />

      {/* Login or Signup Modal */}
      {authMode && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="close-button">×</button>
            {authMode === 'login' && <Login onSuccess={closeModal} />}
            {authMode === 'signup' && <Signup onSuccess={closeModal} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
