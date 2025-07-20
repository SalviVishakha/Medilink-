import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-[#5d2421]">MediLink</div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-[#5d2421] cursor-pointer">Home</li>
        <li className="hover:text-[#5d2421] cursor-pointer">About</li>
        <li className="hover:text-[#5d2421] cursor-pointer">Contact</li>
        <li className="hover:text-[#5d2421] cursor-pointer">Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
