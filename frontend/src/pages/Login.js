import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import signupBg from '../assets/login.jpeg';

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    role: 'patient',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/v1/auth/login", credentials);
      console.log("Login response:", res.data);
    
       const { accessToken, name, email, role } = res.data.data;

      // Store token and user details
      localStorage.setItem("accessToken", res.data.data.accessToken);
       localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", res.data.data.email);
      localStorage.setItem("userRole", res.data.data.role);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "Login failed");
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

      <h1 className="text-center text-3xl font-bold mb-6" style={{ color: '#151B54' }}>
  MediLink
</h1>


      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={credentials.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <select
          name="role"
          value={credentials.role}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        >
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
     <button
  type="submit"
  className="w-full py-2 rounded-md text-lg font-medium hover:opacity-90 transition text-white"
  style={{ backgroundColor: '#151B54' }}
>
  Login
</button>

      </form>

      <p className="mt-4 text-center text-sm">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600 font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};


export default Login;
