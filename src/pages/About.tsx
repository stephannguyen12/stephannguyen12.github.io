import { useLocation, useNavigate } from 'react-router-dom'

import video from '../files/background/home-to-about.mp4'
import image from '../files/background/about.jpg'

function About () {
    const location = useLocation();
    const button = location.state?.button;


    const navigate = useNavigate();
    const handleNavigation = (buttonId: string) => {
        navigate('/', { state: { button: buttonId } });
    };
    return(

        <div>
            <div className="interactive-container">
                {button ==='homeToAbout' ? <Video/> : <Default/>} 
                {/*if 'home -> about' button is clicked, play vid*/}
            </div>

            <div>
                        <button style={{background:"transparent", zIndex:"20"}} onClick={() => handleNavigation('aboutToHome')}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="40" height="40" fill="currentColor" 
                                stroke="currentColor" strokeWidth="0.5"
                                className="bi bi-arrow-left-circle" viewBox="-1 -1 18 18">
                                <path style={{padding:"1rem"}} fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 
                                0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 
                                1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 
                                0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                            </svg>
                        </button>
            </div>

        </div>
    )

    function Default() {
        return (
            <img className="interactive-media" src={image}>
            </img>
        )
    }
    function Video() {
        return (
            <video className="interactive-media"
                src={video} autoPlay muted loop={false} 
                playsInline disablePictureInPicture>
            </video>
        )
    }

}

export default About;
