import './App.css';
import HelpRequests from './pages/HelpRequests/HelpRequests';
// import StudentProfiles from './pages/StudentProfiles/StudentProfiles';
import React from 'react';
import StudentProjects from './pages/PrasanthyComponents/StudentProjects';
import StudentProfileViewer from './pages/PrasanthyComponents/StudentProfileViewer';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import ErrorPage from './pages/PrasanthyComponents/ErrorPage';
import Features from './pages/PrasanthyComponents/Features';


function App() {
  return (
    <Router>
    <Routes>


      <Route path = "/helprequests" element={<HelpRequests />} />
      <Route path = "/studentprojects" element={<StudentProjects />} />
      <Route path = "/studentprofileviewer" element={<StudentProfileViewer/>} />
      <Route path = "/features" element={<Features />} />
      <Route path = "*" element={<ErrorPage/>} />
       
      
      </Routes>
      </Router>
  );
}

export default App;