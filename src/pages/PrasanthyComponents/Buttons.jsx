import React from "react";
import data from "./Projects.json";
import Styles from "./styleButton.module.css";
import ButtonToggle from "./ButtonToggle";

// -------------------------- Define the Buttons component------------------------------//

const Buttons = ({ selectedCategory, selectCategory, setList }) => (
  <div>
    <div className={Styles.projectbar}>
      <p>
        <h4>PROJECTS</h4>
      </p>
      <p>
        <h5>
          Welcome to the Project Library. You can use the filters on the left to
          help you search for specific projects.
        </h5>
      </p>
    </div>

    {/* ------------------------------Sorting based on level--------------------------------------- */}

    <div className={Styles.searchBar}>
      <ButtonToggle
        options={data.ButtonsList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />

      {/* -----------------------------handle the "Show" buttons------------------------------- */}

      <div className={Styles.buttoncontainer}>
        <div className={Styles.show}>SHOW</div>
        <button
          type="submit"
          className={Styles.sort}
          onClick={() => setList(data.ProjectList.slice(10))}>
          5
        </button>
        <button
          type="submit"
          className={Styles.sort}
          onClick={() => setList(data.ProjectList.slice(5))}>
          10
        </button>
        <button
          type="submit"
          className={Styles.sort}
          onClick={() => setList(data.ProjectList)}>
          All
        </button>
      </div>
    </div>
  </div>
);

export default Buttons;
