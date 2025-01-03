
import SketchbookGrid from "./SketchbookGrid"

function Sketchbook() {
    
    return(
        <div className="margin-1600">

            <div className="fade-in-3s-80 min-height-page">
                <SketchbookGrid />
            </div>

            <div className="loading">
                <h2>loading...</h2>
            </div>
        </div>
    )
}

export default Sketchbook;