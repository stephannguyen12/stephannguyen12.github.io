

import './App.css';

import Homepage from './pages/Homepage'
import About from './pages/About'
import Sketchbook from './pages/Sketchbook'
import Portfolio from './pages/Portfolio'
import Projects from './pages/Projects'
import NavBar from './NavBar'


import ScrollToTop from './hooks/ScrollToTop'
import {Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div>

      <div><NavBar/></div>

      <div className="full-height"> {/*video and content*/}
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="Portfolio" element={<Portfolio/>}/>
          <Route path="Projects" element={<Projects/>}/>
          <Route path="Sketchbook" element={<Sketchbook/>}/>
          <Route path="About" element={<About/>}/>
        </Routes>
      </div>
      
      <div className="background-image"> {/*background iamge*/}
      </div>

      <div className="banner"> {/* temp banner*/}
        <div className="margin-1600">
          <h2 className="text-48">This website is currently under renovation. More to come soon.</h2>
        </div>
      </div>

    </div>
  );
}

export default App;
