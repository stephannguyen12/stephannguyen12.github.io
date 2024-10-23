import React from 'react';

import './App.css';

import Sketchbook from './pages/Sketchbook'
import Portfolio from './pages/Portfolio'
import Projects from './pages/Projects'

import ScrollToTop from './hooks/ScrollToTop'
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
      <div>

        <div className="banner">
          <div className="margin-1600">
            <h2 className="text-48">This website is currently under renovation. More to come soon.</h2>
          </div>
        </div>

        <nav className="margin-1600 nav">
          <ul className="text-30">
            <li><Link to="/">Stephan Nguyen</Link></li>
            <li><Link to="/">Sketchbook</Link></li>
            <li><Link to="Projects">Projects</Link></li>
          </ul>
        </nav>

        <div>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Sketchbook/>}/>
            <Route path="Portfolio" element={<Portfolio/>}/>
            <Route path="Projects" element={<Projects/>}/>
          </Routes>
        </div>

        <div className="margin-1600 footer">
          <p>Stephan Nguyen</p>
        </div>

      </div>
  );
}

export default App;
