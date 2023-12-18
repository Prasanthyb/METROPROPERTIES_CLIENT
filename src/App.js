import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {useState} from 'react'; 
import './App.css';

import Home from './pages/PrasanthyComponents/Home';
import View from './pages/PrasanthyComponents/View';
import ErrorPage from './pages/PrasanthyComponents/ErrorPage';
import ViewSearchbar from './pages/PrasanthyComponents/ViewSearchbar';
import Thank from './pages/PrasanthyComponents/Thank';




function App() {
  

  return (
    <Routes>
      
      
      <Route path = "/" element={<Home />} />
      <Route path = "/view" element={<View />} />  
      <Route path = "/thank" element={<Thank />}/> 
      <Route path = "/search" element={<ViewSearchbar />}/> 
      <Route path = "*" element={<ErrorPage/>} />
      
    </Routes>
  );
}

export default App;