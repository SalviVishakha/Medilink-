import React from 'react';
import '../pages/Home.css';
import {
  FaXRay,
  FaMicroscope,
  FaStethoscope,
  FaHeartbeat,
  FaVial,
  FaNotesMedical,
  FaUserNurse,
  FaSyringe,
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

const services = [
  {
    icon: <FaXRay className="service-icon" />,
    name: 'X-Ray',
    description: 'Accurate digital imaging to detect fractures and abnormalities.',
  },
  {
    icon: <FaMicroscope className="service-icon" />,
    name: 'CT Scan',
    description: 'Detailed internal images using advanced scanning technology.',
  },
  {
    icon: <FaStethoscope className="service-icon" />,
    name: 'Consultation',
    description: 'Professional medical advice from experienced doctors.',
  },
  {
    icon: <FaHeartbeat className="service-icon" />,
    name: 'Cardiology',
    description: 'Comprehensive heart care and diagnosis by specialists.',
  },
  {
    icon: <FaVial className="service-icon" />,
    name: 'Lab Tests',
    description: 'Fast and accurate laboratory testing services.',
  },
  {
    icon: <FaNotesMedical className="service-icon" />,
    name: 'Medical Reports',
    description: 'Well-organized reports for better understanding and treatment.',
  },
  {
    icon: <FaUserNurse className="service-icon" />,
    name: 'Nursing Care',
    description: 'Compassionate in-home or in-clinic nursing support.',
  },
  {
    icon: <FaSyringe className="service-icon" />,
    name: 'Vaccination',
    description: 'Safe and reliable immunization for all age groups.',
  },
];

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section className="services-section">
        <div className="services-heading">
          <h2>Our Services</h2>
          <p className="services-subheading">Quality care with advanced facilities</p>
          <p className="services-desc">
            At MediLink, we provide a wide range of services to ensure your complete health and wellness.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {service.icon}
              <h3 className="service-name">{service.name}</h3>
              <p className="service-text">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">MediLink</h3>
            <p className="footer-text">
              Committed to providing top-notch healthcare services with compassion and care.
            </p>
          </div>
          <div>
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-subtitle">Contact Us</h4>
            <p>📍 123 MediLink Street, Health City</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ contact@medilink.com</p>
          </div>
          <div>
            <h4 className="footer-subtitle">Follow Us</h4>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} MediLink. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Services;
