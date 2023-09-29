import React from 'react';
import {Routes,Route} from 'react-router-dom'; 

import './App.css';
import HelpRequests from './pages/HelpRequests/HelpRequests';
// import StudentProfiles from './pages/StudentProfiles/StudentProfiles';
import StudentProjects from './assets/StudentDashboard/PrasanthyComponents/StudentProjects';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/HelpRequests' element={<HelpRequests />}></Route>
        <Route path='/StudentProjects' element={<StudentProjects/>}></Route> 
      {/* There is something wrong with the below file path, delete and try again */}
      {/* <StudentProfiles /> */}
      </Routes>
    </div>
  );
}

export default App;
