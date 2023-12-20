import React from "react";

import  './cssFiles/styleNavBar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar"
    style={{ backgroundColor: 'white' }}
    >
    <img className="images" src="/logo.png" alt="" />
    <ul className="nav_links" 
    style={{ color: 'black', 
    fontSize: '25px', fontWeight: 'bold', 
    }}>
        <li><Link to="/">Home</Link></li>
        <li>Property Owners</li>
        <li>Tenants</li>
        <li>News</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;