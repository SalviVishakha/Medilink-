// src/components/EmailVerification.js
import React, { useState } from 'react';
import axios from 'axios';

const EmailVerification = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const requestOtp = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming token is stored after login
      await axios.get('http://localhost:5000/api/auth/email-verify/request', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('OTP sent to your email!');
    } catch (error) {
      setMessage('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/auth/email-verify/submit',
        { otp },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Email verified successfully!');
    } catch (error) {
      setMessage('Invalid OTP or error occurred');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Email Verification</h2>
      <button
        onClick={requestOtp}
        className="w-full mb-3 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
      >
        Send OTP
      </button>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full mb-3 px-4 py-2 border rounded"
      />
      <button
        onClick={verifyOtp}
        className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-500"
      >
        Verify
      </button>
      {message && <p className="mt-3 text-center text-sm">{message}</p>}
    </div>
  );
};

export default EmailVerification;
