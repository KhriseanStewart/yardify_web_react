// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../authcontext/index';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // If not logged in, redirect to login page
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;