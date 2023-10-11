import React, { useState, useEffect, useRef } from "react";
import Styles from "./styleNavBar.module.css";
import { NavLink } from "react-router-dom";
import LevelUpWorksblue from "../../assets/NavBar/LevelUpWorks-white.png";
import NZFlag from "../../assets/NavBar/NZFlag.png";
import MaoriFlag from "../../assets/NavBar/MaoriFlag.png";
import DropDownList from "./DropDownList";

//----------------------------------- Navbar Component----------------------------------------//

const Navbar = () => {
  //-------------------------------- State to manage the profile dropdown------------------------//

  const [openProfile, setOpenProfile] = useState(false);

  //----------------------------- Ref to detect clicks outside the profile dropdown---------------//

  const menuRef = useRef();

  //---------------------------- Effect to close the profile dropdown when clicking outside it-------//

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };

    // --------------When a 'mousedown' event occurs, the 'handler' 
    // function defined above will be called to check if the click was  outside 'menuRef'------------// 
    

    document.addEventListener("mousedown", handler);
    return () => {

      //------called when the component unmounts, removes the 'handler' function as an event listener------//

      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className={Styles.StudentTeacherNavBarContainer}>
      <div className={Styles.levelUpWorksLogoContainer}>
        <img src={LevelUpWorksblue} alt="Company Logo" />
      </div>

      <div className={Styles.StudentTeacherNavBarBtnsContainer}>
        <NavLink className={Styles.navbar} to="/">
          HOME
        </NavLink>
        <NavLink className={Styles.navbar} to="/projects">
          PROJECTS
        </NavLink>
        <NavLink className={Styles.navbar} to="/projects">
          TEACHERS
        </NavLink>

        <div className={Styles.container}>
          <div className={Styles.flagsContainer}>
            LANG
            <img src={NZFlag} alt="Country flag" />
            <img src={MaoriFlag} alt="Country flag" />
          </div>

          {/*----- Sets a ref attribute to menuRef, which allows you to reference this DOM element-------- */}

          <div className={Styles.iconContainer} ref={menuRef}>

            {/*---------- toggles the value of the openProfile state variable when clicked----------------- */}
            
            <div
              className={Styles.imageContainer}
              onClick={() => setOpenProfile(!openProfile)}>
              <img
                className={Styles.img}
                src="/images/students/CourtneyBristol.png"
                alt="Student profile"
              />
              <span className={Styles.name}>COURTNEY BRISTOL</span>
            </div>

            {/*---- conditional rendering. If the openProfile state variable is true, it renders a <DropDownList /> component------------*/}

            {openProfile && <DropDownList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

