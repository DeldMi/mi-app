import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import ProtectedPage from '../pages/ProtectedPage';
import PageNotFound from '../pages/PageNotFound';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from '../context/AuthContext';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/protected/:uuid" element={<ProtectedPage />} />

            <Route path="/dashboard/:uuid" element={<Dashboard />} />
            <Route path="/settings/:uuid" element={<Settings />} />

          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
