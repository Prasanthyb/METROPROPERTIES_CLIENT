import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Styles from "./Overview.module.css";
// --------------------- Font Awesome library imports
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default function Overview() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    fetch("http://localhost:4000/api/studentprofiles")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      });
  }, []);

  return (
    // ------------------------- overviewContainer provides ability to position the helpRequestsContainer
    <div className={Styles.OverviewContainer}>
      {/* ------------------------ helpRequestsContainer holds all content displayed within the overContainer */}
      <div className={Styles.StudentProfilesContainer}>
        <div className={Styles.container}>
          {users &&
            users.map(function (user) {
              return (
                <NavLink className={Styles.navLink} to={`/student/${user.student_id}`} key={user.student_id}>
                  <div key={user.student_id} className={Styles.card}>
                  <img src={user.profile_pic} alt="students" className={Styles.studentImage} />
                  <p>{user.name.toUpperCase()}</p>
                </div>
                </NavLink>
              );
            })}
        </div>
      </div>
      {/* ^^^^^^^^^^^^^^^ END of helpRequestsContainer */}
    </div>
    // ^^^^^^^^^^^^^^ END of overviewContainer
  );
}
