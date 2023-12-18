import React from "react";
import { useNavigate } from "react-router-dom";
import classes from './cssFiles/styleNavBar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
    <img className={classes.image} src="/logo.png" alt="" />
      <ul className={classes.nav_links}>
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