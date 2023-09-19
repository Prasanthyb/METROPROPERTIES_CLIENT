import React from 'react';
import {useEffect,useState} from 'react';
import ProjectList  from './ProjectList';
import Card from './Card'
import Buttons from './Buttons' ; 
import FilterSection from './FilterSection';
import './styleProducts.css';
import {ActivityType,Subscription,SubjectMatter,YearLevel} from './ProjectList';


const Home = () => {
  const [item,setItems]=useState (ProjectList)
  const menuItems=[...new Set(ProjectList.map((val)=>val.level))]
  const filterItems=(cat)=>{
  const newItems=ProjectList.filter((newval)=>newval.level===cat)
  setItems(newItems)
  }
  


const[projects,setProjects]=useState(ActivityType);   
  
  const handleChangeChecked=id=>{
  const projectsStateList = projects;
  const changeCheckedProjects=projectsStateList.map(item=>item.id===id?
  {...item,checked:!item.checked}:item);
  setProjects(changeCheckedProjects);

  };


const[projectsS,setProjectsS]=useState(Subscription)
  const handleChangeCheckedS=id=>{
  const projectsStateListS = projectsS;
  const changeCheckedProjectsS=projectsStateListS.map(item=>item.id===id?
  {...item,checked:!item.checked}:item);
  setProjectsS(changeCheckedProjectsS);
};


const[projectsYL,setProjectsYL]=useState(YearLevel)
  const handleChangeCheckedYL=id=>{
  const projectsStateListYL = projectsYL;
  const changeCheckedProjectsYL=projectsStateListYL.map(item=>item.id===id?
  {...item,checked:!item.checked}:item);
  setProjectsYL(changeCheckedProjectsYL);
};



const[projectsSM,setProjectsSM]=useState(SubjectMatter)
  const handleChangeCheckedSM=id=>{
  const projectsStateListSM = projectsSM;
  const changeCheckedProjectsSM=projectsStateListSM.map(item=>item.id===id?
  {...item,checked:!item.checked}:item);
  setProjectsSM(changeCheckedProjectsSM);
};



const applyFilters=()=>{
let updatedList=ProjectList;


   const projectCheckedS=projectsS
  .filter((item)=>item.checked)
  .map((item)=>item.label);
  
  if (projectCheckedS.length){
  updatedList=updatedList.filter((item)=>
  projectCheckedS.includes(item.suscription)    
  );
  }


  const projectChecked=projects
  .filter((item)=>item.checked)
  .map((item)=>item.label);
  
  if (projectChecked.length){
  updatedList=updatedList.filter((item)=>
  projectChecked.includes(item.type)    
  );
  }



  const projectCheckedYL=projectsYL
  .filter((item)=>item.checked)
  .map((item)=>item.label);
  
  if (projectCheckedYL.length){
  updatedList=updatedList.filter((item)=>
  projectCheckedYL.includes(item.yearlevel)    
  );
  }


  const projectCheckedSM=projectsSM
  .filter((item)=>item.checked)
  .map((item)=>item.label);
  
  if (projectCheckedSM.length){
  updatedList=updatedList.filter((item)=>
  projectCheckedSM.includes(item.subjectmatter)
    
  );
  }


setItems(updatedList);
}
useEffect(()=>{
applyFilters();
},
[projects,projectsS,projectsYL,projectsSM]
);



  return (
    
    <div className="home">

    <Buttons menuItems={menuItems}
    filterItems={filterItems}
    setItems={setItems}
    />

    

   
    <div className="home_panelList-wrap">
    <div className="home_panel-wrap">

    <FilterSection

    projectsS={projectsS}
    changeCheckedS={handleChangeCheckedS}

    projects={projects}
    changeChecked={handleChangeChecked}

    projectsYL={projectsYL}
    changeCheckedYL={handleChangeCheckedYL}

    projectsSM={projectsSM}
    changeCheckedSM={handleChangeCheckedSM}
    />
    </div>
   
    
    
    <div className="list-items"  >
    <Card item={item}/>
     </div>

  
     
     </div>

    </div>
    
    
    
    
    
    
  );
};
export default Home;



