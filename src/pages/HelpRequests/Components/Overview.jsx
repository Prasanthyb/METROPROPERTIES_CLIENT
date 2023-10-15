import React from "react";
import Styles from "./Overview.module.css";
import { useState, useEffect } from "react";
// --------------------- Font Awesome library imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faCheck } from "@fortawesome/free-solid-svg-icons";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default function Overview() {
  const [users, setUsers] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/api/helprequests")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, [checked]); // Use the 'checked' state as a dependency to re-fetch on changes

  const markHelpRequestAsDone = (requestId) => {
    fetch(`http://localhost:4000/api/markhelprequestasdone/${requestId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Help request ${requestId} has been deleted`);
          // Update the state to remove the deleted request
          setUsers(users.filter((user) => user.student_id !== requestId));
          // Toggle the 'checked' state to trigger a re-fetch
          setChecked(!checked);
        } else {
          console.error(`Help request ${requestId} could not be deleted`);
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });
  }

  function formatDate(dateString, format) {
    const date = new Date(dateString);
    const dateOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    if (format === "date") {
      return date.toLocaleString("en-US", dateOptions);
    } else if (format === "time") {
      return date.toLocaleString("en-US", timeOptions);
    } else {
      return ""; // Handle unsupported format
    }
  }

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
                    {/* <input
                      type="checkbox"
                      id="Checkbox"
                      name="Checkbox"
                      value="checkboxValue"
                      onClick={markHelpRequestAsDone}
                    /> */}
                    <input
                      type="checkbox"
                      id={`Checkbox-${user.student_id}`}
                      name={`Checkbox-${user.student_id}`}
                      value={user.student_id}
                      onClick={() => markHelpRequestAsDone(user.student_id)}
                    />
                    <div className={Styles.individualStudent}>
                      <div className={Styles.studentImgContainer}>
                        <img src={user.profile_pic} alt="Student profile" />
                        <p>
                          {user.name.split(" ")[0].toUpperCase()} needs help
                          with their project
                        </p>
                      </div>

                      <div className={Styles.dateTimeContainer}>
                        <div className={Styles.date}>
                          {formatDate(user.date_created, "date")}
                        </div>
                        <div className={Styles.time}>
                          {formatDate(user.date_created, "time")}
                        </div>
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
