import './App.css';
import HelpRequests from './pages/HelpRequests/HelpRequests';
// import StudentProfiles from './pages/StudentProfiles/StudentProfiles';
import React from 'react';
import StudentProjects from './pages/PrasanthyComponents/StudentProjects';
import StudentProfileViewer from './pages/PrasanthyComponents/StudentProfileViewer';


function App() {
  return (
    <div className="App">
      <HelpRequests />
      <StudentProjects/> 
      <StudentProfileViewer/>
      {/* There is something wrong with the below file path, delete and try again */}
      {/* <StudentProfiles /> */}
    </div>
  );
}

export default App;