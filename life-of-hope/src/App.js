import './App.css';
import React from 'react';  

import Gallery from './components/Gallery';
import Home from './components/Home'
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>  
        <Footer/>
      </div>
    </Router>
  );
}

export default App;