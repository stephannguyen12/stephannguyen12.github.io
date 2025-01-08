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

    const [showContent, setShowContent] = useState(false);
    const handleVideoEnd = () => {
        setShowContent(true);
    };

    document.addEventListener("scroll", () => {
        const fadeOutDivs = document.querySelectorAll(".fade-out-on-scroll");
        const fadeInDivs = document.querySelectorAll(".fade-in-on-scroll");
        const pos = window.scrollY;

        fadeOutDivs.forEach((fadeOutDiv: Element) => {
            const opacity = Math.max(1 - pos / 100, 0);
            (fadeOutDiv as HTMLElement).style.opacity = opacity.toString();
        })
        fadeInDivs.forEach((fadeInDiv: Element) => {
            const opacity = Math.min(pos / 100, 1);
            (fadeInDiv as HTMLElement).style.opacity = opacity.toString();
        })
    })

    
    return(
        <div className="flex">
            <div>
                <div className="interactive-container fade-out-on-scroll">
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
                    {showContent && <Buttons/>}
                </div>
                {showContent && <Content/>}
            </div>
        
        </div>

    )

    function Buttons() {
        return (
            <div className="fade-in-1s nav-space">
                <button className="about-to-home"
                        onClick={() => handleNavigate("/", "aboutToHome")}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="25" height="25" fill="color: rgb(30, 30, 30)" 
                        stroke="currentColor" strokeWidth="0.5"
                        className="bi bi-arrow-left-circle" viewBox="-1 -1 18 18">
                        <path style={{padding:"1rem"}} fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 
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

    function Content() {
        return (

        <div className="content">
            <div className="nav-space">
            </div>
            <div className="column-container margin-6 fade-in-1s">
{/* tertiary */}<div className="column-tertiary"> {/* left column */}
                </div>
{/* secondary */}<div className="column-secondary"> {/* middle column */}
                </div>
{/* primary */} <div className="column-primary"> {/* right column */}
                    <div className="no-overflow">
                        <div className="fly-up-big text-120"
                        style={{margin:"0 0 -0.5rem 0"}}>About</div></div>
                    <div className="big-spacer paragraph fly-up-small"
                        >
                        Hello, I'm Stephan! This website is a personal project
                        built from scratch, created to both develop my webdev skills
                        and showcase some of my work in one place. Feel free to explore
                        whatever is on here. 
                    </div>
                    <div className="big-spacer paragraph fly-up-small no-overflow fade-out-on-scroll">
                        Scroll for more &#8595;
                    </div>
                    <div className="big-spacer fly-up-big text-24 fade-in-on-scroll">
                        More to come soon.
                    </div>
                    {/*
                    <div className="small-spacer paragraph fly-up-small no-overflow fade-in-on-scroll">
                        here is another box! this one should be below the first
                        one. stuff to include in the about section:
                        education,
                        places lived / study abroad,
                        interests / hobbies,
                        skills / technology?
                    </div>
                    <div className="big-spacer text-24 fade-in-on-scroll">
                        Experience Design 
                    </div>
                    <div className="big-spacer text-24 fade-in-on-scroll">
                        Athletics
                    </div>
                    <div className="big-spacer text-24 fade-in-on-scroll">
                        Experience Design 
                    </div>
                    */}
                </div>

            </div>
        </div>

        )

    }

}

export default About;
