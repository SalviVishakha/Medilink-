import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import signupBg from '../assets/login.jpeg'; // adjust path as needed


const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', // changed from fullName to name
    email: '',
    password: '',
    confirmPassword: '',
    role: 'patient', // changed to lowercase to match backend enum
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { confirmPassword, ...signupData } = formData;
      console.log("Data being sent:", signupData);

      const response = await axios.post("http://localhost:5000/v1/auth/signup", signupData);

      console.log("Signup successful:", response.data);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed: " + (error.response?.data?.message || "Please try again."));
    }
  };

  return (
   <div
  className="w-full max-w-md mx-auto mt-10 p-6 rounded-xl shadow-md"
  style={{
    backgroundImage: `url(${signupBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>

      <h1 className="text-center text-3xl font-bold mb-6" style={{ color: '#151B54' }}>MediLink</h1>
      <h2 className="text-center text-2xl font-semibold  mb-1" style={{ color: '#151B54' }} >Create your account</h2>
      <p className="text-center text-sm mb-4">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Sign in
        </span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <button
          type="submit"
          className="w-full py-2 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"   style={{ backgroundColor: '#151B54' }}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
