import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>
        get<span>linked</span>
      </p>
      <div className="navlinks">
        <ul>
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
