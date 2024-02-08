
import { motion } from 'framer-motion'

import Footer from '../Footer'
import landingImage from '../images/homeImage.jpg'


function Home() {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.3,
        }}>
      <div className="landing-image-container">
          <img src={landingImage} className="landing-image" alt="overlooking buildings" />
      </div>
      <div className="width-1280 side-padding">
          <h1>Hello, I'm Stephan!</h1>
          <p>This website is very much a work-in-progress. Feel free to 
            browse what's here.</p>
      </div>
      <Footer />
    </motion.div>
  )
}

export default Home
