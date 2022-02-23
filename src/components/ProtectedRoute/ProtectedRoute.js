import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function ProtectedRoute({ component: Component }) {
  const user = useSelector((state) => state.user);

  return (
    user.username ? (
      <Component />
    ) : (
      <Navigate to="/login" />
    )
  )
}

export default ProtectedRoute;