import React from "react";
import "./cssFiles/styleProps.module.css";

const Card = ({ item, handleClick }) => {
  const { property_pic,name,level,bedroom} = item;

  return (
    <div className="cards" >
      

      <div className="image-box">
      <figure>      
      <img
  src={property_pic}  
  alt=""              
  style={{
    width: '300px',    
    height: '250px',   
    borderRadius: '10px',  
  }}
/>
</figure>

          </div>    
          <div className="details" 
          style={{ color: "black", fontWeight: "bold", marginLeft: "50px" }}>
         <p> {name} </p>
         <p>{level}|{bedroom}</p>
        
         <button 
  onClick={() => handleClick(item)} 
  style={{ backgroundColor: "black", color: "white", marginBottom: "15px" }}>
  BOOK A VIEW
</button>


          </div>      
     
    </div>
  );
};

export default Card;
