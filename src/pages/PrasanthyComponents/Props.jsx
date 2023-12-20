import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from './Properties.json';
import Card from './Card';
import Buttons from './Buttons';
import FilterSection from './FilterSection';
import Styles from './cssFiles/styleProps.module.css';
import EmptyView from './EmptyView';
import BackToTopButton from './BackToTopButton';

const Props = ({ handleClick }) => {
  // State for the list of properties
  const [list, setList] = useState([]);

  useEffect(() => {
    // Fetch data from the server using Axios
    axios.get('http://localhost:4000/products')
      .then((response) => {
        console.log(response.data);
        setList(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching featured data:', error);
      });
  }, []); 

  // State for selected category and filter results
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [resultsFound, setResultsFound] = useState(true);

  // State for different filter categories
  const [projects, setProjects] = useState(data.Bedroom);
  const [projectsS, setProjectsS] = useState(data.Pet);
  const [projectsYL, setProjectsYL] = useState(data.BathRoom);
  const [projectsSM, setProjectsSM] = useState(data.PropertyType);

  // Handle category selection
  const handleSelectCategory = (event, value) => !value ? null : setSelectedCategory(value);

  // Handle checkbox changes for different filter categories
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

  // Apply filters based on selected options
  const applyFilters = async () => {
    let updatedList = data.PropertyList;

    if (selectedCategory) {
      updatedList = updatedList.filter((item) => item.level === selectedCategory);
    }

    // Apply filters for different filter categories

    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  // Use effect to apply filters when dependencies change
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
