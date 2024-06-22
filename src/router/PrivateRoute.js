import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Caminho ajustado

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
