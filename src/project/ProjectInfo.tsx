import { useProjectContext } from "./ProjectContext"

function ProjectInfo(props: any) {
    const projectContext = useProjectContext();
    
    return (
        <>
            <p>
                id = {projectContext.projectData[props.name].day}
            </p>
        </>
    )
}

export default ProjectInfo