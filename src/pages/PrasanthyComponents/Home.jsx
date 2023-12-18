import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Properties from "./Properties"

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: '20px', position: 'relative' }}>
          <img style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} src="/image10.png" alt="" />

          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'row' }}>
            
              <button style={{ padding: '10px 30px', fontSize: '22px', margin: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', 
              backgroundColor: 'red', color: '#fff', fontWeight: 'bold' }}>
                List a Property
              </button>
          

            <Link to="/view"> 
              <button style={{ padding: '10px 30px', fontSize: '22px', margin: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer',
              backgroundColor: 'red', color: '#fff', fontWeight: 'bold' }}>
                Find a Rental
              </button>
            </Link>
          </div>
        </div>

        <div style={{ margin: '20px' }}>
          <img style={{ width: '100%', borderRadius: '8px' }} src="/About.png" alt="" />
        </div>

        <div style={{ margin: '20px' }}>
          <img style={{ width: '100%', borderRadius: '8px' }} src="/Awards.png" alt="" />
        </div>

        <div style={{ margin: '20px' }}>
          <img style={{ width: '100%', borderRadius: '8px' }} src="/News.png" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
