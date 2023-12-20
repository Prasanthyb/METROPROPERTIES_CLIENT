import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import BackToTopButton from './BackToTopButton';
import './cssFiles/styleHome.css';

const Home = () => {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div style={{ position: 'relative' }}>
        {/* Header Image */}
        <img style={{ width: '100%', height: "30rem", borderRadius: '8px', marginBottom: '20px' }} src="/metro.png" alt="" />

        {/* Main Heading */}
        <div>
          <p className="responsive-heading">
            Metro Property <br />
            Management Services
          </p>
        </div>

        {/* Sub Heading */}
        <div>
          <p className="second-paragraph">
            Lorem ipsum dolor sit amet consectetur. Nunc justo purus sit
            urna vulputate libero cras. Adipiscing sed egestas risus blandit
          </p>
        </div>

        {/* Buttons for Property Listing and Rental Search */}
        <div style={{ position: 'absolute', top: '70%', left: '30%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'row' }}>
          <Link to="/search">
            <button style={{ padding: '10px 30px', fontSize: '22px', margin: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: 'red', color: '#fff', fontWeight: 'bold' }}>
              List a Property
            </button>
          </Link>
          <Link to="/view">
            <button style={{ padding: '10px 30px', fontSize: '22px', margin: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: 'red', color: '#fff', fontWeight: 'bold' }}>
              Find a Rental
            </button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div style={{ margin: '20px' }}>
        <img style={{ width: '100%', borderRadius: '8px' }} src="/About.png" alt="" />
      </div>

      {/* Awards Section */}
      <div style={{ margin: '20px' }}>
        <img style={{ width: '100%', borderRadius: '8px' }} src="/Awards.png" alt="" />
      </div>

      {/* News Section */}
      <div style={{ margin: '20px' }}>
        <img style={{ width: '100%', borderRadius: '8px' }} src="/News.png" alt="" />
      </div>
      <div className="footerb">
          {/* Render BackToTopButton component */}
          <BackToTopButton />
        </div>
      {/* Footer Image */}
      <div className="footerimage">
        <img src="/footer.png" alt="" />
      </div>
    </>
  );
}

export default Home;
