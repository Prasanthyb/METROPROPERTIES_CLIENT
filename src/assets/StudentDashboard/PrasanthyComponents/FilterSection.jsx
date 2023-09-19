import React from 'react';
import  './styleFilterSection.css';
import {ActivityType,Subscription,SubjectMatter,YearLevel} from './ProjectList';
import FilterActivityType from './FilterActivityType';








const FilterSection = ({projectsSM,changeCheckedSM,projectsYL,
  
  changeCheckedYL,projectsS,changeCheckedS,projects,changeChecked}) => 
   (

  
    <div className="filter">
 <div className="input-group">
    <p className="label">SUBSCRIPTION</p>
    {projectsS.map((project) => (
        <FilterActivityType
          key={project.id}
          project={project}
          changeChecked={changeCheckedS}
    />
    ))}
     </div>
     

    

    <div className="input-group">
    <p className="label">ACTIVITY TYPE</p>
    {projects.map((project) => (
        <FilterActivityType
          key={project.id}
          project={project}
          changeChecked={changeChecked}
    />
    ))}
     </div>
     <div className="input-group">
    <p className="label">YEAR-LEVEL</p>
    {projectsYL.map((project) => (
        <FilterActivityType
          key={project.id}
          project={project}
          changeChecked={changeCheckedYL}
    />
    ))}
     </div>

     <div className="input-group">
    <p className="label">SUBJECT MATTER</p>
    {projectsSM.map((project) => (
        <FilterActivityType
          key={project.id}
          project={project}
          changeChecked={changeCheckedSM}
    />
    ))}
     </div>


     </div>
    
  
  );


export default FilterSection;
