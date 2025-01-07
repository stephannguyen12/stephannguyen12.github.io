
import {data} from './DisclosureGridData'

function Disclosure() {
    
    return(
        <>
            <div className="nav-space">
            </div>
            <div className="margin-6">
                <div className="drop-shadow">
                    <h3 style={{padding:"1rem"}}>! This is a secret page. It can only be accessed with a direct link. </h3>
                </div>
                <div className="portfolio-grid">
                {data.map((image) => (
                    <div>
                    <img alt="" className="portfolio-grid-item drop-shadow" src={image.image}></img> 
                    </div>
                ))}
                </div>
            </div>
            <div style={{height:"1rem"}}></div>
        </>

    )
}

export default Disclosure;