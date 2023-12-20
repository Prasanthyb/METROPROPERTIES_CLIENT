import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './cssFiles/styleThank.css';

const Thank = () => {
  // Get the current location using react-router-dom
  const location = useLocation();

  // Extract the user name from the location state or default to an empty string
  const userName = location.state?.user_name || '';

  return (
    <div className="container">
      {/* Navigation Bar */}
      <Navbar className="navbar" />

      <div className="content">
        {/* Thank You Message */}
        <img src="/thank.png" alt="" />
        <p style={{ fontSize: "50px", color: "green" }}>
          Thank You!
          <span style={{ fontSize: "40px", color: "blue", fontStyle: "italic" }}>
            {' '}
            {userName}
          </span>
        </p>

        {/* Confirmation Email Message */}
        <p style={{ fontSize: "30px", textDecoration: "underline", color: "brown", margin: "30px auto" }}>
          A confirmation email has been sent to you.
        </p>

        {/* Viewing Appointment Confirmation */}
        <p style={{ fontSize: '30px', textAlign: 'center', whiteSpace: 'pre-line' }}>
          We're thrilled to confirm your upcoming viewing appointment.<br />
          Your interest is greatly appreciated,<br />
          and we look forward to showcasing the property to you.
        </p>

        {/* Continue Search Button */}
        <Link to="/search">
          <button style={{ fontSize: "40px", backgroundColor: "skyblue", color: "black", margin: "30px auto" }}>
            Continue Search
          </button>
        </Link>

        {/* Footer Image */}
        <div className="footerimage">
          <img src="/footer.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Thank;
