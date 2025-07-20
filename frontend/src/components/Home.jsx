import React from 'react';
import doctorImage from '../assets/doctor.jpg'; // Add your image in assets folder

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fff] flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
     <div className="text-darkblue text-2xl font-bold">MediLink</div>

        <ul className="flex space-x-6 text-gray-800 font-bold">
  <li className="hover:text-darkblue cursor-pointer">Home</li>
  <li className="hover:text-darkblue cursor-pointer">About</li>
  <li className="hover:text-darkblue cursor-pointer">Contact</li>
  <li className="hover:text-darkblue cursor-pointer">Login</li>
</ul>
      </nav>

      {/* Body Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-[#e1bfb0] flex-1">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5d2421] mb-4">
            Your Health,<br /> Our Priority
          </h1>
          <p className="text-lg text-[#5d2421]">
            Book appointments easily with trusted doctors at MediLink.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={doctorImage}
            alt="Doctor"
            className="w-80 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
