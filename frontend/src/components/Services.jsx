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
    <section className="services-section relative py-16 px-4 bg-cover bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-[#151B54] mb-2">Our Services</h2>
        <p className="text-lg text-[#5d2421] font-medium mb-2">Quality care with advanced facilities</p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At MediLink, we provide a wide range of services to ensure your complete health and wellness.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            {service.icon}
            <h3 className="mt-4 service-name">{service.name}</h3>
            <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
