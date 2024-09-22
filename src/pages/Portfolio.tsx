
import {data} from './PortfolioGridData'

function Portfolio() {
    
    return(
        <div className="margin-1600">
            <div className="portfolio-grid">
            {data.map((image) => (
                <div>
                <img className="portfolio-grid-item" src={image.image}></img> 
                </div>
            ))}
            </div>
        </div>
    )
}

export default Portfolio;