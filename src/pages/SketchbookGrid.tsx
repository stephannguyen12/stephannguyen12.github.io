
import {data} from './SketchbookGridData'
function SketchbookGrid() {

    return(
        <div className="sketchbook-grid">
            {data.map((image) => (
                <div>
                <img className="sketchbook-image drop-shadow-light" src={image.image}></img> 
                </div>
            ))}
        </div>
    )
}

export default SketchbookGrid

