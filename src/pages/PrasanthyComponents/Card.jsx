import React from "react";
import "./cssFiles/styleProps.module.css";

const Card = ({ item, handleClick }) => {
  const { property_pic, icon1, number1, icon2, number2, icon3, number3 } = item;

  const handleContainerClick = () => {
    handleClick(item);
  };

  return (
    <div className="cards" onClick={handleContainerClick}>
      <div className="image-box">
        <figure>
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
      <div
        className="details"
        style={{
          display: "flex", // Add this line to enable flex display
          flexDirection: "row", // Set the direction to row (horizontal)
          color: "black",
          fontWeight: "bold",
          marginLeft: "50px",
        }}
      >
        <div>
          <img src={icon1} alt="" />
          {number1}
        </div>
        <div>
          <img src={icon2} alt="" />
          {number2}
        </div>
        <div>
        <img src={icon3} alt="" />
          {number3}
        </div>
      </div>
    </div>
  );
};

export default Card;
