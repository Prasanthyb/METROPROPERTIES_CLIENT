import React from "react";
import Styles from "./styleNavBar.module.css";
import {NavLink} from "react-router-dom";
// ---------------- Logo image import
import LevelUpWorksblue from "../../assets/NavBar/LevelUpWorks-white.png";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ---------------- Country flag image imports
import NZFlag from "../../assets/NavBar/NZFlag.png";
import MaoriFlag from "../../assets/NavBar/MaoriFlag.png";

const Navbar = () => {
  return (
    <div className={Styles.StudentTeacherNavBarContainer}>
      <div className={Styles.levelUpWorksLogoContainer}>
        <img src={LevelUpWorksblue} alt="Company Logo" />
      </div>

      <div className={Styles.StudentTeacherNavBarBtnsContainer}>
      <button className={Styles.homeBtn}>HOME</button>

     <NavLink to="/features">FEATURES</NavLink>

        <button className={Styles.helpCentreBtn}>TEACHERS</button>
       
        <div className={Styles.container}>
        <div className={Styles.flagsContainer}>
        LANG
          <img src={NZFlag} alt="Country flag" />
          <img src={MaoriFlag} alt="Country flag" />
          
        </div>
        <a href=" " className={Styles.linkButton}>Link Button</a>
        </div>




      </div>
    </div>
  );
}

export default Navbar;
