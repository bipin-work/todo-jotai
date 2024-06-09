import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <footer>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/shared-group">Group</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </footer>
  );
};
export default NavigationBar;
