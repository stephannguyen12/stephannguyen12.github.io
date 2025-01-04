
import SketchbookGrid from "./SketchbookGrid"

function Sketchbook() {
    
    return(
        <div>
            <div className="nav-space">
            </div>
            
            <div className="margin-6">
                <div className="loading">
                    loading...
                </div>
                <div className="fade-in-3s-80" style={{marginBottom:"6vh"}}>
                    <SketchbookGrid />
                </div>
            </div>

        </div>

    )
}

export default Sketchbook;