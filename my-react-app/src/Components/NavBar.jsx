import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h3>Trend</h3>
        <h4>campus</h4>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#">The story</a>
        </li>
        <li>
          <a href="#">Flavours</a>
        </li>
        <li>
          <a href="#">Upcoming</a>
        </li>
        <li>
          <a href="#">On Demand</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
      </ul>
      <button className="nav-btn">Contact Us</button>
      <div className="endlogo">
        <div className="trend-text">
          <h3>TREND</h3>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
