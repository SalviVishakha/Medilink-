import React from 'react';
import doctorImage from '../assets/doctor.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#191970] flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white fixed top-0 left-0 w-full z-10">
        <div className="text-[#5d2421] text-3xl font-extrabold tracking-wide">MediLink</div>
        <ul className="flex space-x-8 text-gray-800 font-medium text-lg">
          <li className="hover:text-[#5d2421] transition duration-200 cursor-pointer">Home</li>
          <li className="hover:text-[#5d2421] transition duration-200 cursor-pointer">About</li>
          <li className="hover:text-[#5d2421] transition duration-200 cursor-pointer">Contact</li>
          <li
            className="hover:text-[#5d2421] transition duration-200 cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Login
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex justify-center items-center flex-1 mt-28 px-6 md:px-12">
        <div className="bg-blue-100 rounded-3xl shadow-2xl px-10 py-14 flex flex-col md:flex-row items-center w-full max-w-7xl">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#151B54] mb-6 leading-tight">
              Your Health, Our Priority
            </h1>
            <p className="text-lg md:text-xl text-[#151B54] mb-4 max-w-md">
              Seamlessly connect with qualified professionals and receive the best medical care from anywhere.
            </p>
            <p className="text-base text-[#151B54] mb-8 max-w-md">
              Join thousands of satisfied patients improving their health with MediLink.
            </p>
            <button
              onClick={() => navigate('/signup')}
              className="text-black text-lg px-8 py-3 rounded-full font-semibold shadow-md  transition duration-300"
            >
            Book Appointment
            </button>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={doctorImage}
              alt="Doctors"
              className="w-[360px] md:w-[440px] h-auto object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
