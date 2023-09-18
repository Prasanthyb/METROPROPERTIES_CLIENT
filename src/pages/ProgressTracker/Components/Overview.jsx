import React from "react";
import Styles from "./Overview.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faCheck } from '@fortawesome/free-solid-svg-icons';


export default function Overview() {
  return (
    <div className={Styles.overviewContainer}>
      <div className={Styles.helpRequestsContainer}>
        <div className={Styles.helpRequestsHeader}>
          <h1>HELP REQUESTS</h1>
        </div>
        <div className={Styles.helpRequestMarkReply}>
          <p><FontAwesomeIcon icon={faReply} />REPLY</p>
          <p><FontAwesomeIcon icon={faCheck} />MARK AS DONE</p>
        </div>
      </div>
    </div>
  );
}
