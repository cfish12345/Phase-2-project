import React from 'react';
import Menu from './Menu';
import Thanks from './Thanks';
import Home from "./Home"
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Application from './Application';


function App() {

  const cart = []

  return (
    <div className="app" >
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Menu" element={<Menu cart={cart}/>} />
        <Route path="/Application" element={<Application />} />
        <Route path="/Thanks" element={<Thanks cart={cart}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
