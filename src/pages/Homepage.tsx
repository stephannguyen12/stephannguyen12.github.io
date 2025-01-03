

import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import homepage from '../files/background/homepage.mp4';
import aboutToHome from '../files/background/about-to-home.mp4'

function Homepage () {
  const location = useLocation();
  const button = location.state?.button;
  
  const navigate = useNavigate();
  const handleClick = (buttonId: string) => {
    navigate('About', { state: { button: buttonId } });
  }

  return (
    <div>
      <div className="interactive-container">
        {button === 'aboutToHome' ? <Video/> : <Default/>} 
        {/*if button 'about -> home' is clicked, play 'about -> home' vid*/}
        
        <button className="button-home-to-about" onClick={() => handleClick("homeToAbout")}> 
        About Me
        </button> 
        
      </div>
    </div>
  );
  
  function Default() { {/*top down*/}
    return (
        <video className="interactive-media"
            src={homepage} autoPlay muted loop={false} 
            playsInline disablePictureInPicture>
        </video>
    )
  }

  function Video() { {/* about -> home*/}
    return (
      <video className="interactive-media"
          src={aboutToHome} autoPlay muted loop={false} 
          playsInline disablePictureInPicture>
      </video>
    );
  };

}

export default Homepage;