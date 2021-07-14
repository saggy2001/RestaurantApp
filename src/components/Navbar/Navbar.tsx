import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <h1 className="nav-title">Zayka</h1>
      <div className="avatar-container">
        <img src="./images/img_avatar.png" alt="Avatar" className="avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
