import './App.css';
import HelpRequests from './pages/HelpRequests/HelpRequests';
// import StudentProfiles from './pages/StudentProfiles/StudentProfiles';
import React from 'react';
import StudentProjects from './assets/StudentDashboard/PrasanthyComponents/StudentProjects';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <HelpRequests /> */}
      {/* <StudentProjects/>  */}
      {/* There is something wrong with the below file path, delete and try again */}
      {/* <StudentProfiles /> */}
      <Home></Home>
    </div>
  );
}

export default App;
