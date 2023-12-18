import React from "react";
import data from "./Properties.json";
import Styles from "./cssFiles/styleButton.module.css";

// -------------------------- Define the Buttons component ------------------------------//

const Buttons = ({ selectedCategory, selectCategory, setList }) => (
  <div>
    <div className={Styles.projectbar}>
      <p>
        <h4>FILTER</h4>
      </p>
      <p></p>
    </div>

    {/* ------------------------------ Sorting based on level --------------------------------------- */}
    <div>
     
      <div className={Styles.searchBar}>
      <h5>SELECT YOUR DESIRED PRICE RANGE</h5>
        <select
          value={selectedCategory}
          onChange={(e) => selectCategory(e, e.target.value)}
        >
          <option value="">Select</option>
          {data.ButtonsList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

export default Buttons;
