import React from "react";
import Styles from "./cssFiles/styleFilterSection.module.css";
import FilterCommon from "./FilterCommon";

const FilterSection = ({
  // Projects for PROPERTY TYPE with respective changeChecked function
  projectsSM,
  changeCheckedSM,
  // Projects for BEDROOM with respective changeChecked function
  projectsYL,
  changeCheckedYL,
  // Projects for BATHROOM with respective changeChecked function
  projectsS,
  changeCheckedS,
  // Projects for PET FRIENDLY with respective changeChecked function
  projects,
  changeChecked,
}) => (
  <div className={Styles.filter}>
    <div className={Styles.filter1}>

      {/* PROPERTY TYPE Filter */}
      <div className={Styles.inputgroup}>
        <p className={Styles.label}>PROPERTY TYPE</p>
        <div className={Styles.checkboxGrid}>
          {projectsSM.map((project) => (
            <FilterCommon
              key={project.id}
              project={project}
              changeChecked={changeCheckedSM}
            />
          ))}
        </div>
      </div>

      {/* BEDROOM Filter */}
      <div className={Styles.inputgroup}>
        <p className={Styles.label}>BEDROOM</p>
        <div className={Styles.checkboxGrid}>
          {projects.map((project) => (
            <FilterCommon
              key={project.id}
              project={project}
              changeChecked={changeChecked}
            />
          ))}
        </div>
      </div>

      {/* BATHROOM Filter */}
      <div className={Styles.inputgroup}>
        <p className={Styles.label}>BATHROOM</p>
        <div className={Styles.checkboxGrid}>
          {projectsYL.map((project) => (
            <FilterCommon
              key={project.id}
              project={project}
              changeChecked={changeCheckedYL}
            />
          ))}
        </div>
      </div>

      {/* PET FRIENDLY Filter */}
      <div className={Styles.inputgroup}>        
        <p className={Styles.label}>PET FRIENDLY</p>
        <div className={Styles.checkboxGrid}>
          {projectsS.map((project) => (
            <FilterCommon
              key={project.id}
              project={project}
              changeChecked={changeCheckedS}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default FilterSection;
