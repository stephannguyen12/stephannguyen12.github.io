import { motion } from 'framer-motion'

import Footer from "../Footer"

import ProjectGrid from "./ProjectGrid"

function Projects() {
    return (
        <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.3,
                }}>
        <div className="width-1280 side-padding">
            <div>
                <h1 className="left-justified">Projects</h1>
            </div>
            <div>
                <ProjectGrid></ProjectGrid>
            </div>
        </div>
        <Footer />
        </motion.div>
    )
}

export default Projects
