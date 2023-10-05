import React from "react";
import { useState, useEffect } from "react";
import Styles from "./Overview.module.css";
// --------------------- Font Awesome library imports
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default function Overview() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    fetch("http://localhost:4000/api/users")
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
        <h1>STUDENT PROFILES CONTAINER</h1>
        <div className={Styles.container}>
          {users &&
            users.map(function (user) {
              return (
                <div key={user.id} className={Styles.card}>
                  <img src={user.images} alt="students" />
                  <p>{user.name}</p>
                </div>
              );
            })}
        </div>
      </div>
      {/* ^^^^^^^^^^^^^^^ END of helpRequestsContainer */}
    </div>
    // ^^^^^^^^^^^^^^ END of overviewContainer
  );
}
