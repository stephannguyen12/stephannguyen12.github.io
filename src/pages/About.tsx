import { motion } from 'framer-motion'

import Footer from "../Footer"

import landingImage from "../images/aboutimage.jpg"
import emailImage from "../images/email.png"
import linkedinImage from "../images/linkedin.png"
import locationImage from "../images/location.png"


function About() {
    
    return (
        <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.3,
                }}>
        <div className="about-image-container">
            <img src={landingImage} className="landing-image about-image" alt="pic of me" id="aboutLandingImage"/>
        </div>
        <div className="about width-1280 side-padding">
            <div>
                <h1>About me...</h1>
                <p> This is the about page, there is not much here at the moment.</p>
            </div>
            <ul>
                <li><a><img src={locationImage}></img><p>San Luis Obispo, CA</p></a></li>
                <li><a href="mailto:stephan.nguyen12@gmail.com" target="_blank"><img src={emailImage}></img><p>stephan.nguyen12@gmail.com</p></a></li>
                <li><a href="https://www.linkedin.com/in/stephannguyen12/" target="_blank"><img src={linkedinImage}></img><p>linkedin.com/in/stephannguyen12</p></a></li>
            </ul>

        </div>
        <Footer />

        </motion.div>

    )
}

export default About
