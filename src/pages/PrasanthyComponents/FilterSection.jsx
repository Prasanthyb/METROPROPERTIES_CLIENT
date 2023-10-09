import React from "react";
import Styles from "./styleFilterSection.module.css";
import FilterCommon from "./FilterCommon";

//-------------------- Define the FilterSection component----------------------

const FilterSection = ({
  projectsSM,
  changeCheckedSM,
  projectsYL,
  changeCheckedYL,
  projectsS,
  changeCheckedS,
  projects,
  changeChecked,
}) => (
  <div className="filter">
    <div className={Styles.filter1}>

{/*------------------------ Subscription Filter------------------------------------------- */}

      <div className={Styles.inputgroup}>
        <p className={Styles.label}>SUBSCRIPTION</p>
        {projectsS.map((project) => (
          <FilterCommon
            key={project.id}
            project={project}
            changeChecked={changeCheckedS}
          />
        ))}
      </div>

{/*---------------------------- Activity Type Filter----------------------------------------- */}

      <div className={Styles.inputgroup}>
        <p className={Styles.label}>ACTIVITY TYPE</p>
        {projects.map((project) => (
          <FilterCommon
            key={project.id}
            project={project}
            changeChecked={changeChecked}
          />
        ))}
      </div>

{/*------------------------------- Year-Level Filter-------------------------------------------- */}

      <div className={Styles.inputgroup}>
        <p className={Styles.label}>YEAR-LEVEL</p>
        {projectsYL.map((project) => (
          <FilterCommon
            key={project.id}
            project={project}
            changeChecked={changeCheckedYL}
          />
        ))}
      </div>

{/*-------------------------------- Subject Matter Filter------------------------------------------ */}

      <div className={Styles.inputgroup}>
        <p className={Styles.label}>SUBJECT MATTER</p>
        {projectsSM.map((project) => (
          <FilterCommon
            key={project.id}
            project={project}
            changeChecked={changeCheckedSM}
          />
        ))}
      </div>
    </div>
  </div>
);

//--------------------------------- Export the FilterSection component------------------------------------

export default FilterSection;
