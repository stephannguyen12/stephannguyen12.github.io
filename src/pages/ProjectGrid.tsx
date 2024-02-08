import {Link} from 'react-router-dom'
import {data} from './ProjectGridData'
function ProjectGrid() {

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        grid-gap">
            {data.map((project) => (
                        <Link to={"/Projects/" + project.title}
                                className="drop-shadow-light">
                                <img src={project.image}></img> 
                                <h2> {project.title}</h2>
                                <p> {project.caption}</p>
                        </Link>
 ))}
        </div>
    )
}

export default ProjectGrid

