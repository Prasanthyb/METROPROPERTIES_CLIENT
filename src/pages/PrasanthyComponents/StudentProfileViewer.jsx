import React from 'react';
import Courtney from  "../../assets/students/CourtneyBristol.png";
import  './styleStudentProfileViewer.css';
import NavBar from'./NavBar';
import Footer from './Footer';

const StudentProfileViewer = () => {
  return (

   
   
    <div className="parent" >
     <div className="navbar">
   
   <NavBar/>
     </div>
        
        <div className="outerDiv">
            <div className="leftDiv">
            <img className="img" src={Courtney} alt="Company Logo" />
            <p className="edit"><button className="editprofilebutton">EDIT PROFILE</button></p>
            <p className="photo"><button className="changephotobutton">CHANGE PHOTO</button></p>
            </div>
            <div className="rightDiv">           
                <h2> Courtney Bristol</h2>

                <div class="container">
  <ul class="item-list">
    <li>School</li>
    <li>Teacher</li>
    <li>Course</li>
    <li>Date of Birth</li>
    <li>Contact No</li>
    <li>Email Address</li>
  </ul>
</div>

            </div>
            <a href="StudentProjects.jsx" class="custom-button">BACK TO PROJECTS</a>
            </div>
            
           
            <div className="clear">
            </div>

            <div className="footer">
           <Footer/>
           </div>
            
           </div> 
           
          
    
   

  )
}

export default StudentProfileViewer;
