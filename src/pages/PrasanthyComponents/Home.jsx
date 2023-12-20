import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import './cssFiles/styleHome.css'; 


const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative' }}>
        <img style={{ width: '100%',height:"30rem", borderRadius: '8px', marginBottom: '20px' }} src="/metro.png" alt="" />
<div>

        <p className="responsive-heading">
  Metro Property <br/>
  Management Services
</p>
</div>
<div >
<p className="second-paragraph">
  Lorem ipsum dolor sit amet consectetur. Nunc justo purus sit
  urna vulputate libero cras. Adipiscing sed egestas risus blandit
</p>
</div>
        
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