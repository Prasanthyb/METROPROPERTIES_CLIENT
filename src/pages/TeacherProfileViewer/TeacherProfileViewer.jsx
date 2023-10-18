import React, { useEffect, useState } from "react";
// import Styles from "./TeacherProfileViewer.module.css";
import NavBar from "../PrasanthyComponents/NavBar";
import "./TeacherProfileViewer.css";
// import Footer from "./Footer";
// import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";



export default function TeacherProfileViewer() {
    const { id } = useParams();
    const [teachers, setTeachers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `http://localhost:4000/api/teacherprofileviewer/${id}`
            );
            const data = await response.json();
            setTeachers(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, [id]);

  return (
    <div className="parent">
        {/* NAVBAR */}
        <div>
            <NavBar />
        </div>
        {/* ^^^^^^^^^^^^^^^^^^^^^^ */}
        {/* TEACHER PROFILE VIEWER CONTAINER */}
        {teachers.map((teacher) => (
        <div key={teacher.teacher_id} className="outerDiv">
          <div className="leftDiv">

  {/*---------------------- Student profile picture------------------ */}

            <img
              className="img"
              src={teacher.profile_pic}
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

            <h2>{teacher.name}</h2>
            <div className="container">
              <ul className="item-list">
                <li>
                  <span className="label">School</span> {teacher.school}
                </li>
                <li>
                  <span className="label">Date of Birth</span>{" "}
                  {teacher.date_of_birth}
                </li>
                <li>
                  <span className="label">Contact No</span>{" "}
                  {teacher.contact_number}
                </li>
                <li>
                  <span className="label">Email Address</span> {teacher.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
        {/* ^^^^^^^^^^^^^^^^^^^^^^ */}

    </div>
  );
}


