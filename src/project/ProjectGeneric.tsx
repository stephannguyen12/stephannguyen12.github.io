
import {useParams} from 'react-router-dom'
/* context */
import { ProjectContextProvider } from './ProjectContext'

import ProjectPDF from './ProjectPDF';
/* 
import ProjectInfo from './ProjectInfo';

const ProjectGeneric = () => {
    const addr = useParams();
    const str: string = addr.name ?? 'not_found'
    
    return (
        <>
            <ProjectContextProvider>
                <div>
                    <ProjectInfo name={str} />
                </div>
                <div>
                    <ProjectPDF name={str} />
                </div>
            </ProjectContextProvider>
        </>
    )
}

export default ProjectGeneric
*/


const ProjectGeneric = () => {
    /* get the id from the address bar */
    const addr = useParams();
    const str: string = addr.name ?? 'not_found'
    
    return (
        <>
            <ProjectContextProvider>
                <div>
                    <ProjectPDF name={str} />
                </div>
            </ProjectContextProvider>
        </>
    )
}

export default ProjectGeneric