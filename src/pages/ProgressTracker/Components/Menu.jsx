import React from "react";
import Styles from "./Menu.module.css";
import { useState } from "react";
import ProgressTrackerIcon from "../../../assets/TeacherDashboard/progressTracker.png";
import StudentProfilesIcon from "../../../assets/TeacherDashboard/studentProfiles.png";
import HelpRequestIconIcon from "../../../assets/TeacherDashboard/helpRequests.png";
import ProjectSubmissionsIcon from "../../../assets/TeacherDashboard/projectSubmissions.png";
import ProjectLibraryIcon from "../../../assets/TeacherDashboard/projectLibrary.png";
import ProfileIcon from "../../../assets/profile.png";
import SettingsIcon from "../../../assets/settings.png";
import LogoutIcon from "../../../assets/logout.png";
import ArrowLeft from "../../../assets/arrowLeft.png";

export default function Menu() {
  const [inActive, setInActive] = useState(false);
  const [menuText, setMenuText] = useState(false);
  const [menuIcons, setMenuIcons] = useState(false);
  const [arrowLeft, setArrowLeft] = useState(false); // Carry on from here, function needs to change arrowLeft to arrowRight

  const toggleMenu = () => {
    setInActive(!inActive);
    setMenuText(!menuText);
    setMenuIcons(!menuIcons);
    setArrowLeft(!arrowLeft); // Carry on from here, function needs to change arrowLeft to arrowRight
  };

  return (
    <>
      <div
        className={`${Styles.menuContainer} ${inActive ? Styles.inActive : ""}`}
      >
        <div>
          <div className={Styles.teacherProfileImage}>
            <img
              src="/images/teachers/JasminaSalvador.png"
              alt="Teacher profile"
            />
          </div>
          <div className={Styles.menuLinksContainer}>
            <ul className={Styles.menuLinks}>
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
              <li>
                <img
                  className={Styles.menuIcon}
                  src={ProjectSubmissionsIcon}
                  alt="Project Submissions icon"
                />
                <p className={`${menuText ? Styles.menuTextEl : ""}`}>
                  PROJECT SUBMISSIONS
                </p>
              </li>
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
            </ul>
          </div>
        </div>

        <div className={Styles.menuBtnContainer}>
          <button className={Styles.menuBtn}onClick={toggleMenu}><img src={ArrowLeft} alt="Arrow left icon" /></button>
        </div>

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
              <p className={`${menuText ? Styles.menuTextEl : ""}`}>Profile</p>
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
      </div>
    </>
  );
}
