import React from 'react';
import  './styleFilterSection.css';

import FilterCommon from './FilterCommon';










const FilterSection = ({projectsSM,changeCheckedSM,projectsYL,
  
  changeCheckedYL,projectsS,changeCheckedS,projects,changeChecked}) => 
   (

  
    <div className="filter">
 <div className="input-group">
    <p className="label">SUBSCRIPTION</p>    
    {projectsS.map((project) => (
        <FilterCommon
          key={project.id}
          project={project}
          changeChecked={changeCheckedS}
    />
    ))}
     </div>
     

    

    <div className="input-group">
    <p className="label">ACTIVITY TYPE</p>
    {projects.map((project) => (
        <FilterCommon
          key={project.id}
          project={project}
          changeChecked={changeChecked}
    />
    ))}
     </div>
     <div className="input-group">
    <p className="label">YEAR-LEVEL</p>
    {projectsYL.map((project) => (
        <FilterCommon
          key={project.id}
          project={project}
          changeChecked={changeCheckedYL}
    />
    ))}
     </div>

     <div className="input-group">
    <p className="label">SUBJECT MATTER</p>
    {projectsSM.map((project) => (
        <FilterCommon
          key={project.id}
          project={project}
          changeChecked={changeCheckedSM}
    />
    ))}
     </div>


     </div>
    
  
  );


export default FilterSection;
