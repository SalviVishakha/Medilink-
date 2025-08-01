import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EmailVerification from './components/EmailVerification';
import DoctorDashboard from './pages/DoctorDashboard';
import BookAppointment from './pages/BookAppointment'; 
import Home from './pages/Home';

function App() {
 const [isAuthenticated, setIsAuthenticated] = useState(() => {
  const token = localStorage.getItem('accessToken');
  return token && token !== 'undefined';
});


  useEffect(() => {
  const handleStorageChange = () => {
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(token && token !== 'undefined');
  };

  window.addEventListener('storage', handleStorageChange);
  return () => window.removeEventListener('storage', handleStorageChange);
}, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerification />} />

        <Route
          path="/doctor-dashboard"
          element={isAuthenticated ? <DoctorDashboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        
       
        <Route
          path="/book-appointment"
          element={isAuthenticated ? <BookAppointment /> : <Navigate to="/login" replace />}
        />

        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div className="text-center p-6">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
