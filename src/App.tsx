import React from 'react';
import logo from './logo.svg';
import './App.css';
import SketchbookGrid from './pages/SketchbookGrid';

function App() {
  return (
      <div>
        <div className="banner">
          <div className="margin-1600">
            <h2 className="text-48">This website is currently under construction. Be back soon.</h2>
            <p>Stephan Nguyen</p>
          </div>
        </div>

        <div className="margin-1600">
          <h1>Sketchbook</h1>
          <SketchbookGrid />
        </div>
      </div>
  );
}

export default App;
