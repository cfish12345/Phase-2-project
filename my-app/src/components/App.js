import React from 'react';
import Menu from './Menu';
import Header from './Header';
import Navbar from './Navbar';
import { Routes } from 'react-router-dom';
import OnlineOrder from './OnlineOrder';
import Application from './Application';

function App() {

  return (
    <div className="app" >
      <header className="App-header">
        <Navbar />
        <Header />
        <Menu />
        <Application />
        <OnlineOrder />
      </header>
    </div>
  );
}

export default App;
