import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Properties from "./Properties";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative' }}>
        <img style={{ width: '100%',height:"30rem", borderRadius: '8px', marginBottom: '20px' }} src="/metro.png" alt="" />

        <p style={{
          position: 'absolute',
          top: '10%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          padding: '10px 30px',
          fontSize: '52px',
          marginBottom: '10px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',

          color: 'black',
          fontWeight: 'bold'
        }}>
          Metro Property<br />
          Management Services
        </p>
        <p style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          padding: '10px 30px',
          fontSize: '22px',
          marginBottom: '10px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',

          color: 'black',
          fontWeight: 'bold'
        }}>
          Lorem ipsum dolor sit amet consectetur.Nunc justo purus sit<br />
          urna vulputate libero cras.Adipiscing sed egestas risus blandit
        </p>
        
        <div style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'row' }}>
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

      <div style={{ margin: '20px' }}>
          <img style={{ width: '100%', borderRadius: '8px' }} src="/About.png" alt="" />
        </div>

        <div style={{ margin: '20px' }}>
          <img style={{ width: '100%', borderRadius: '8px' }} src="/Awards.png" alt="" />
        </div>

        <div style={{ margin: '20px' }}>
          <img style={{ width: '100%', borderRadius: '8px' }} src="/News.png" alt="" />
        </div>
      
      <img src="/footer.png" alt="" />
    </>
  );
}

export default Home;