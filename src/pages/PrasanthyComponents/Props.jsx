import React, { useEffect, useState } from 'react';
import data from './Properties.json';
import Card from './Card';
import Buttons from './Buttons';
import FilterSection from './FilterSection';
import Styles from './cssFiles/styleProps.module.css';
import EmptyView from './EmptyView';
import BackToTopButton from './BackToTopButton';
import Footer from './Footer';
import axios from "axios";

const Props = ({ handleClick }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    
    axios.get('http://localhost:4000/products')
      .then((response) => {
        console.log(response.data);
        setList(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching featured data:', error);
      });

    
  }, []); 


 

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [resultsFound, setResultsFound] = useState(true);
  const [projects, setProjects] = useState(data.Bedroom);
  const [projectsS, setProjectsS] = useState(data.Pet);
  const [projectsYL, setProjectsYL] = useState(data.BathRoom);
  const [projectsSM, setProjectsSM] = useState(data.PropertyType);

  const handleSelectCategory = (event, value) => !value ? null : setSelectedCategory(value);

  const handleChangeChecked = (id) => {
    const projectsStateList = projects;
    const changeCheckedProjects = projectsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setProjects(changeCheckedProjects);
  };

  const handleChangeCheckedS = (id) => {
    const projectsStateListS = projectsS;
    const changeCheckedProjectsS = projectsStateListS.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setProjectsS(changeCheckedProjectsS);
  };

  const handleChangeCheckedYL = (id) => {
    const projectsStateListYL = projectsYL;
    const changeCheckedProjectsYL = projectsStateListYL.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setProjectsYL(changeCheckedProjectsYL);
  };

  const handleChangeCheckedSM = (id) => {
    const projectsStateListSM = projectsSM;
    const changeCheckedProjectsSM = projectsStateListSM.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setProjectsSM(changeCheckedProjectsSM);
  };

  const applyFilters = async () => {
    let updatedList = data.PropertyList;

    if (selectedCategory) {
      updatedList = updatedList.filter((item) => item.level === selectedCategory);
    }

    const projectCheckedS = projectsS
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (projectCheckedS.length) {
      updatedList = updatedList.filter((item) =>
        projectCheckedS.includes(item.pet)
      );
    }

    const projectCheckedYL = projectsYL
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (projectCheckedYL.length) {
      updatedList = updatedList.filter((item) =>
        projectCheckedYL.includes(item.bathroom)
      );
    }

    const projectChecked = projects
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (projectChecked.length) {
      updatedList = updatedList.filter((item) =>
        projectChecked.includes(item.bedroom)
      );
    }

    const projectCheckedSM = projectsSM
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (projectCheckedSM.length) {
      updatedList = updatedList.filter((item) =>
        projectCheckedSM.includes(item.propertytype)
      );
    }

    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, projects, projectsS, projectsYL, projectsSM]);

  return (
    <div className={Styles.main}>
      <div className={Styles.div}>
        <div className={Styles.navbar}>
          {/* Render NavBar component */}
        </div>

        <div className={Styles.filter}>
          <div className="list">
            {/* Render Buttons component with props */}
            <Buttons
              selectedCategory={selectedCategory}
              selectCategory={handleSelectCategory}
              setList={setList}
            />
          </div>
          {/* Render FilterSection component with props */}
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

        <section>
          {/* Conditionally render Card or EmptyView */}
          {resultsFound ? 
  list.map((item) => (
    <Card item={item} key={item.id} handleClick={handleClick} />
  )) 
  : <EmptyView />
}
          </section>

        <div className={Styles.footer}>
          {/* Render BackToTopButton component */}
          <BackToTopButton />
        </div>
      </div>
      
    </div>
  );
};

export default Props;
