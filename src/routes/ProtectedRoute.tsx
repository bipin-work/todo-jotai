import React from "react";
import { useAuth } from "../authentication/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Layout /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
