
import { useProjectContext } from "./ProjectContext"


/* for pdf viewer to work ======================== */
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
// ====================================================



function ProjectPDF (props: any) {
    const projectContext = useProjectContext();

    return (
        <>
        <iframe 
                className='embedded-pdf'
                src={projectContext.projectData[props.name].src} 
                allow="autoplay">
        </iframe>
        </>
    )
}

export default ProjectPDF

/* // this is how the pdfs were rendered when they were stored locally
    import React from 'react'
    import {Document, Page } from 'react-pdf'

    const [ numPages, setNumPages] = React.useState<number>(0);


<center>
<div className="PDF">
        <Document className="Document"
            file={projectContext.projectData[props.name].PDF}
            loading={<div>page is loading...</div>}
            onLoadSuccess={({numPages}) => setNumPages(numPages)}
            
            >
            {Array.apply(null, Array(numPages))
            .map((_, i)=>i+1)
            .map(page => <Page 
                className="Page drop-shadow-heavy"
                renderTextLayer={false}
                renderAnnotationLayer={false}
                scale={1}
                pageNumber={page}/>)}
        </Document>
</div>
</center>
*/
