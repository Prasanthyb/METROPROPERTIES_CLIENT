import React from "react";
import Styles from "./Overview.module.css";
import { useState, useEffect } from "react";
// --------------------- Font Awesome library imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faCheck } from "@fortawesome/free-solid-svg-icons";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default function Overview() {
  const [users, setUsers] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [markDoneButton, setMarkDoneButton] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/api/helprequests")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  const toggleCheckbox = (studentId) => {
    let updatedCheckboxes;
  
    if (selectedCheckboxes.includes(studentId)) {
      updatedCheckboxes = selectedCheckboxes.filter((id) => id !== studentId);
    } else {
      updatedCheckboxes = [...selectedCheckboxes, studentId];
    }
  
    setSelectedCheckboxes(updatedCheckboxes);
    setMarkDoneButton(updatedCheckboxes.length > 0);
  };
  

  const markHelpRequestAsDone = () => {
    const deleteRequests = selectedCheckboxes.map((studentId) =>
      fetch(`http://localhost:4000/api/markhelprequestasdone/${studentId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            console.log(`Help request ${studentId} has been marked as done`);
          } else {
            console.error(`Help request ${studentId} could not be marked as done`);
          }
        })
        .catch((error) => {
          console.error('Network error:', error);
        })
    );
  
    // After all delete requests are completed, fetch the updated list of help requests
    Promise.all(deleteRequests).then(() => {
      setMarkDoneButton(false);
      fetch("http://localhost:4000/api/helprequests")
        .then((res) => res.json())
        .then((res) => {
          setUsers(res); // Update the users state with the new data
        });
    });
  
    // Clear the selected checkboxes after marking as done
    setSelectedCheckboxes([]);
  };

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
          <button className={Styles.replyButton}>
              <FontAwesomeIcon icon={faReply} className={Styles.faIcon} />
              REPLY
          </button>
          <button onClick={markHelpRequestAsDone} className={`${Styles.markAsDoneButton} ${markDoneButton ? Styles.MarkAsDoneButtonCheckboxesSelected : ""}`}>
              <FontAwesomeIcon icon={faCheck} className={Styles.faIcon} />
               MARK AS DONE
          </button>
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
                      id={`Checkbox-${user.student_id}`}
                      name={`Checkbox-${user.student_id}`}
                      value={user.student_id}
                      checked={selectedCheckboxes.includes(user.student_id)}
                      onChange={() => toggleCheckbox(user.student_id)}
                    />
                    <div className={Styles.individualStudent}>
                      <div className={Styles.studentImgContainer}>
                        <img src={user.profile_pic} alt="Student profile" />
                        <p>
                          {user.name.split(" ")[0].toUpperCase()} needs help with their project
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
