import React from 'react';
import ProjectList from './ProjectList';
import './styleButton.css';

const Buttons = ({menuItems ,filterItems,setItems}) => {
  return (
    <div>
    <div className="projectbar">
    <p><h4>PROJECTS</h4></p>
    <p><h5>Welcome to the Project Library. You can use the filters on the left to help you 
    search for specific projects.</h5></p>
    </div>
    <div className='searchBar-wrap'>
    {
        menuItems.map(val=>(
            <button className='button'
            onClick={()=>filterItems(val)}>
            {val}
            </button>
        ))
    }
    <button className="buttonbar"
    onClick={()=>setItems(ProjectList.slice(10))}>
    5
    </button>
    <button className="button"
    onClick={()=>setItems(ProjectList.slice(5))}>
    10
    </button>
    <button className="button"
    onClick={()=>setItems(ProjectList)}>
    All
    </button>


      
    </div>
    </div>
  );
}

export default Buttons;
