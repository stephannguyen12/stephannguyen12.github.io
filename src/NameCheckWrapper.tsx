import { useParams, Navigate } from 'react-router-dom'
import { data } from './project/ProjectData'
import ProjectGeneric from './project/ProjectGeneric';

function NameCheckWrapper() {
    const name  = useParams();
    const str: string = name.name ?? 'NotFound';

    return(
        (data.hasOwnProperty(str)) 
    ? <ProjectGeneric /> 
    : <Navigate to={'/NotFOund'} replace />
    );
}

export default NameCheckWrapper