// pages/Dashboard.js
import React from 'react';

const Dashboard = () => {
  const name = localStorage.getItem("userName") || "User";
  const role = localStorage.getItem("userRole") || "Patient";

  const handleBookAppointment = () => {
    window.location.href = "/book-appointment";
  };

  const handleViewAppointments = () => {
    window.location.href = "/doctor-dashboard";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-800 mb-2">Welcome, {name}!</h1>
        <p className="text-gray-600 mb-4">You are logged in as <strong>{role}</strong>.</p>

        <div className="space-y-3">
          {role.toLowerCase() === "patient" && (
            <button
              onClick={handleBookAppointment}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition"
            >
              Book Appointment
            </button>
          )}

          {role.toLowerCase() === "doctor" && (
            <button
              onClick={handleViewAppointments}
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition"
            >
              View Appointments
            </button>
          )}

          <button
            onClick={() => window.location.href = "/verify-email"}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
          >
            Verify Email
          </button>

          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
