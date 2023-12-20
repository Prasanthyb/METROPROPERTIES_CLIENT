import React from "react";
import "./cssFiles/styleProps.module.css";

// Card component receives 'item' and 'handleClick' as props
const Card = ({ item, handleClick }) => {
  // Destructuring properties from 'item'
  const { property_pic, icon1, number1, icon2, number2, icon3, number3 } = item;

  // Event handler for container click
  const handleContainerClick = () => {
    handleClick(item);
  };

  return (
    <div className="cards" onClick={handleContainerClick}>
      {/* Image box */}
      <div className="image-box">
        <figure>
          {/* Property image */}
          <img
            src={property_pic}
            alt=""
            style={{
              width: "300px",
              height: "250px",
              borderRadius: "10px",
            }}
          />
        </figure>
      </div>

      {/* Details container */}
      <div
        className="details"
        style={{
          display: "flex", 
          flexDirection: "row",
          color: "black",
          fontWeight: "bold",
          marginLeft: "50px",
        }}
      >
        {/* First detail */}
        <div>
          <img src={icon1} alt="" />
          {number1}
        </div>

        {/* Second detail */}
        <div>
          <img src={icon2} alt="" />
          {number2}
        </div>

        {/* Third detail */}
        <div>
          <img src={icon3} alt="" />
          {number3}
        </div>
      </div>
    </div>
  );
};

export default Card;
