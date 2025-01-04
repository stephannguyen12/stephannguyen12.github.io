

import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

import homepage from '../files/background/homepage.mp4';
import aboutToHome from '../files/background/about-to-home.mp4'

function Homepage () {
  const location = useLocation();
  const button = location.state?.button;
  
  const navigate = useNavigate();
  const handleNavigate = (path: string, buttonId: string) => {
    navigate(path, { state: { button: buttonId } });
  }
  
  const [showButtons, setShowButtons] = useState(false);
  const handleVideoEnd = () => {
    setShowButtons(true);
  };

  return (
    <div>
      <div className="interactive-container">
        {button === 'aboutToHome' ? ( /* about->home transition */
          <video className="interactive-media"
                src={aboutToHome} autoPlay muted loop={false} 
                playsInline disablePictureInPicture
                onEnded={handleVideoEnd}>
          </video>
        ) : ( /* top down */ 
          <video className="interactive-media fade-in-1s"
                src={homepage} autoPlay muted loop={false} 
                playsInline disablePictureInPicture
                onEnded={handleVideoEnd}>
          </video>
        )}
        {showButtons && <Buttons/> /* show buttons once video ends */}
      </div>
    </div>
  );

  function Buttons() {
    return(
      <div className="fade-in-1s">
        <button className="button-dot home-to-about" onClick={() => handleNavigate("/About", "homeToAbout")}> 
        </button> 
        <button className="button-dot home-to-projects" onClick={() => handleNavigate("/Projects", "homeToPojrects")}>
        </button>
      </div>
    )
  }
}

export default Homepage;