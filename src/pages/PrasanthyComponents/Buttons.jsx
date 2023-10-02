import React from 'react';
import ProjectList from './ProjectList';
import './styleButton.css';
import ButtonToggle from './ButtonToggle';
import {ButtonsList} from './ProjectList';

const Buttons = ({selectedCategory,
  selectCategory,setList}) => 
   (
    <div>
    <div className="projectbar">
    <p><h4>PROJECTS</h4></p>
    <p><h5>Welcome to the Project Library. You can use the filters on the left to help you 
    search for specific projects.</h5></p>
    </div>
    <div className='searchBar-wrap'>
    
        
      <ButtonToggle
        options={ButtonsList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
        
    
    <button className="buttonbar"
     onClick={()=>setList(ProjectList.slice(10))}>
    5
    </button>
    <button className="button"
    onClick={()=>setList(ProjectList.slice(5))}>
    10
    </button>
    <button className="button"
    onClick={()=>setList(ProjectList)}>
    All
    </button>

    


      
    </div>
    </div>
  );


export default Buttons;
