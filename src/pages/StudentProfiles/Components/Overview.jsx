// import React from 'react'
// import Styles from "../Components/Overview.module.css"

// export default function  Overview() {
//   return (
//     <div className={Styles.overviewContainer}>Student Profiles</div>
//   )
// }

// ################################################################################

import React from "react";
import Styles from "./Overview.module.css";
// --------------------- Font Awesome library imports
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default function Overview() {
  return (
    // ------------------------- overviewContainer provides ability to position the helpRequestsContainer
    <div className={Styles.OverviewContainer}>
      {/* ------------------------ helpRequestsContainer holds all content displayed within the overContainer */}
      <div className={Styles.StudentProfilesContainer}>
        <h1>STUDENT PROFILES CONTAINER</h1>
      </div>
      {/* ^^^^^^^^^^^^^^^ END of helpRequestsContainer */}
    </div>
    // ^^^^^^^^^^^^^^ END of overviewContainer
  );
}

