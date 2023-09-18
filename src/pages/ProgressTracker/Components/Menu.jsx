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

export default function Menu() {
  const [inActive, setInActive] = useState(false);

  const toggleMenu = () => {
    setInActive(!inActive);
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
                PROGRESS TRACKER
              </li>
              <li>
                <img
                  className={Styles.menuIcon}
                  src={StudentProfilesIcon}
                  alt="Student profiles icon"
                />
                STUDENT PROFILES
              </li>
              <li>
                <img
                  className={Styles.menuIcon}
                  src={HelpRequestIconIcon}
                  alt="Help requests icon"
                />
                HELP REQUESTS
              </li>
              <li>
                <img
                  className={Styles.menuIcon}
                  src={ProjectSubmissionsIcon}
                  alt="Project Submissions icon"
                />
                PROJECT SUBMISSIONS
              </li>
              <li>
                <img
                  className={Styles.menuIcon}
                  src={ProjectLibraryIcon}
                  alt="Project library icon"
                />
                PROJECT LIBRARY
              </li>
            </ul>
          </div>
        </div>

        <div className={Styles.menuBtn}>
          <button onClick={toggleMenu}>toggle menu</button>
        </div>

        <div>
          <ul className={Styles.menuCrumbs}>
            <li>
              <img
              className={Styles.menuCrumIcon} 
              src={ProfileIcon} 
              alt="" 
              />
              <p>Profile</p>
              </li>
            <li>
              <img 
              className={Styles.menuCrumIcon}
              src={SettingsIcon} 
              alt="" 
              />
            <p>Settings</p>
            </li>
            <li>
              <img 
              className={Styles.menuCrumIcon}
              src={LogoutIcon} 
              alt="" 
              />
              <p>Log Out</p>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
}
