import React from 'react';
import { FaUserPlus, FaUserMd, FaCalendarCheck } from 'react-icons/fa';

const Steps = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-3xl text-blue-700 mb-2" />,
      title: 'Sign Up',
      description: 'Create your MediLink account in just a few clicks.',
    },
    {
      icon: <FaUserMd className="text-3xl text-blue-700 mb-2" />,
      title: 'Choose a Doctor',
      description: 'Browse and select from verified medical professionals.',
    },
    {
      icon: <FaCalendarCheck className="text-3xl text-blue-700 mb-2" />,
      title: 'Book Appointment',
      description: 'Pick a time that works for you and get treatment online or offline.',
    },
  ];

  return (
    <section className="py-16 bg-white">
  <h2 className="text-4xl font-bold text-center text-[#151B54] mb-14">How It Works</h2>
  
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
    {steps.map((step, index) => (
      <div
        key={index}
        className="bg-gray-100 p-8 rounded-2xl shadow-lg text-center transition transform hover:scale-105"
      >
        <div className="text-5xl text-blue-700 mb-4">{step.icon}</div>
        <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
        <p className="text-gray-600 text-lg">{step.description}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Steps;
