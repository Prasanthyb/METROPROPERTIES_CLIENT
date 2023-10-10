import React from "react";
import Styles from "./Overview.module.css";
import { useState, useEffect } from "react";
// --------------------- Font Awesome library imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faCheck } from "@fortawesome/free-solid-svg-icons";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default function Overview() {
  const [users, setUsers] = useState([]);

  useEffect(function () {
    fetch("http://localhost:4000/api/helprequests")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      });
  }, []);

  return (
    // ------------------------- overviewContainer provides ability to position the helpRequestsContainer
    <div className={Styles.overviewContainer}>
      {/* ------------------------ helpRequestsContainer holds all content displayed within the overContainer */}
      <div className={Styles.helpRequestsContainer}>
        <div className={Styles.helpRequestsHeader}>
          <h1>HELP REQUESTS</h1>
        </div>
        {/* --------------------------- Reply / Mark As Done buttons top right hand side of help requests container */}
        <div className={Styles.helpRequestMarkReply}>
          <p>
            <FontAwesomeIcon icon={faReply} className={Styles.faIcon} />
            REPLY
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className={Styles.faIcon} />
            MARK AS DONE
          </p>
        </div>
        {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        {/* --------------------------- Individual requests container */}
        <div className={Styles.individualRequestsContainer}>
          {/* --------------------------- Student request */}
          <div className={Styles.individualRequests}>
            {users &&
              users.map(function (user) {
                return (
                  <div key={user.student_id} className={Styles.helpRequestCard}>
                    <input
                      type="checkbox"
                      id="Checkbox"
                      name="Checkbox"
                      value="checkboxValue"
                    />

                    <div className={Styles.individualStudent}>
                      <div className={Styles.studentImgContainer}>
                        <img src={user.profile_pic} alt="Student profile" />
                        <p>{user.name.split(' ')[0].toUpperCase()} needs help with their project</p>

                      </div>

                      <div className={Styles.dateTimeContainer}>
                        {user.date_created}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        </div>
        {/* ^^^^^^^^^^^^^^^^^^^ END of Indivudal requests container */}
      </div>
      {/* ^^^^^^^^^^^^^^^ END of helpRequestsContainer */}
    </div>
    // ^^^^^^^^^^^^^^ END of overviewContainer
  );
}
