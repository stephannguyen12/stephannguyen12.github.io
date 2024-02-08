
import React from 'react'

import { data, i_data } from './ProjectData'


type ProjectContextType = { /* for ProjectContext */
    projectData: { [name: string]: i_data; };
    setProjectData: React.Dispatch<React.SetStateAction<{ [name: string]: i_data; }>>
}

export const ProjectContext = React.createContext<ProjectContextType | null>(null)


type Props = { /* for children in ProjectContextProvider*/
    children: React.ReactNode;
}


export const ProjectContextProvider = ( {children}: Props) => { /* props type here might be problematic */
    const [projectData, setProjectData] = React.useState(data);

    return (
        <ProjectContext.Provider value={{projectData, setProjectData}}>
            {children}
        </ProjectContext.Provider>
    )
}

export const useProjectContext = () => { /* custom hook */
    const projectContext = React.useContext(ProjectContext);
    if (!projectContext) throw new Error("context not used inside the provider");
    return projectContext;
}

/*
export type dataContextType  = {
    projectData: i_data[];
    setProjectData: React.Dispatch<React.SetStateAction<i_data>>;
};

export const ProjectContext = createContext<dataContextType | null>(null);

const ProjectProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [projectData, setProjectData] = useState(data);
}



    return(
        <ProjectContext.Provider value={{ aProject, setAProject }}>
            {children};
        </ProjectContext.Provider>
    )
}


*/

