
import {data} from './PortfolioGridData'

function Portfolio() {
    
    return(
        <>
            <div className="nav-space">
            </div>
            <div className="margin-1600">
                <div className="drop-shadow">
                    <h2 className="msg">! This is a secret page. It can only be accessed with a direct link. </h2>
                </div>
                <div className="portfolio-grid">
                {data.map((image) => (
                    <div>
                    <img className="portfolio-grid-item drop-shadow" src={image.image}></img> 
                    </div>
                ))}
                </div>
            </div>
        </>

    )
}

export default Portfolio;