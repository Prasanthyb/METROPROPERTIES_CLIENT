import React, { useEffect, useState } from "react";
import "./styleStudentProfileViewer.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function StudentProfileViewer() {

//------------------------- State to store student data----------------------//

  const [students, setStudents] = useState([]);

//------------------- Fetch student data from the API when the component mounts--------------//
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/studentprofileviewer"
        );
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="parent">

  {/*-------------------------- Navbar------------------------- */}

      <div className="navbar">
        <NavBar />
      </div>

  {/*------------------- Render student profiles------------------ */}

      {students.map((student) => (
        <div key={student.student_id} className="outerDiv">
          <div className="leftDiv">

  {/*---------------------- Student profile picture------------------ */}

            <img
              className="img"
              src={student.profile_pic}
              alt="Student profile"
            />
            <p className="edit">
              <button className="editprofilebutton">EDIT PROFILE</button>
            </p>
            <p className="photo">
              <button className="changephotobutton">CHANGE PHOTO</button>
            </p>
          </div>

          <div className="rightDiv">

  {/*----------------------------- Student information------------------------ */}

            <h2>{student.student_name}</h2>
            <div className="container">
              <ul className="item-list">
                <li>
                  <span className="label">School</span> {student.school}
                </li>
                <li>
                  <span className="label">Teacher</span> {student.teacher_name}
                </li>
                <li>
                  <span className="label">Course</span> {student.course}
                </li>
                <li>
                  <span className="label">Date of Birth</span>{" "}
                  {student.date_of_birth}
                </li>
                <li>
                  <span className="label">Contact No</span>{" "}
                  {student.contact_number}
                </li>
                <li>
                  <span className="label">Email Address</span> {student.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}

  {/*-------------------------- Back to Projects button--------------------------------- */}

      <div>
        <div>
          <button className="custom-button">
            <NavLink className="navbar" to="/projects">
              BACK TO PROJECTS
            </NavLink>
          </button>
        </div>
      </div>

{/*--------------------------------------- Footer---------------------------------------- */}

      <div className="clear"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default StudentProfileViewer;
