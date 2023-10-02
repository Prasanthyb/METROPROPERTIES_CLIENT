import './App.css';
import HelpRequests from './pages/HelpRequests/HelpRequests';
// import StudentProfiles from './pages/StudentProfiles/StudentProfiles';
import React from 'react';
import StudentProjects from './pages/PrasanthyComponents/StudentProjects';

function App() {
  return (
    <div className="App">
      <HelpRequests />
      <StudentProjects/> 
      {/* There is something wrong with the below file path, delete and try again */}
      {/* <StudentProfiles /> */}
    </div>
  );
}

export default App;
