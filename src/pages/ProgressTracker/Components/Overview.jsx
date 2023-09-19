import React from "react";
import Styles from "./Overview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Overview() {
  return (
    <div className={Styles.overviewContainer}>
      <div className={Styles.helpRequestsContainer}>
        <div className={Styles.helpRequestsHeader}>
          <h1>HELP REQUESTS</h1>
        </div>
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
        <div className={Styles.individualRequestsContainer}>

          {/* ------------------- */}

          <div className={Styles.individualRequests}>

          <input type="checkbox" id="mCheckbox" name="myCheckbox" value="checkboxValue" />

            <div className={Styles.individualStudent}>

              <div>
              <img src="" alt="" />
              <p>Student needs help with their project</p>
              </div>

              <p>Date</p>

            </div>

          </div>

          {/* ------------------- */}

          <div className={Styles.individualRequests}>
          <input type="checkbox" id="mCheckbox" name="myCheckbox" value="checkboxValue" />
          </div>

          <div className={Styles.individualRequests}>
          <input type="checkbox" id="mCheckbox" name="myCheckbox" value="checkboxValue" />
          </div>

          <div className={Styles.individualRequests}>
          <input type="checkbox" id="mCheckbox" name="myCheckbox" value="checkboxValue" />
          </div>

          <div className={Styles.individualRequests}>
          <input type="checkbox" id="mCheckbox" name="myCheckbox" value="checkboxValue" />
          </div>

        </div>
      </div>
    </div>
  );
}
