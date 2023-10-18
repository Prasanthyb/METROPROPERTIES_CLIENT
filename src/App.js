import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {useState} from 'react'; 
import './App.css';
import HelpRequests from './pages/HelpRequests/HelpRequests';
import Home from './pages/Home/Home';
import StudentProjects from './pages/PrasanthyComponents/StudentProjects';
import StudentProfileViewer from './pages/PrasanthyComponents/StudentProfileViewer';
import TeacherProfileViewer from './pages/TeacherProfileViewer/TeacherProfileViewer';
import ErrorPage from './pages/PrasanthyComponents/ErrorPage';
import StudentProfiles from './pages/StudentProfiles/StudentProfiles'


function App() {
  const [currentUser, setCurrentUser] = useState({id: -1, type:'none'});
  function updateCurrentUser(newId, newType) {
    const newUser = {id: newId, type: newType};
    setCurrentUser(newUser);
  }

  return (
    <Routes>
      <Route path='/' element={<Home currentUser={currentUser} updateCurrentUser={updateCurrentUser}></Home>}></Route>
      <Route path = "/helprequests" element={<HelpRequests />} />
      <Route path = "/studentprofiles" element={<StudentProfiles/>} />
      <Route path = "/studentprojects" element={<StudentProjects />} />
      <Route path = "/student/:id" element={<StudentProfileViewer/>} />
      <Route path ="/teacher/:id" element={<TeacherProfileViewer/>} />
      <Route path = "*" element={<ErrorPage/>} />
    </Routes>
  );
}

export default App;