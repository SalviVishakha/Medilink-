import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        console.log("Token from localStorage:", token);

        if (!token) {
          setMessage("No access token found, please login.");
          return;
        }

        const res = await axios.get('http://localhost:5000/v1/user/doctors', {
          headers: {
            Authorization: token, // raw token, no "Bearer "
          },
        });

        console.log("Doctors API response:", res.data);
        setDoctors(res.data.data);
        setMessage('');
      } catch (err) {
        console.error('Error fetching doctors:', err);
        setMessage('Failed to fetch doctors. Please check login or token.');
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      console.log("Token used in fetchDoctors:", token);
      if (!token) {
        setMessage("No access token found, please login.");
        return;
      }
      const res = await axios.post(
        'http://localhost:5000/v1/appointment',
        { doctorId: selectedDoctor, dateTime },
        { headers: { Authorization: token } } // raw token
      );
      setMessage('Appointment booked successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Failed to book appointment.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Book Appointment</h2>

        <label className="block mb-2">Select Doctor:</label>
        <select
          className="w-full mb-4 p-2 border"
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          required
        >
          <option value="">Select a doctor</option>
          {doctors.map((doc) => (
            <option key={doc._id} value={doc._id}>
              {doc.name}
            </option>
          ))}
        </select>

        <label className="block mb-2">Date & Time:</label>
        <input
          type="datetime-local"
          className="w-full mb-4 p-2 border"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Book
        </button>
        {message && <p className="mt-4 text-center text-red-600">{message}</p>}
      </form>
    </div>
  );
};

export default BookAppointment;
