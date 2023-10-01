import React from 'react';
import {Routes,Route} from 'react-router-dom'; 
import './App.css';
import HelpRequests from './pages/HelpRequests/HelpRequests';
import Home from './pages/Home/Home';
// import StudentProfiles from './pages/StudentProfiles/StudentProfiles';
import StudentProjects from './pages/PrasanthyComponents/StudentProjects';
import StudentProfileViewer from './pages/PrasanthyComponents/StudentProfileViewer';
import ErrorPage from './pages/PrasanthyComponents/ErrorPage';
import Features from './pages/PrasanthyComponents/Features';
import Teachers from './pages/PrasanthyComponents/Teachers';
import EditProfile from './pages/PrasanthyComponents/EditProfile';
import ChangePhoto from './pages/PrasanthyComponents/ChangePhoto';
import DashBoard from './pages/PrasanthyComponents/DashBoard';



function App() {
  return (
    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path = "/helprequests" element={<HelpRequests />} />
      <Route path = "/studentprojects" element={<StudentProjects />} />
      <Route path = "/studentprofileviewer" element={<StudentProfileViewer/>} />

      <Route path = "/teachers" element={<Teachers />} />
      <Route path = "/editprofile" element={<EditProfile />} />
      <Route path = "/changephoto" element={<ChangePhoto/>} />
      <Route path = "/features" element={<Features />} />
      <Route path = "/dashboard" element={<DashBoard />} />
      <Route path = "*" element={<ErrorPage/>} />
       
      
      </Routes>
  );
}

export default App;