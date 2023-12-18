import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './styleThank.css'; // Replace with your actual CSS file name

const Thank = () => {
  const location = useLocation();
  const userName = location.state?.user_name || '';

  return (
    <div className="container">
      <Navbar className="navbar" />
      <div className="content">
        <p style={{ fontSize: "50px", color: "green" }}>
          Thank You!
          <span style={{ fontSize: "40px", color: "blue", fontStyle: "italic" }}>
            {' '}
            {userName}
          </span>
        </p>
        <p style={{ fontSize: "30px", textDecoration: "underline", 
        color: "brown", margin: "30px auto" }}>
  A confirmation email has been sent to you.
</p>

<p style={{ fontSize: '30px', textAlign: 'center', whiteSpace: 'pre-line' }}>
  We're thrilled to confirm your upcoming viewing appointment.<br />
  Your interest is greatly appreciated,<br />
  and we look forward to showcasing the property to you.
</p>



        <Link to="/view">
        <button 
  style={{ fontSize: "40px", backgroundColor: "skyblue", color: "black",margin: "30px auto" }}
>
  Continue Search
</button>

        </Link>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default Thank;
