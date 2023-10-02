import React from 'react';
import './styleBackToTopButton.css';

import { NavLink } from 'react-router-dom';

const BackToTopButton = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="button-container" style={{ display: 'flex', justifyContent: 'space-between', }}>
        <div className="outer" style={{
          border: '3px solid red',
          padding: '10px',
          height: '35px',
          display: 'flex',
          alignItems: 'center',          
          marginLeft:'160px'
          
          
          
        }}>
           <button className="button1" onClick={goToBtn}>
            BACK TO TOP
          </button>
        
          </div>
        <div className="outer" style={{
          border: '3px solid red',
          padding: '10px',
          height: '35px',
          display: 'flex',
          alignItems: 'center',  
          marginLeft:'20px'
         
        }}>
        <NavLink to="/dashboard">
        <button className="button2" >GO TO DASHBOARD</button>
          </NavLink>
        </div>
      </div>
    </div>
   
  );
};

export default BackToTopButton;




