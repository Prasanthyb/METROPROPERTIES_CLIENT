






import React from 'react';
import {Routes,Route} from 'react-router-dom'; 
import './App.css';
import HelpRequests from './pages/HelpRequests/HelpRequests';
import Home from './pages/Home/Home';


import StudentProjects from './pages/PrasanthyComponents/StudentProjects';
import StudentProfileViewer from './pages/PrasanthyComponents/StudentProfileViewer';
import ErrorPage from './pages/PrasanthyComponents/ErrorPage';

import StudentProfiles from './pages/StudentProfiles/StudentProfiles'


function App() {
  return (
    <Routes>
      
     
      
     


     
   

      <Route path='/' element={<Home></Home>}></Route>
      <Route path = "/helprequests" element={<HelpRequests />} />
      <Route path = "/studentprofiles" element={<StudentProfiles/>} />
      <Route path = "/studentprojects" element={<StudentProjects />} />
      <Route path = "/studentprofileviewer" element={<StudentProfileViewer/>} />
      <Route path = "*" element={<ErrorPage/>} />
       
      
      </Routes>

  );
}

export default App;
