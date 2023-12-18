import React from "react";
import Styles from "./cssFiles/styleFilterSection.module.css";
import FilterCommon from "./FilterCommon";

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

    <div className={Styles.filter}>
      <div className={Styles.filter1}>

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
