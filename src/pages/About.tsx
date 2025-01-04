import { useLocation, useNavigate } from 'react-router-dom'

import video from '../files/background/home-to-about.mp4'
import image from '../files/background/about.jpg'
import React, { useState } from 'react';

function About () {
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
    
    return(

        <div>
            <div className="interactive-container">
                {button ==='homeToAbout' ? (
                    <video className="interactive-media"
                            src={video} autoPlay muted loop={false} 
                            playsInline disablePictureInPicture
                            onEnded={handleVideoEnd}>
                    </video> 
                    ) : (
                    <img className="interactive-media fade-in-1s" src={image}
                            onAnimationEnd={handleVideoEnd}>
                    </img>
                )}
                {showButtons && <Buttons/>}

            </div>
        </div>
    )

    function Buttons() {
        return (
            <div className="fade-in-1s">
                <div style={{position:"absolute", right:"6vw", bottom:"6vh", zIndex:"100"}}>
                    <p className='strict'>There is not much here at the moment. More to come soon.</p>
                </div>
                <button className="about-to-home"
                        onClick={() => handleNavigate("/", "aboutToHome")}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="25" height="25" fill="color: rgb(30, 30, 30)" 
                        stroke="currentColor" strokeWidth="0.5"
                        className="bi bi-arrow-left-circle" viewBox="-1 -1 18 18">
                        <path style={{padding:"1rem"}} fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 
                        0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 
                        1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 
                        0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                    </svg>
                </button>
                <button className="button-dot about-to-sketchbook"
                        onClick={() => handleNavigate("/Sketchbook", "aboutToSketchbook")}>
                        </button>
            </div>

        )
    }

}

export default About;
