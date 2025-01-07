

import './App.css';
import './Buttons.css';
import './Animations.css';

import Homepage from './pages/Homepage'
import About from './pages/About'
import Sketchbook from './pages/Sketchbook'
import Portfolio from './pages/Portfolio'
import Disclosure from './pages/Disclosure'
import Projects from './pages/Projects'
import NavBar from './NavBar'


import ScrollToTop from './hooks/ScrollToTop'
import {Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div>
      <div><NavBar/></div> {/* nav bar */}
      <div className="full-height"> {/*interactive thing*/}
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="Portfolio" element={<Portfolio/>}/>
          <Route path="Disclosure" element={<Disclosure/>}/>
          <Route path="Projects" element={<Projects/>}/>
          <Route path="Sketchbook" element={<Sketchbook/>}/>
          <Route path="About" element={<About/>}/>
        </Routes>
      </div>
      
      <div className="background-image"> {/*background iamge*/}
      </div>

      <div style={{backgroundColor:"orange", padding:"2rem 0"}}> {/* temp banner*/}
        <div className="margin-6">
        <h2 className="text-24">
          This website is currently under renovation. 
          More to come soon.</h2>
        </div>
          
      </div>

    </div>
  );
}

export default App;
