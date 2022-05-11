import React from 'react';
import Menu from './Menu';
import Thanks from './Thanks';
import Home from "./Home"
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Application from './Application';

function App() {

  return (
    <div className="app" >
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/Thanks" element={<Thanks />} />
      </Routes>
      
    </div>
  );
}

export default App;
