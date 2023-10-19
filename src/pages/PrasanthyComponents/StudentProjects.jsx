import React, { useEffect, useState } from 'react';
import data from './Projects.json';
import Card from './Card';
import Buttons from './Buttons';
import FilterSection from './FilterSection';
import Styles from './styleStudentProjects.module.css';
import EmptyView from './EmptyView';
import BackToTopButton from './BackToTopButton';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from "axios";

const StudentProjects = () => {

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ State for the project list~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  const [list, setList] = useState();

  useEffect(() => {

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fetch project data from an API~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    fetch('http://localhost:4000/api/projects')
      .then((response) => response.json())
      .then((response) => setList(response));
  }, []);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ State for selected level and results found~~~~~~~~~~~~~~~~~~~//

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [resultsFound, setResultsFound] = useState(true);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ State for various project filters~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  const [projects, setProjects] = useState(data.ActivityType);
  const [projectsS, setProjectsS] = useState(data.Subscription);
  const [projectsYL, setProjectsYL] = useState(data.YearLevel);
  const [projectsSM, setProjectsSM] = useState(data.SubjectMatter);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` Handle selecting a category~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  const handleSelectCategory = (event, value) => !value ? null : setSelectedCategory(value);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Handle checkbox changes for different filter categories~~~~~~~~~~~~~~~~~~~//

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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Apply filters to the project list~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  const applyFilters = async () => {    
    try {
      const response = await axios.post('http://localhost:4000/api/filterData', {
    subscription: projectsS,
    activityType: projects,
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
     let updatedList = response.data;

    } catch (error) {
      console.error('Error filtering data:', error);
    }

    let updatedList = data.ProjectList;

    if (selectedCategory) {
      updatedList = updatedList.filter((item) => item.level === selectedCategory);
    }

    const projectCheckedS = projectsS
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (projectCheckedS.length) {
      updatedList = updatedList.filter((item) =>
        projectCheckedS.includes(item.suscription)
      );
    }

    const projectCheckedYL = projectsYL
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (projectCheckedYL.length) {
      updatedList = updatedList.filter((item) =>
        projectCheckedYL.includes(item.year_level)
      );
    }

    const projectChecked = projects
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (projectChecked.length) {
      updatedList = updatedList.filter((item) =>
        projectChecked.includes(item.activity_type)
      );
    }

    const projectCheckedSM = projectsSM
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (projectCheckedSM.length) {
      updatedList = updatedList.filter((item) =>
        projectCheckedSM.includes(item.subject_matter)
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

{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Render NavBar component~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <NavBar />
        </div>

        <div className={Styles.filter}>

{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Render FilterSection component with props~~~~~~~~~~~~~~~~~~~ */}

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

        <div className="list">

{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Render Buttons component with props~~~~~~~~~~~~~~~~~~~ */}
          <Buttons
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            setList={setList}
          />
        </div>

        <div className={Styles.listp}>

{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Conditionally render Card or EmptyView~~~~~~~~~~~~~~~~~~~~~~~~ */}

          {resultsFound ? <Card list={list} /> : <EmptyView />}
        </div>

        <div className={Styles.footer}>

{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Render BackToTopButton component~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <BackToTopButton />
        </div>
      </div>
      <div>
        <div className={Styles.footerone}>

{/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Render Footer component~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default StudentProjects;
