import React from 'react';
import { FaUserPlus, FaUserMd, FaCalendarCheck } from 'react-icons/fa';
import '../pages/Home.css';
  // make sure this path is correct

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
    <section className="steps-section">
      <div className="steps-text">
      <h2 className="text-4xl font-bold text-center  mb-10">How It Works</h2>
      </div>
      <div className="steps-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
           <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition hover:shadow-lg hover:scale-105 duration-300 h-60 flex flex-col justify-center items-center">

              {step.icon}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
