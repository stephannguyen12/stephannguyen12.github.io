
import {data} from './SketchbookGridData'
function SketchbookGrid() {

    return(
        <div className="sketchbook-grid">
            {data.map((image) => (
                <div>
                <img className="sketchbook-grid-item" src={image.image}></img> 
                </div>
            ))}
        </div>
    )
}

export default SketchbookGrid

