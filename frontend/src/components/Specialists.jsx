import React from 'react';
import './Specialists.css';

const doctors = [
  {
    name: 'Dr. Neha Sharma',
    specialization: 'Cardiologist',
    image: require('../assets/doctor2.jpg'),
    description: 'Expert in heart health, preventive care, and cardiovascular treatment.',
  },
  {
    name: 'Dr. Amit Verma',
    specialization: 'Neurologist',
    image: require('../assets/doctor1.jpg'),
    description: 'Specialist in treating brain and nervous system disorders.',
  },
  {
    name: 'Dr. Ritu Kapoor',
    specialization: 'Dermatologist',
    image: require('../assets/doctor4.jpg'),
    description: 'Focused on skin, hair, and nail disorders and cosmetic treatments.',
  },
  {
    name: 'Dr. Rajesh Singh',
    specialization: 'Orthopedic Surgeon',
    image: require('../assets/doctor3.jpg'),
    description: 'Expert in bone and joint surgeries with 15+ years of experience.',
  },
  {
    name: 'Dr. Kiran Kapoor',
    specialization: 'Pediatrician',
    image: require('../assets/doctor5.jpg'),
    description: 'Dedicated to children’s health, growth, and vaccinations.',
  },
  {
    name: 'Dr. Vishal Mehta',
    specialization: 'General Physician',
    image: require('../assets/doctor6.jpg'),
    description: 'Experienced in diagnosing and managing common health conditions.',
  },
//   {
//     name: 'Dr. Sana Sheikh',
//     specialization: 'Endocrinologist',
//     image: require('../assets/doctor7.jpg'),
//     description: 'Expert in hormone-related disorders like diabetes and thyroid problems.',
//   },
//   {
//     name: 'Dr. Aditya Rao',
//     specialization: 'ENT Specialist',
//     image: require('../assets/doctor8.jpg'),
//     description: 'Specialist in ear, nose, and throat disorders and surgeries.',
//   },
];

const Specialists = () => {
  return (
    <section className="specialists-section">
      <h2 className="section-title">Our Specialists</h2>
      <div className="scroll-wrapper">
        <div className="scroll-content">
          {[...doctors, ...doctors].map((doc, index) => (
            <div className="doctor-card" key={index}>
              <img src={doc.image} alt={doc.name} />
              <h3>{doc.name}</h3>
              <p>{doc.specialization}</p>
              <p className="description">{doc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialists;
