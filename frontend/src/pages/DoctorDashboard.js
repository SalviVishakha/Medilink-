// pages/DoctorDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [statusUpdateMsg, setStatusUpdateMsg] = useState('');
  const token = localStorage.getItem("accessToken");

  const statusOptions = ["pending", "confirmed", "completed", "cancelled"];

  useEffect(() => {
    axios.get("/api/appointment/doctor", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setAppointments(res.data.data))
      .catch(err => console.error(err));
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`/api/appointment/${id}`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStatusUpdateMsg("Status updated.");
      setAppointments(prev => prev.map(appt => appt._id === id ? { ...appt, status } : appt));
    } catch (err) {
      console.error(err);
      setStatusUpdateMsg("Failed to update status.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Doctor Dashboard</h2>
      {appointments.map(appt => (
        <div key={appt._id} className="border p-4 rounded mb-4 bg-white shadow-md">
          <p><strong>Patient ID:</strong> {appt.patientId}</p>
          <p><strong>Date:</strong> {new Date(appt.dateTime).toLocaleString()}</p>
          <p><strong>Status:</strong> {appt.status}</p>

          <select
            value={appt.status}
            onChange={(e) => updateStatus(appt._id, e.target.value)}
            className="mt-2 border p-1"
          >
            {statusOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ))}

      {statusUpdateMsg && <p className="text-green-600 mt-4">{statusUpdateMsg}</p>}
    </div>
  );
};

export default DoctorDashboard;
