import React from "react";
import "./styleDropDownList.css";
import { Link } from "react-router-dom";

//---------- Define a functional component called DropDownList--------------

const DropDownList = () => {



  
  return (
    <div className="dropdownProfile">
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>

  {/*------------------ My Profile Link------------------------------------ */}

        <li style={{ fontSize: "16px", padding: "8px 0", fontWeight: "bold" }}>
          <Link
            to="/student/5"
            style={{ textDecoration: "none", color: "black" }}>
            My Profile
          </Link>
        </li>

 {/*---------------------------- Settings Link ---------------------------------*/}

        <li style={{ fontSize: "16px", padding: "8px 0", fontWeight: "bold" }}>
          <Link
            to="/projects"
            style={{ textDecoration: "none", color: "black" }}>
            Settings
          </Link>
        </li>

{/*------------------------------- Logout Link-------------------------------------- */}

        <li style={{ fontSize: "16px", padding: "8px 0", fontWeight: "bold" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

//------------------------------ Export the DropDownList component as the default export---------------//

export default DropDownList;

