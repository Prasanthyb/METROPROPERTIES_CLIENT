import React from "react";
import "./styleCard.css";

//---------------- Define a functional component called 'Card' that takes a 'list' prop-------------------------

const Card = ({ list }) => (

  //------------------- Use a wrapping <div> element with CSS grid styling----------------------------------------

  <div
    className="list-wrap"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 350px)",
      gridGap: "2rem",
      marginLeft: "100px",
    }}>
    {list &&
      list.map((val) => (
        
        //--------------------- Render each item in the 'list' as a 'listItem-wrap' <div> element-----------------------------

        <div className="listItem-wrap" key={val.project_id}>
          <figure>
            <img src={val.project_pic} alt="" />
          </figure>
          <div className="card-data">
            <header>
              <h4>{val.name}</h4>
            </header>
            <h6 className="space">
              {val.level} | {val.activity_type}
            </h6>
          </div>
        </div>
      ))}
  </div>
);

//--------------------------- Export the 'Card' component as the default export of this module-------------------------

export default Card;
