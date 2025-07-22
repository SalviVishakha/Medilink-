import React from 'react';
import doctorImage from '../assets/doctor.jpg';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import external CSS

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MediLink</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={() => navigate('/login')}>Login</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          {/* Text Content */}
          <div className="hero-text">
            <h1>Your Health, Our Priority</h1>
            <p className="subtext">
              Seamlessly connect with qualified professionals and receive the best medical care from anywhere.
            </p>
            <p className="subsubtext">
              Join thousands of satisfied patients improving their health with MediLink.
            </p>
            <button onClick={() => navigate('/signup')} className="cta-button">
              Book Appointment →
            </button>
          </div>

          {/* Image Content */}
          <div className="hero-image">
            <img src={doctorImage} alt="Doctors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
