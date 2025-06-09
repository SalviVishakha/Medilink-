import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import api from '../services/api';

export default function ProtectedRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Verify token with backend
        await api.get('/v1/user/profile');
      } catch (error) {
        // If token is invalid/expired
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      checkAuth();
    }
  }, [navigate]);

  // Show loading state while verifying token
  if (!localStorage.getItem('token')) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Render child routes if authenticated
  return <Outlet />;
}