import React from "react";
import Styles from "./Menu.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// ------------------------ ICON AND IMG IMPORTS FROM SRC FOLDER
import ProgressTrackerIcon from "../assets/TeacherDashboard/progressTracker.png";
import StudentProfilesIcon from "../assets/TeacherDashboard/studentProfiles.png";
import HelpRequestIconIcon from "../assets/TeacherDashboard/helpRequests.png";
import ProjectSubmissionsIcon from "../assets/TeacherDashboard/projectSubmissions.png";
import ProjectLibraryIcon from "../assets/TeacherDashboard/projectLibrary.png";
import ProfileIcon from "../assets/profile.png";
import SettingsIcon from "../assets/settings.png";
import LogoutIcon from "../assets/logout.png";
import ArrowLeft from "../assets/arrowLeft.png";
import ArrowRight from "../assets/arrowRight.png";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default function Menu() {
  const [inActive, setInActive] = useState(false);
  const [menuText, setMenuText] = useState(false);
  const [menuIcons, setMenuIcons] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);
  // const [listItems, setListItems] = useState(false);

  const toggleMenu = () => {
    // toggleMenu function is applied to red arrow button within the menu
    setInActive(!inActive); // Adjusts with width of menu container when red arrow is clicked
    setMenuText(!menuText); // Hides menu text when menu container is collapsed
    setMenuIcons(!menuIcons); // Changes menu crumbs from row to column when menu is collapsed
    setArrowRight(!arrowRight); // Changes red arrow from flex-end to flex start, border radius from left to right side, and img of arrow pointing left to pointing right when menu is collapsed.
  };

  return (
    <>
      <div
        className={`${Styles.menuContainer} ${inActive ? Styles.inActive : ""}`}
      >
        <div>
          {/* ---------------- Teacher profile image */}
          <div className={Styles.teacherProfileImage}>
            <img
              src="/images/teachers/JasminaSalvador.png"
              alt="Teacher profile"
            />
          </div>
          {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

          {/* ---------------- Menu Links container */}
          <div className={Styles.menuLinksContainer}>
            <ul className={Styles.menuLinks}>
              {/* ------------- Progress Tracker link */}
              <NavLink
                to={"/progresstracker"}
                className={({ isActive }) => `${isActive ? Styles.active : ""} ${menuIcons ? Styles.menuLinksCollapsed : ""}`}
              >
                <li>
                  <img
                    className={Styles.menuIcon}
                    src={ProgressTrackerIcon}
                    alt="Progress tracker icon"
                  />
                  <p className={`${menuText ? Styles.menuTextEl : ""}`}>
                    PROGRESS TRACKER
                  </p>
                </li>
              </NavLink>
              {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
              {/* ------------- Student Profiles link */}
              <NavLink
                to={"/studentprofiles"}
                className={({ isActive }) => `${isActive ? Styles.active : ""} ${menuIcons ? Styles.menuLinksCollapsed : ""}`}
              >
                <li>
                  <img
                    className={Styles.menuIcon}
                    src={StudentProfilesIcon}
                    alt="Student profiles icon"
                  />
                  <p className={`${menuText ? Styles.menuTextEl : ""}`}>
                    STUDENT PROFILES
                  </p>
                </li>
              </NavLink>
              {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
              {/* ------------- Help Requests link link */}
              <NavLink
                to={"/helprequests"}
                className={({ isActive }) => `${isActive ? Styles.active : ""} ${menuIcons ? Styles.menuLinksCollapsed : ""}`}
              >
                <li>
                  <img
                    className={Styles.menuIcon}
                    src={HelpRequestIconIcon}
                    alt="Help requests icon"
                  />
                  <p className={`${menuText ? Styles.menuTextEl : ""}`}>
                    HELP REQUESTS
                  </p>
                </li>
              </NavLink>
              {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
              {/* ------------- Project Submissions link */}
              <NavLink
                to={"/projectsubmissions"}
                className={({ isActive }) => `${isActive ? Styles.active : ""} ${menuIcons ? Styles.menuLinksCollapsed : ""}`}
              >
                <li className={`${menuIcons ? Styles.menuLinksCollapsed : ""}`}>
                  <img
                    className={Styles.menuIcon}
                    src={ProjectSubmissionsIcon}
                    alt="Project Submissions icon"
                  />
                  <p className={`${menuText ? Styles.menuTextEl : ""}`}>
                    PROJECT SUBMISSIONS
                  </p>
                </li>
              </NavLink>
              {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
              {/* ------------- Project Library link */}
              <NavLink
                to={"/studentprojects"}
                className={({ isActive }) => `${isActive ? Styles.active : ""} ${menuIcons ? Styles.menuLinksCollapsed : ""}`}
              >
                <li>
                  <img
                    className={Styles.menuIcon}
                    src={ProjectLibraryIcon}
                    alt="Project library icon"
                  />
                  <p className={`${menuText ? Styles.menuTextEl : ""}`}>
                    PROJECT LIBRARY
                  </p>
                </li>
              </NavLink>
              {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
            </ul>
          </div>
          {/* ^^^^^^^^^^^^^^^^ END of Menu Links container */}
        </div>

        {/* ^^^^^^^^^^^^^^^^ Collapse menu button container */}
        <div
          className={`${Styles.menuBtnContainer} ${
            arrowRight ? Styles.menuContainerCollapsed : ""
          }`}
        >
          <button
            className={`${Styles.menuBtn} ${
              arrowRight ? Styles.menuBtnClicked : ""
            }`}
            onClick={toggleMenu}
          >
            {arrowRight ? (
              <img src={ArrowRight} alt="Arrow right icon" />
            ) : (
              <img src={ArrowLeft} alt="Arrow left icon" />
            )}
          </button>
        </div>
        {/* ---------------- END Collapse menu button container */}

        {/* ---------------- Menu crumbs container */}
        <div>
          <ul
            className={`${Styles.menuCrumbs} ${
              menuIcons ? Styles.menuCrumbsCollapsed : ""
            }`}
          >
            <li>
              <img
                className={Styles.menuCrumIcon}
                src={ProfileIcon}
                alt="Profile icon"
              />
              <NavLink className={Styles.navLink} to={`/teacher/101`}>
              <p className={`${menuText ? Styles.menuTextEl : ""}`}>Profile</p>
              </NavLink>
            </li>
            <li>
              <img
                className={Styles.menuCrumIcon}
                src={SettingsIcon}
                alt="Settings icon"
              />
              <p className={`${menuText ? Styles.menuTextEl : ""}`}>Settings</p>
            </li>
            <li>
              <img
                className={Styles.menuCrumIcon}
                src={LogoutIcon}
                alt="Logout icon"
              />
              <p className={`${menuText ? Styles.menuTextEl : ""}`}>Log Out</p>
            </li>
          </ul>
        </div>
        {/* ^^^^^^^^^^^^^^^^ END Menu crumbs container */}
      </div>
    </>
  );
}
