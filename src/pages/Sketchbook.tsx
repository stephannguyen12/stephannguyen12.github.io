import { motion } from 'framer-motion'

import Footer from "../Footer"

import SketchbookGrid from "./SketchbookGrid"

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
        <div>
            <div className="width-1280 side-padding">
                <h1 className="left-justified">Sketchbook</h1>
            </div>
            <div className="sketch-wrapper">
                <div className="sketchbook">
                    <SketchbookGrid />
                </div>
            </div>

        </div>
        <Footer />
        </motion.div>
    )
}

export default Projects