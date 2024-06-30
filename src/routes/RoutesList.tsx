import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import ProtectedRoute from "../routes/ProtectedRoute";
import Home from "../pages/home/Home";
import SharedGroup from "../pages/sharedGroup/SharedGroup";
import Profile from "../pages/profile/Profile";
import More from "../pages/more/More";
import Category from "../components/Category/Category";

interface RoutesListProps {}
const RoutesList: React.FC<RoutesListProps> = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/shared-group" element={<SharedGroup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/more" element={<More />} />
        <Route path="/more/category" element={<Category />} />
      </Route>
    </Routes>
  );
};
export default RoutesList;
